import pandas as pd
from datetime import datetime, timedelta
from evapotranspiration import process_and_store_evapotranspiration, collection
from data_utils import DATE_FORMAT, group_by_period
from utils import logger


def fetch_evapotranspiration_data(days=7):
    """Fetch recent evapotranspiration data from MongoDB as a DataFrame."""
    process_and_store_evapotranspiration()
    df = pd.DataFrame(list(collection.find({}, {"_id": 0})))

    if df.empty:
        logger.warning("⚠️ No evapotranspiration data available in the database.")
        return pd.DataFrame()

    df["date"] = pd.to_datetime(df["date"])
    
    # Filter to the last `days`
    cutoff_date = datetime.now() - timedelta(days=days)
    df = df[df["date"] >= cutoff_date]

    df = df.sort_values(by="date", ascending=False)

    logger.info(f"✅ Evapotranspiration data retrieved for the last {days} days.")

    return df



def fetch_and_group_evapotranspiration_data(group_by: str, days=7):
    df = fetch_evapotranspiration_data(days)
    
    if df.empty:
        return pd.DataFrame()

    df_grouped = group_by_period(df, "date", group_by)

    df_aggregated = df_grouped.groupby("period").agg(
        {
            "minimum": "min",
            "maximum": "max",
            "mean": "mean",
            "range": "mean",
            "std": "mean",
        }
    ).reset_index()

    df_aggregated = df_aggregated.sort_values(by="period", ascending=False)


    # ✅ Apply DATE_FORMAT for periods other than "day"
    if group_by != "day":  
        date_format = DATE_FORMAT.get(group_by, "%Y-%m-%d")
        df_aggregated["period"] = pd.to_datetime(df_aggregated["period"]).dt.strftime(date_format)

    logger.info(f"✅ Evapotranspiration data grouped and formatted by {group_by} for the last {days} days.")

    return df_aggregated


if __name__ == "__main__":
    json_output = fetch_and_group_evapotranspiration_data("day", 7)
    print(json_output)
