import os
from dotenv import load_dotenv
from pymongo import MongoClient
import certifi
import yaml

def load_config():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    config_path = os.path.abspath(os.path.join(base_dir, "../config.yml"))

    print(f"✅ Loading config from: {config_path}")

    with open(config_path, "r", encoding="utf-8") as file:
        return yaml.safe_load(file)


config = load_config()


# db connection
load_dotenv()
MONGO_DB = config["mongo"]["db_name"]
MONGO_OBSERVATIONS = config["mongo"]["collections"]["observations"]
MONGO_PRECIPITATION = "precipitation"
MONGO_EVAPOTRANSPIRATION = "evapotranspiration"
MONGO_PDSI = "pdsi"


# ipma requests data
IPMA = config["ipma"]
IPMA_API_URIS = {
    "station_observations": "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json",
    "warnings": "https://api.ipma.pt/open-data/forecast/warnings/warnings_www.json",
    "daily_forecast": f"https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/{IPMA['closest_region']['globalIdLocal']}.json",
    "daily_precipitation": f"https://api.ipma.pt/open-data/observation/climate/precipitation-total/{IPMA['district']}/mrrto-{IPMA['dico']}-{IPMA['municipality']}.csv",
    "evapotranspiration": f"https://api.ipma.pt/open-data/observation/climate/evapotranspiration/{IPMA['district']}/et0-{IPMA['dico']}-{IPMA['municipality']}.csv",
    "pdsi": f"https://api.ipma.pt/open-data/observation/climate/mpdsi/{IPMA['district']}/mpdsi-{IPMA['dico']}-{IPMA['municipality']}.csv",
}


def get_mongo_db():
    MONGO_URI = os.getenv("MONGO_URI")

    client = MongoClient(
        MONGO_URI,
        tls=True,
        tlsAllowInvalidCertificates=False,
        tlsCAFile=certifi.where(),
    )
    return client[MONGO_DB]


def get_mongo_collection(collection):
    db = get_mongo_db()
    return db[collection]


observations_db = get_mongo_collection(MONGO_OBSERVATIONS)
precipitation_db = get_mongo_collection(MONGO_PRECIPITATION)
pdsi_db = get_mongo_collection(MONGO_PDSI)
