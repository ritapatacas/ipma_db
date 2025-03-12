import os
from dotenv import load_dotenv
from pymongo import MongoClient
import certifi
import yaml

def load_config(path="config.yml"):
    with open(path, "r", encoding="utf-8") as file:
        return yaml.safe_load(file)

config = load_config()


# db connection
load_dotenv()
MONGO_DB_NAME = config["mongo"]["db_name"]
MONGO_COLLECTION_NAME = config["mongo"]["collection_name"]

# ipma requests data
IPMA = config["ipma"]
IPMA_API_URIS = {
    "station_observations": "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json",
    "warnings": "https://api.ipma.pt/open-data/forecast/warnings/warnings_www.json",
    "daily_forecast": "https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/{globalIdLocal}.json",
    "daily_precipitation": "https://api.ipma.pt/open-data/observation/climate/precipitation-total/{DISTRICT}/mrrto-{DICO}-{MUNICIPALITY}.csv",
    "evapotranspiration": "https://api.ipma.pt/open-data/observation/climate/evapotranspiration/{DISTRICT}/etp-{DICO}-{MUNICIPALITY}.csv",
    "pdsi": "https://api.ipma.pt/open-data/observation/climate/mpdsi/{DISTRICT}/mpdsi-{DICO}-{MUNICIPALITY}.csv"
}


def get_mongo_collection():
    MONGO_URI = os.getenv("MONGO_URI")

    client = MongoClient(
        MONGO_URI,
        tls=True,
        tlsAllowInvalidCertificates=False,
        tlsCAFile=certifi.where(),
    )
    db = client[MONGO_DB_NAME]
    return db[MONGO_COLLECTION_NAME]
