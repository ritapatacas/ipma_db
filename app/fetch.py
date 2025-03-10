import requests
import json
from collections import defaultdict
from connections import get_mongo_collection, IPMA_STATION_OBSERVATIONS, IPMA_WARNINGS, IPMA_CLOSEST_REGIONS
from utils import parse_datetime, logger

collection = get_mongo_collection()

# fetch observations data for ansriao station from IPMA API
def fetch_stations_data():
    try:
        res = requests.get(IPMA_STATION_OBSERVATIONS["api_url"])
        res.raise_for_status()
        return res.json()
    except requests.RequestException as e:
        logger.error(f"{e} error fetching")
        return None

def fetch_and_store_ansiao_station():
    data = fetch_stations_data()
    if data is None:
        logger.error("Failed to fetch data from IPMA API.")
        return

    try:
        station_data = [
            {
                "data_hora": parse_datetime(hour),
                "data": parse_datetime(hour).strftime("%Y-%m-%d"),
                "hora": parse_datetime(hour).strftime("%H:%M"),
                **obs.get(IPMA_STATION_OBSERVATIONS["ansiao_station"], {})
            }
            for hour, obs in data.items()
            if IPMA_STATION_OBSERVATIONS["ansiao_station"] in obs and obs[IPMA_STATION_OBSERVATIONS["ansiao_station"]] is not None
        ]
    except Exception as e:
        logger.error(f"Error processing station data: {e}")
        return

    if not station_data:
        logger.warning("There is no new data available.")
        return

    try:
        for entry in station_data:
            existing_entry = collection.find_one({"data_hora": entry["data_hora"]})
            if not existing_entry or existing_entry != entry:
                collection.update_one(
                    {"data_hora": entry["data_hora"]}, {"$set": entry}, upsert=True
                )
        logger.info(f"Fetched, processed, and stored {len(station_data)} records successfully")
    except Exception as e:
        logger.error(f"Error storing data to MongoDB: {e}")


#fetch weather warnings for closest regions from IPMA API
# maybe we should store this information in the database (?) not sure yet...
def fetch_warnings():
    id_area_avisos = {region["idAreaAviso"] for region in IPMA_CLOSEST_REGIONS}

    try:
        res = requests.get(IPMA_WARNINGS["api_url"])
        res.raise_for_status()
        warnings = res.json()
        
        filtered_warnings = [
            warning for warning in warnings
            if warning.get("idAreaAviso") in id_area_avisos and warning.get("awarenessTypeName") != "Agitação Marítima"
        ]
        
        organized_warnings = defaultdict(list)
        for warning in filtered_warnings:
            organized_warnings[warning["idAreaAviso"]].append({
                "awarenessTypeName": warning.get("awarenessTypeName"),
                "awarenessLevelID": warning.get("awarenessLevelID"),
                "startTime": warning.get("startTime"),
                "endTime": warning.get("endTime"),
                "text": warning.get("text", "")
            })

        pretty_result = json.dumps(organized_warnings, indent=4, ensure_ascii=False)
        # print(pretty_result)

        return organized_warnings
    except requests.RequestException as e:
        logger.error(f"{e} error fetching warnings")
        return None

def aggregate_warnings_by_region(organized_warnings):
    summary_dict = defaultdict(lambda: {"idsAreaAviso": []})

    for area, warnings in organized_warnings.items():
        for warning in warnings:
            key = (
                warning["awarenessTypeName"],
                warning["awarenessLevelID"],
                warning["startTime"],
                warning["endTime"],
                warning["text"]
            )

            if area not in summary_dict[key]["idsAreaAviso"]:
                summary_dict[key]["idsAreaAviso"].append(area)

            summary_dict[key].update({
                "awarenessTypeName": warning["awarenessTypeName"],
                "awarenessLevelID": warning["awarenessLevelID"],
                "startTime": warning["startTime"],
                "endTime": warning["endTime"],
                "text": warning["text"]
            })

    aggregated_warnings = {"warnings": list(summary_dict.values())}

    pretty_result = json.dumps(aggregated_warnings, indent=4, ensure_ascii=False)
    print(pretty_result)

    return aggregated_warnings

if __name__ == "__main__":
    fetch_and_store_ansiao_station()
    # fetch_warnings()
    aggregate_warnings_by_region(fetch_warnings())
