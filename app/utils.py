from datetime import datetime
import pandas as pd
from prettytable import PrettyTable
import os
import json
import logging

logging.basicConfig(
    level=logging.INFO, format="\n> %(levelname)s:%(name)s: %(message)s"
)
logger = logging.getLogger(__name__)

def parse_datetime(date_str, formats=["%Y-%m-%dT%H:%M:%S", "%Y-%m-%dT%H:%M"]):
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            continue
    raise ValueError(f"date string '{date_str}' does not match format")


def convert_date_column(df, column_name):
    df[column_name] = pd.to_datetime(df[column_name], format="%Y-%m-%dT%H:%M")
    df[column_name] = df[column_name].dt.strftime("%Y-%m-%d %H:%M")
    return df


def clean_no_data(df):
    df = df.replace(-99.0, "-")
    df = df.loc[:, (df != "-").any(axis=0)]
    return df

def check_missing_data(collection):
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)
    if df.empty:
        logger.error("No data in the collection")
        return
    
    current_datetime = datetime.now()
    current_day = current_datetime.date()
    current_hour = current_datetime.hour
    
    df["date"] = pd.to_datetime(df["data_hora"])
    df["day"] = df["date"].dt.date
    df["hour"] = df["date"].dt.hour - 1
    
    day_counts = df.groupby("day").size().reset_index(name="total_entries")
    min_date = df["day"].min()
    max_date = df["day"].max()
    
    complete_days = pd.date_range(start=min_date, end=max_date, freq="D").date
    complete_df = pd.DataFrame({"day": complete_days})
    complete_df["expected_entries"] = 24
    complete_df.loc[complete_df["day"] == current_day, "expected_entries"] = current_hour
    
    merged_df = complete_df.merge(day_counts, on="day", how="left").fillna(0)
    merged_df["total_entries"] = merged_df["total_entries"].astype(int)
    merged_df["missing_entries"] = (
        merged_df["expected_entries"] - merged_df["total_entries"]
    )
    
    show_missing_entries(merged_df)
    show_days_with_missing_entries(merged_df)

def show_missing_entries(merged_df):
    days_with_missing_entries = merged_df[merged_df["missing_entries"] > 0]
    table = PrettyTable()
    table.field_names = ["date", "missing"]
    total_missing = days_with_missing_entries["missing_entries"].sum()
    
    for _, row in days_with_missing_entries.iterrows():
        table.add_row([row["day"].strftime("%Y-%m-%d"), row["missing_entries"]])
    table.add_row(["total", total_missing])
    print(table)

def show_days_with_missing_entries(merged_df):
    """Displays a table of aggregated missing entries by month."""
    merged_df["month"] = merged_df["day"].apply(lambda x: x.strftime("%Y-%m"))
    monthly_summary = merged_df.groupby("month").agg(
        days_with_missing=("missing_entries", lambda x: (x > 0).sum()),
        total_missing=("missing_entries", "sum")
    ).reset_index()
    
    table = PrettyTable()
    table.field_names = ["month", "days", "missing"]
    total_days_with_missing = monthly_summary["days_with_missing"].sum()
    total_missing_entries = monthly_summary["total_missing"].sum()
    
    for _, row in monthly_summary.iterrows():
        table.add_row([row["month"], row["days_with_missing"], row["total_missing"]])
    
    table.add_row(["Total", total_days_with_missing, total_missing_entries])
    print(table)

def export_json(collection):
    all_data = list(collection.find())
    for doc in all_data:
        doc["_id"] = str(doc.get("_id", ""))
        if "data_hora" in doc and isinstance(doc["data_hora"], (datetime, pd.Timestamp)):
            doc["data_hora"] = doc["data_hora"].strftime("%Y-%m-%dT%H:%M:%S")
    parent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir))
    exports_dir = os.path.join(parent_dir, "exports")
    os.makedirs(exports_dir, exist_ok=True)
    output_file = os.path.join(
        exports_dir, f"export_{datetime.now().strftime('%Y%m%d-%H%M')}.json"
    )
    with open(output_file, "w") as file:
        json.dump(all_data, file, indent=4)
    logger.info(f"{len(all_data)} docs exported to {output_file}.")

