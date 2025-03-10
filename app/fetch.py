import requests
from connections import get_mongo_collection, IPMA
from utils import parse_datetime, logger

collection = get_mongo_collection()


def fetch_stations_data():
    try:
        res = requests.get(IPMA["api_url"])
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
                **obs.get(IPMA["ansiao_station"], {})
            }
            for hour, obs in data.items()
            if IPMA["ansiao_station"] in obs and obs[IPMA["ansiao_station"]] is not None
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



if __name__ == "__main__":
    fetch_and_store_ansiao_station()
