import pandas as pd
from datetime import datetime, timedelta
from evapotranspiration import process_and_store_evapotranspiration
from connections import get_mongo_collection

from data_utils import DATE_FORMAT, group_by_period
from utils import logger

collection = get_mongo_collection("evapotranspiration")

def fetch_evapotranspiration_data():
    """Fetch all evapotranspiration data from MongoDB as a DataFrame, sorted by most recent first."""
    process_and_store_evapotranspiration()
    
    df = pd.DataFrame(list(collection.find({}, {"_id": 0})))

    if df.empty:
        logger.warning("⚠️ No evapotranspiration data available in the database.")
        return pd.DataFrame()

    df["date"] = pd.to_datetime(df["date"])
    df = df.sort_values(by="date", ascending=False)

    logger.info(f"✅ Evapotranspiration data retrieved ({len(df)} records).")
    return df

def fetch_and_group_evapotranspiration_data(group_by: str) -> pd.DataFrame:
    """Fetch evapotranspiration data and group it based on the provided period."""
    df = fetch_evapotranspiration_data()

    if df.empty:
        return pd.DataFrame(columns=["period", "max", "mean", "min", "range", "std"])

    print("🔹 Original Columns:", df.columns.tolist())  # Before any processing

 
    rename_mapping = {}
    if "minimum" in df.columns and "min" not in df.columns:
        rename_mapping["minimum"] = "min"
    if "maximum" in df.columns and "max" not in df.columns:
        rename_mapping["maximum"] = "max"

    df = df.rename(columns=rename_mapping)
    print("🔹 After Removing Duplicates & Renaming:", df.columns.tolist())  # Debug

    if group_by == "day":
        df_aggregated = df.head(7).copy()
        df_aggregated = df_aggregated.rename(columns={"date": "period"})
        print("🔹 Final Columns (Day Grouping):", df_aggregated.columns.tolist())
    else:
        df_grouped = group_by_period(df, "date", group_by)
        df_aggregated = df_grouped.groupby("period").agg(
            {"max": "max", "mean": "mean", "min": "min", "range": "mean", "std": "mean"}
        ).reset_index()
        print("🔹 Final Columns (Aggregated):", df_aggregated.columns.tolist())

    df_aggregated["period"] = pd.to_datetime(df_aggregated["period"]).dt.strftime(DATE_FORMAT[group_by])

    logger.info(f"✅ Evapotranspiration data grouped by {group_by} ({len(df_aggregated)} records).")

    return df_aggregated



if __name__ == "__main__":
    json_output = fetch_and_group_evapotranspiration_data("day")
    print(json_output)

    # Debug: Fetch available dates from MongoDB
    result = list(collection.find({}, {"date": 1, "_id": 0}))
    available_dates = [r["date"] for r in result]

    print("Available Dates in MongoDB:", available_dates)
