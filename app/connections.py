import os
from dotenv import load_dotenv
from pymongo import MongoClient
import certifi


# db connection
load_dotenv()
MONGO_DB_NAME = "ipma"
MONGO_COLLECTION_NAME = "ansiao"

# ipma api request (ansião station)
IPMA_STATION_OBSERVATIONS = {
    "ansiao_station": "1210716",
    "api_url": "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json"
}

IPMA_WARNINGS = {
    "api_url": "https://api.ipma.pt/open-data/forecast/warnings/warnings_www.json"
}

IPMA_CLOSEST_REGIONS = [
        {
            "idRegiao": 1,
            "idAreaAviso": "CBR",
            "idConcelho": 3,
            "globalIdLocal": 1060300,
            "latitude": "40.2081",
            "idDistrito": 6,
            "local": "Coimbra",
            "longitude": "-8.4194"
        },
        {
            "idRegiao": 1,
            "idAreaAviso": "LRA",
            "idConcelho": 9,
            "globalIdLocal": 1100900,
            "latitude": "39.7473",
            "idDistrito": 10,
            "local": "Leiria",
            "longitude": "-8.8069"
        },
        {
            "idRegiao": 1,
            "idAreaAviso": "CBO",
            "idConcelho": 2,
            "globalIdLocal": 1050200,
            "latitude": "39.8217",
            "idDistrito": 5,
            "local": "Castelo Branco",
            "longitude": "-7.4957"
        }
    ]

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
