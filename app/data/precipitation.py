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

    if df.empty:
        return pd.DataFrame(columns=["period", "min", "max", "mean", "range", "std", "total"])

    def coalesce_columns(frame: pd.DataFrame, candidates: list[str]) -> pd.Series:
        available = [c for c in candidates if c in frame.columns]
        if not available:
            return pd.Series([pd.NA] * len(frame), index=frame.index)
        series = frame[available[0]]
        for col in available[1:]:
            series = series.where(series.notna(), frame[col])
        return series

    # Normalize source variants into a stable schema used by export/frontend.
    df = df.copy()
    df["max"] = pd.to_numeric(coalesce_columns(df, ["precip_max", "maximum", "max"]), errors="coerce")
    df["min"] = pd.to_numeric(coalesce_columns(df, ["precip_min", "minimum", "min"]), errors="coerce")
    df["mean"] = pd.to_numeric(coalesce_columns(df, ["mean"]), errors="coerce")
    df["range"] = pd.to_numeric(coalesce_columns(df, ["range"]), errors="coerce")
    df["std"] = pd.to_numeric(coalesce_columns(df, ["precip_std", "std"]), errors="coerce")
    df["total"] = pd.to_numeric(coalesce_columns(df, ["precip_total", "total"]), errors="coerce")
    df = df[["date", "min", "max", "mean", "range", "std", "total"]]

    if group_by == "day":
        df_aggregated = df.head(7).copy()
        df_aggregated = df_aggregated.rename(columns={"date": "period"})
    else:
        df_grouped = group_by_period(df, "date", group_by)
        df_aggregated = df_grouped.groupby("period").agg(
            {"total": "sum", "max": "max", "min": "min", "mean": "mean", "range": "mean", "std": "mean"}
        ).reset_index()

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
