import os
import logging
from dotenv import load_dotenv
from pymongo import MongoClient
import requests
import certifi
from utils import parse_datetime


logging.basicConfig(
    level=logging.INFO, format="\n> %(levelname)s:%(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

# db connection
load_dotenv()
MONGO_DB_NAME = "ipma"
MONGO_COLLECTION_NAME = "ansiao"

# ipma api request (ansião station)
STATION = "1210716"
IPMA_API_URL = (
    "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json"
)


def get_collection():
    """Connects to MongoDB and returns the collection."""
    MONGO_URI = os.getenv("MONGO_URI")

    client = MongoClient(
        MONGO_URI,
        tls=True,
        tlsAllowInvalidCertificates=False,
        tlsCAFile=certifi.where(),
    )
    db = client[MONGO_DB_NAME]
    return db[MONGO_COLLECTION_NAME]


collection = get_collection()


def fetch_station_data():
    try:
        res = requests.get(IPMA_API_URL)
        res.raise_for_status()
        return res.json()
    except requests.RequestException as e:
        logger.error(f"{e} error fetching")
        return None


def fetch_and_store_data():
    data = fetch_station_data()
    if data is None:
        return

    station_data = [
        {
            "data_hora": parse_datetime(hour),
            "data": parse_datetime(hour).strftime("%Y-%m-%d"),
            "hora": parse_datetime(hour).strftime("%H:%M"),
            **obs[STATION],
        }
        for hour, obs in data.items()
        if STATION in obs and obs[STATION] is not None
    ]

    if station_data:
        for entry in station_data:
            existing_entry = collection.find_one({"data_hora": entry["data_hora"]})
            if not existing_entry or existing_entry != entry:
                collection.update_one(
                    {"data_hora": entry["data_hora"]}, {"$set": entry}, upsert=True
                )
        logger.info("Fetched, processed, and stored data successfully")


if __name__ == "__main__":
    fetch_and_store_data()
