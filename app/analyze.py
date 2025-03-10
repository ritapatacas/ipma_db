import pandas as pd
from datetime import datetime
from prettytable import PrettyTable
from connections import get_mongo_collection
from fetch import fetch_and_store_station_data
from utils import clean_no_data, export_json, logger, WIND_DIR, DATE_FORMAT
from meteoblue import show_forecast

collection = get_mongo_collection()


def analyze_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    selected_columns = {
        "data": "date",
        "hora": "time",
        "temperatura": "temp",
        "precAcumulada": "prec",
        "radiacao": "rad",
        "idDireccVento": "wind dir",
        "intensidadeVentoKM": "wind km",
        "intensidadeVento": "wind",
    }

    if df.empty:
        logger.error("No data in the collection")
        return

    df = df[selected_columns.keys()].rename(columns=selected_columns)

    df["full_datetime"] = pd.to_datetime(df["date"] + " " + df["time"], errors="coerce")

    df = df.sort_values(by=["full_datetime"], ascending=True)

    df = clean_no_data(df)

    df["wind dir"] = df["wind dir"].map(WIND_DIR).fillna("Unknown")

    last_entries = df.tail(48).copy()

    last_entries["date"] = last_entries["full_datetime"].dt.strftime(DATE_FORMAT["date"])
    last_entries["time"] = last_entries["full_datetime"].dt.strftime("%H:%M")

    last_entries = last_entries.drop(columns=["full_datetime"])

    table = PrettyTable()
    table.field_names = last_entries.columns.tolist()

    previous_date = None

    for _, row in last_entries.iterrows():
        row_list = row.tolist()
        current_date = row_list[0] 

        if current_date == previous_date:
            row_list[0] = ""
        else:
            previous_date = current_date
            
        table.add_row(row_list)

    print(table)
    return table



def hours_below_7():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)
    
    if df.empty:
        logger.error("No data in the collection")
        return None
    
    df["temperatura"] = pd.to_numeric(df["temperatura"], errors="coerce")
    df["data_hora"] = pd.to_datetime(df["data_hora"])
    
    df_cold = df[df["temperatura"] < 7.5]
    
    if df_cold.empty:
        logger.warning("No temperatures below 7.5°C found in the dataset.")
        return None

    return df_cold

def show_cold_hours(df_cold, group_by):
    table = PrettyTable()
    if group_by == "week":
        df_cold["week_start"] = df_cold["data_hora"] - pd.to_timedelta(df_cold["data_hora"].dt.weekday, unit='D')
        df_cold["week_start"] = df_cold["week_start"].dt.normalize()

        summary = df_cold.groupby("week_start").size().reset_index(name="ideal_hours")
        summary = summary.sort_values(by="week_start", ascending=True)

        table.field_names = ["week", "hours < 7.5°C"]

        for _, row in summary.iterrows():
            table.add_row([row["week_start"].strftime(DATE_FORMAT["week"]), row["ideal_hours"]])

        table.add_row(["Total", summary["ideal_hours"].sum()])

    elif group_by == "month":
        df_cold["month"] = df_cold["data_hora"].dt.to_period("M").astype(str)
        summary = df_cold.groupby("month").size().reset_index(name="ideal_hours")

        summary["month"] = pd.to_datetime(summary["month"], format="%Y-%m")
        summary = summary.sort_values(by="month", ascending=True)

        table = PrettyTable()
        table.field_names = ["month", "hours < 7.5°C"]

        for _, row in summary.iterrows():
            table.add_row([row["month"].strftime(DATE_FORMAT["month"]), row["ideal_hours"]])

        table.add_row(["Total", summary["ideal_hours"].sum()])

    else:
        df_cold[group_by] = df_cold["data_hora"].dt.strftime("%Y-%m-%d")
        summary = df_cold.groupby(group_by).size().reset_index(name="ideal_hours")

        summary[group_by] = pd.to_datetime(summary[group_by], format="%Y-%m-%d")
        summary = summary.sort_values(by=group_by, ascending=True)
        table = PrettyTable()
        table.field_names = [group_by, "hours < 7.5°C"]

        for _, row in summary.iterrows():
            formatted_value = row[group_by].strftime(DATE_FORMAT["date"])
            table.add_row([formatted_value, row["ideal_hours"]])

        table.add_row(["Total", summary["ideal_hours"].sum()])
    
    print(table)
    return table


def missing_data():
    all_data = list(collection.find())
    df = pd.DataFrame(all_data)

    if df.empty:
        logger.error("No data in the collection")
        return None

    current_datetime = datetime.now()
    current_day = current_datetime.date()
    current_hour = current_datetime.hour

    df["date"] = pd.to_datetime(df["data_hora"])
    df["day"] = df["date"].dt.date

    day_counts = df.groupby("day").size().reset_index(name="total_entries")
    min_date = df["day"].min()
    max_date = df["day"].max()

    complete_days = pd.date_range(start=min_date, end=max_date, freq="D").date
    complete_df = pd.DataFrame({"day": complete_days})
    complete_df["expected_entries"] = 24
    complete_df.loc[complete_df["day"] == current_day, "expected_entries"] = current_hour

    merged_df = complete_df.merge(day_counts, on="day", how="left").fillna(0)
    merged_df["total_entries"] = merged_df["total_entries"].astype(int)
    merged_df["missing_entries"] = merged_df["expected_entries"] - merged_df["total_entries"]

    return merged_df

def show_missing_entries(df, group_by):
    if group_by == "week":
        df["week_start"] = df["day"] - pd.to_timedelta(
            pd.to_datetime(df["day"]).dt.weekday, unit='D'
        )
        df["week_start"] = pd.to_datetime(df["week_start"])
        summary = df.groupby("week_start")["missing_entries"].sum().reset_index()
        label = "week"

    elif group_by == "month":
        df["month"] = pd.to_datetime(df["day"]).dt.to_period("M").astype(str)
        summary = df.groupby("month")["missing_entries"].sum().reset_index()
        summary["month"] = pd.to_datetime(summary["month"], format="%Y-%m")
        label = "month"

    else:
        summary = df.sort_values(by="day", ascending=True).copy()
        summary = summary[["day", "missing_entries"]].tail(7)
        label = "date"

    table = PrettyTable()
    table.field_names = [label, "missing hours"]
    total_missing = summary["missing_entries"].sum()

    for _, row in summary.iterrows():
        if group_by == "date":
            formatted = row["day"].strftime(DATE_FORMAT["date"])
        elif group_by == "month":
            formatted = row["month"].strftime(DATE_FORMAT["month"])
        else:
            formatted = row["week_start"].strftime(DATE_FORMAT["week"])
        
        table.add_row([formatted, row["missing_entries"]])

    table.add_row(["Total", total_missing])
    print(table)
    return table


if __name__ == "__main__":
    fetch_and_store_station_data()
    analyze_data()
    show_cold_hours(hours_below_7(), "month")
    show_missing_entries(missing_data(), "date")
    show_forecast()
    export_json(collection)
