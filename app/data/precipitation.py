import pandas as pd
from io import StringIO
from datetime import datetime, timedelta
import matplotlib.pyplot as plt

from app.utils import logger
from app.data.connections import get_mongo_collection
from app.data.fetch import fetch_daily_precipitation
from app.data.data_utils import DATE_FORMAT, group_by_period

collection = get_mongo_collection("precipitation")


def process_and_store_precipitation():
    data = fetch_daily_precipitation()
    df = pd.read_csv(StringIO(data))

    # 🔹 Debugging: Print available columns
    print("🔹 Available Columns in Fetched Data:", df.columns.tolist())

    expected_columns = ["date", "minimum", "maximum", "range", "mean", "std"]
    df = df[expected_columns]


    df = df[expected_columns]
    records = df.to_dict(orient="records")

    for record in records:
        collection.update_one({"date": record["date"]}, {"$set": record}, upsert=True)

    logger.info(f"✅ {len(records)} precipitation records processed and stored in MongoDB.")


def fetch_precipitation_data():
    process_and_store_precipitation()
    
    df = pd.DataFrame(list(collection.find({}, {"_id": 0})))

    if df.empty:
        logger.warning("⚠️ No precipitation data available in the database.")
        return pd.DataFrame()

    df["date"] = pd.to_datetime(df["date"])
    df = df.sort_values(by="date", ascending=False)

    logger.info(f"✅ Precipitation data retrieved ({len(df)} records).")
    return df


def fetch_and_group_precipitation_data(group_by: str) -> pd.DataFrame:
    """Fetch precipitation data and group it based on the provided period."""
    df = fetch_precipitation_data()
    print(df)

    if df.empty:
        return pd.DataFrame(columns=["period", "precip_total", "precip_max", "precip_min", "precip_std"])

    print("🔹 Original Columns:", df.columns.tolist())  # Debugging before any processing

    # Renaming to ensure consistent column names
    rename_mapping = {
        "precip_total": "total",
        "precip_max": "max",
        "precip_min": "min",
        "precip_std": "std"
    }
    
    df = df.rename(columns=rename_mapping)
    print("🔹 After Renaming:", df.columns.tolist())  # Debugging

    if group_by == "day":
        df_aggregated = df.head(7).copy()
        df_aggregated = df_aggregated.rename(columns={"date": "period"})
        print("🔹 Final Columns (Day Grouping):", df_aggregated.columns.tolist())
    else:
        df_grouped = group_by_period(df, "date", group_by)
        df_aggregated = df_grouped.groupby("period").agg(
            {"total": "sum", "max": "max", "min": "min", "std": "mean"}
        ).reset_index()
        print("🔹 Final Columns (Aggregated):", df_aggregated.columns.tolist())

    df_aggregated["period"] = pd.to_datetime(df_aggregated["period"]).dt.strftime(DATE_FORMAT[group_by])

    logger.info(f"✅ Precipitation data grouped by {group_by} ({len(df_aggregated)} records).")

    return df_aggregated


if __name__ == "__main__":
    json_output = fetch_and_group_precipitation_data("day")
    print(json_output)

    # Debug: Fetch available dates from MongoDB
    result = list(collection.find({}, {"date": 1, "_id": 0}))
    available_dates = [r["date"] for r in result]

    print("Available Dates in MongoDB:", available_dates)
