import requests
import json
from collections import defaultdict
from connections import IPMA, IPMA_API_URIS, observations_db
from utils import parse_datetime, logger

# Fetch observations data for Ansiao station from IPMA API
def fetch_stations_data():
    try:
        res = requests.get(IPMA_API_URIS["station_observations"])
        res.raise_for_status()
        return res.json()
    except requests.RequestException as e:
        logger.error(f"{e} error fetching")
        return None

def clean_entry(entry):
    """Cleans and formats a single station entry."""
    INVALID_VALUES = {-99}
    FIELDS_TO_CLEAN = ["precAcumulada", "pressao"]
    NUMERIC_FIELDS = ["temperatura", "humidade", "radiacao", "intensidadeVento", "intensidadeVentoKM"]
    
    # Fix invalid values
    for field in FIELDS_TO_CLEAN:
        if field in entry and entry[field] in INVALID_VALUES:
            entry[field] = None  # Replace -99 with None
    
    # Ensure numeric fields are correctly formatted
    for field in NUMERIC_FIELDS:
        if field in entry and not isinstance(entry[field], (int, float)):
            try:
                entry[field] = float(entry[field])
            except ValueError:
                entry[field] = None  # Handle conversion errors
    
    return entry

def fetch_and_store_station_data():
    data = fetch_stations_data()
    if data is None:
        logger.error("Failed to fetch data from IPMA API.")
        return

    try:
        station_data = []
        for hour, obs in data.items():
            if IPMA["closest_station"]["idStation"] in obs and obs[IPMA["closest_station"]["idStation"]] is not None:
                entry = {
                    "data_hora": parse_datetime(hour),
                    **obs[IPMA["closest_station"]["idStation"]]
                }
                entry = clean_entry(entry)  # Clean data before storing
                station_data.append(entry)
    except Exception as e:
        logger.error(f"Error processing station data: {e}")
        return

    if not station_data:
        logger.warning("There is no new data available.")
        return

    try:
        for entry in station_data:
            existing_entry = observations_db.find_one({"data_hora": entry["data_hora"]})
            if not existing_entry or existing_entry != entry:
                observations_db.update_one(
                    {"data_hora": entry["data_hora"]}, {"$set": entry}, upsert=True
                )
        logger.info(f"Fetched, processed, and stored {len(station_data)} records successfully")
    except Exception as e:
        logger.error(f"Error storing data to MongoDB: {e}")



#fetch weather warnings for closest regions from IPMA API
# maybe we should store this information in the database (?) not sure yet...
def fetch_warnings():
    id_area_avisos = {region["idAreaAviso"] for region in IPMA["closest_regions"]}
    try:
        res = requests.get(IPMA_API_URIS["warnings"])
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



def warnings_by_region():
    organized_warnings = fetch_warnings()
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

    # Convert to list and sort by startTime
    aggregated_warnings = {
        "warnings": sorted(
            list(summary_dict.values()), 
            key=lambda w: w["startTime"]
        )
    }

    pretty_result = json.dumps(aggregated_warnings, indent=4, ensure_ascii=False)
    #print(pretty_result)

    return aggregated_warnings

# fetch daily forecast for closest region from IPMA API
def fetch_daily_forecast():
    print(IPMA["closest_region"])
    globalIdLocal = IPMA["closest_region"]["globalIdLocal"]
    try:
        res = requests.get(IPMA_API_URIS["daily_forecast"].format(globalIdLocal=globalIdLocal))
        res.raise_for_status()
        pretty_result = json.dumps(res.json()["data"], indent=4, ensure_ascii=False)
        print(pretty_result)
        
        return res.json()
    except requests.RequestException as e:
        logger.error(f"{e} error fetching daily forecast")
        return None

def fetch_daily_precipitation():
    try:
        res = requests.get(IPMA_API_URIS["daily_precipitation"])
        print("Request for " , IPMA_API_URIS["daily_precipitation"])
        res.raise_for_status()
        logger.info(f"✅ Successfully fetched daily precipitation.")
        return res.text  # Return CSV content as string
    except requests.RequestException as e:
        logger.error(f"❌ Error fetching daily precipitation: {e}")
        return None

def fetch_evapotranspiration():
    try:
        res = requests.get(IPMA_API_URIS["evapotranspiration"])
        print("Request for " , IPMA_API_URIS["evapotranspiration"])
        res.raise_for_status()
        logger.info(f"✅ Successfully fetched evapotranspiration.")
        return res.text
    except requests.RequestException as e:
        logger.error(f"❌ Error fetching evapotranspiration: {e}")
        return None

def fetch_pdsi():
    try:
        res = requests.get(IPMA_API_URIS["pdsi"])
        print("Request for " , IPMA_API_URIS["pdsi"])
        res.raise_for_status()
        logger.info(f"✅ Successfully fetched PDSI.")
        return res.text 
    except requests.RequestException as e:
        logger.error(f"❌ Error fetching PDSI: {e}")
        return None

if __name__ == "__main__":
    fetch_and_store_station_data()
    fetch_pdsi()
    fetch_daily_precipitation()
    fetch_evapotranspiration()
    # aggregate_warnings_by_region(fetch_warnings())
    # fetch_daily_forecast()