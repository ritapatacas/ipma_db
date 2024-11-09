import requests
from pymongo import MongoClient
from dotenv import load_dotenv
from pprint import pprint
import pandas as pd
import os
from datetime import datetime

# https://share.bito.ai/static/share?aid=c4463bfe-3372-4d77-aff9-c0143e2c8ccb
load_dotenv()

client = MongoClient(os.getenv("MONGO_URI"))
db = client["ipma"]
collection = db["ansiao"]
station_data = []


def fetch_and_store_data():
    station = "1210716"
    url = "https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json"
    
    try:
        res = requests.get(url)
        res.raise_for_status()
        data = res.json()
        
        station_data = [
            {"data_hora": hour, **obs[station]}
            for hour, obs in data.items()
            if station in obs and obs[station] is not None
        ]
        
        for entry in station_data:
            collection.update_one(
                {"data_hora": entry["data_hora"]},
                {"$set": entry},
                upsert=True
            )
        print("Data fetched and stored successfully.")
        #pprint(station_data)
        
        clean_duplicates(collection)
        reorder_data(collection)
        create_unique_index(collection)
        
    except requests.RequestException as e:
        print(f"Error fetching data: {e}")

def reorder_data(collection):
    """
    Reorders the data in the collection by 'data_hora' in descending order.
    """
    try:
        # Retrieve data, sort by date, and update the collection
        all_data = list(collection.find().sort("data_hora", -1))
        collection.delete_many({})  # Clear the collection
        collection.insert_many(all_data)  # Reinsert sorted data
        print("Data reordered successfully based on 'data_hora' in descending order.")
    except Exception as e:
        print(f"Error reordering data: {e}")

def clean_duplicates(collection):
    duplicates = collection.aggregate([
        {
            "$group": {
                "_id": "$data_hora",
                "count": {"$sum": 1},
                "docs": {"$push": "$_id"}
            }
        },
        {
            "$match": {"count": {"$gt": 1}}
        }
    ])

    for duplicate in duplicates:
        docs_to_remove = duplicate["docs"][1:]
        collection.delete_many({"_id": {"$in": docs_to_remove}})
        print(f"Removed duplicates for data_hora: {duplicate['_id']}")

def clean_no_data(df):
    """
    Cleans the DataFrame by replacing '-99.0' with '-' and dropping columns
    that contain no valid data (all values are '-').
    
    Args:
        df (pd.DataFrame): The DataFrame to clean.
    
    Returns:
        pd.DataFrame: The cleaned DataFrame.
    """
    # Replace '-99.0' with '-'
    df = df.replace(-99.0, '-')
    
    # Drop columns with only '-' values
    df = df.loc[:, (df != '-').any(axis=0)]
    
    return df

def create_unique_index(collection):
    try:
        collection.create_index("data_hora", unique=True)
        print("Unique index on 'data_hora' created successfully.")
    except Exception as e:
        print(f"Error creating unique index: {e}")


def convert_date_column(df, column_name):
    df[column_name] = pd.to_datetime(df[column_name], format='%Y-%m-%dT%H:%M')
    df[column_name] = df[column_name].dt.strftime('%Y-%m-%d %HH')
    return df

def analyze_data():
    all_data = list(collection.find())
    
    df = pd.DataFrame(all_data)
    
    selected_columns = {
        "data_hora": "date",
        "temperatura": "temp",
        "precAcumulada": "prec",
        "radiacao": "rad",
        "idDireccVento": "wind dir",
        "intensidadeVentoKM": "wind km",
        "intensidadeVento": "wind"
    }
    
    if not df.empty:
        df = df[selected_columns.keys()].rename(columns=selected_columns)    
        df = df[list(selected_columns.values())]
        
        df = convert_date_column(df, "date")
        
        df['date_sort'] = pd.to_datetime(df['date'], format='%Y-%m-%d %HH')
        df = df.sort_values(by='date_sort', ascending=False).drop(columns=['date_sort'])
        
        df = clean_no_data(df)
        
        direction_mapping = {
            0: "-",
            1: "N", 9: "N",  # North
            2: "NE",         # Northeast
            3: "E",          # East
            4: "SE",         # Southeast
            5: "S",          # South
            6: "SW",         # Southwest
            7: "W",          # West
            8: "NW"          # Northwest
        }
        df['wind dir'] = df['wind dir'].map(direction_mapping).fillna("Unknown")
        
        pd.set_option('display.max_columns', None)
        pd.set_option('display.max_rows', None)
        print("\nAnalyzed Data Table:")
        print(df)
    else:
        print("No data available in the collection.")



if __name__ == "__main__":
    fetch_and_store_data()
    #analyze_data()

    #clean_duplicates(collection)
    #create_unique_index(collection)

    temperature_data = collection.find({}, {"data_hora": 1, "temperatura": 1, "_id": 0})
    #print("Temperature data retrieved:")
    #pprint(list(temperature_data))
