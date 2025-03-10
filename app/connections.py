import os
from dotenv import load_dotenv
from pymongo import MongoClient
import certifi


# db connection
load_dotenv()
MONGO_DB_NAME = "ipma"
MONGO_COLLECTION_NAME = "ansiao"

# ipma api request (ansião station)
IPMA = {
    "ansiao_station": "1210716",
    "api_url": "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json"
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
