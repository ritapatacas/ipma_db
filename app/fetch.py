import os
import json
import logging
from datetime import datetime
from dotenv import load_dotenv
from pymongo import MongoClient
import requests
import pandas as pd

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
    client = MongoClient(os.getenv("MONGO_URI"))
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
    """Fetches data from IPMA API, processes, and stores it into MongoDB."""
    data = fetch_station_data()
    if data is None:
        return

    station_data = [
        {
            "data_hora": parse_datetime(hour),  # Original datetime
            "data": parse_datetime(hour).strftime("%Y-%m-%d"),  # Extract date
            "hora": parse_datetime(hour).strftime("%H:%M"),  # Extract time
            **obs[STATION]
        }
        for hour, obs in data.items()
        if STATION in obs and obs[STATION] is not None
    ]

    if station_data:
        for entry in station_data:
            collection.update_one(
                {"data_hora": entry["data_hora"]}, {"$set": entry}, upsert=True
            )
        logger.info("Fetched, processed, and stored data successfully")

def analyze_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    # Add the new columns 'data' and 'hora' to the selected columns
    selected_columns = {
        "data_hora": "datetime",
        "hora": "time",
        "temperatura": "temp",
        "precAcumulada": "prec",
        "radiacao": "rad",
        "idDireccVento": "wind dir",
        "intensidadeVentoKM": "wind km",
        "intensidadeVento": "wind",
    }

    if not df.empty:
        # Select and rename the desired columns
        df = (
            df[selected_columns.keys()]
            .rename(columns=selected_columns)
            .pipe(convert_date_column, "datetime")  # Convert datetime if needed
            .sort_values(by="datetime", ascending=True)  # Sort by the full datetime column
        )

        df = clean_no_data(df)  # Clean the data
        direction_mapping = {
            0: "-",
            1: "N",
            9: "N",
            2: "NE",
            3: "E",
            4: "SE",
            5: "S",
            6: "SW",
            7: "W",
            8: "NW",
        }
        # Map wind direction to readable format
        df["wind dir"] = df["wind dir"].map(direction_mapping).fillna("Unknown")

        # Display DataFrame with all columns
        pd.set_option("display.max_columns", None)
        pd.set_option("display.max_rows", None)
        print(df)
    else:
        logger.error("No data in the collection")

def check_missing_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    if df.empty:
        logger.error("No data in the collection")
        return

    df["date"] = pd.to_datetime(df["data_hora"], format="%Y-%m-%d %HH")
    df["day"] = df["date"].dt.date
    df["hour"] = df["date"].dt.hour

    # Group by day and count the number of entries per day
    day_counts = df.groupby("day").size().reset_index(name="total_entries")

    # Generate a complete range of dates and hours
    min_date = df["day"].min()
    max_date = df["day"].max()
    complete_range = pd.date_range(start=min_date, end=max_date, freq='H')

    # Create a DataFrame with the complete range of dates and hours
    complete_df = pd.DataFrame({"date": complete_range})
    complete_df["day"] = complete_df["date"].dt.date
    complete_df["hour"] = complete_df["date"].dt.hour

    # Merge the complete range with the actual data to find missing entries
    merged_df = complete_df.merge(df, on=["day", "hour"], how="left", indicator=True)
    missing_data = merged_df[merged_df["_merge"] == "left_only"]

    # Group by day and count the number of missing entries per day
    missing_counts = missing_data.groupby("day").size().reset_index(name="missing_entries")

    # Merge the day counts with the missing counts
    result_df = day_counts.merge(missing_counts, on="day", how="left").fillna(0)
    result_df["missing_entries"] = result_df["missing_entries"].astype(int)

    print(result_df)


def export_json(collection):
    try:
        data = list(collection.find())

        for doc in data:
            doc["_id"] = str(doc.get("_id", ""))
            if isinstance(doc.get("data_hora"), datetime):
                doc["data_hora"] = doc["data_hora"].strftime("%Y-%m-%dT%H:%M:%S")

        parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
        exports_dir = os.path.join(parent_dir, "exports")
        os.makedirs(exports_dir, exist_ok=True)
        output_file = os.path.join(
            exports_dir, f"export_{datetime.now().strftime('%Y%m%d-%HH')}.json"
        )

        with open(output_file, "w") as file:
            json.dump(data, file, indent=4)

        logger.info(f"{len(data)} docs exported to {output_file}.")
    except Exception as e:
        logger.error(f"{e} error exporting")


def parse_datetime(date_str, formats=["%Y-%m-%dT%H:%M:%S", "%Y-%m-%dT%H:%M"]):
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    raise ValueError(f"date string '{date_str}' does not match format")


def convert_date_column(df, column_name):
    df[column_name] = pd.to_datetime(df[column_name], format="%Y-%m-%dT%H:%M")
    df[column_name] = df[column_name].dt.strftime("%Y-%m-%d %HH")
    return df


def clean_no_data(df):
    df = df.replace(-99.0, "-")
    df = df.loc[:, (df != "-").any(axis=0)]
    return df

def add_date_hour_fields():
    """Add or update 'data' and 'hora' fields in the MongoDB collection."""
    collection.update_many(
        {},
        [
            {
                "$set": {
                    "data": {"$dateToString": {"format": "%Y-%m-%d", "date": "$data_hora"}},
                    "hora": {"$dateToString": {"format": "%H:%M", "date": "$data_hora"}}
                }
            }
        ]
    )
    logger.info("Fields 'data' and 'hora' updated to include hour and minute successfully.")


if __name__ == "__main__":
    #add_date_hour_fields()
    fetch_and_store_data()
    analyze_data()
    #check_missing_data()
    #export_json(collection)