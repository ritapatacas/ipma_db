import pandas as pd
from datetime import datetime
from prettytable import PrettyTable
from connections import get_mongo_collection, observations_db
from fetch import (
    fetch_and_store_station_data,
    warnings_by_region,
    fetch_daily_precipitation,
    fetch_evapotranspiration,
)
from utils import (
    clean_no_data,
    export_json,
    logger,
    WIND_DIR,
    OBSERVATIONS_COLUMN_MAPPING,
)
from meteoblue import show_forecast
from data_utils import DATE_FORMAT, group_by_period

collection = observations_db


def _load_weather_data() -> pd.DataFrame:
    """Central function to load and preprocess raw data"""
    try:
        raw_data = list(collection.find({}))
        if not raw_data:
            logger.error("No data in collection")
            return pd.DataFrame()

        df = pd.DataFrame(raw_data)
        df = df.rename(columns=OBSERVATIONS_COLUMN_MAPPING)

        if "datetime" not in df.columns:
            if "date" in df.columns and "time" in df.columns:
                df["datetime"] = pd.to_datetime(
                    df["date"] + " " + df["time"], errors="coerce"
                )
            elif "data_hora" in df.columns:
                df["datetime"] = pd.to_datetime(df["data_hora"], errors="coerce")

        keep_columns = ["datetime"] + list(OBSERVATIONS_COLUMN_MAPPING.values())
        return (
            df[keep_columns]
            .dropna(subset=["datetime"])
            .sort_values("datetime", ascending=True)
        )  # Sort descending

    except Exception as e:
        logger.error(f"Data loading failed: {str(e)}")
        return pd.DataFrame()


def _create_time_periods(df: pd.DataFrame, group_by: str) -> pd.DataFrame:
    return group_by_period(df, "datetime", group_by)


def print_data_table(
    df: pd.DataFrame, title: str, date_col: str = "date", time_col: str = "time"
) -> None:
    """Unified table printing function for time series data"""
    if df.empty:
        print(f"No {title.lower()} to display")
        return

    table = PrettyTable()
    table.field_names = df.columns.tolist()
    table.align = "r"
    table.align[date_col] = "l"

    prev_date = None
    for _, row in df.iterrows():
        row_data = row.copy()
        current_date = row_data[date_col]

        if current_date == prev_date:
            row_data[date_col] = ""
        else:
            prev_date = current_date

        table.add_row(row_data.tolist())

    print(table)


def observations(last_n: int = 48) -> pd.DataFrame:
    """Display recent observations with formatted table"""
    df = _load_weather_data()
    if df.empty:
        return pd.DataFrame()

    df = clean_no_data(df)
    df["wind dir"] = df["wind dir"].map(WIND_DIR).fillna("Unknown")

    latest = df.tail(last_n).sort_values("datetime", ascending=False)
    display_df = latest.assign(
        date=latest["datetime"].dt.strftime(DATE_FORMAT["date"]),
        time=latest["datetime"].dt.strftime("%Hh"),
    ).drop(columns=["datetime"])[
        ["date", "time", "temp", "wind dir", "wind km", "prec", "rad"]
    ]

    return display_df


def summarize_cold_hours(group_by: str = "date") -> pd.DataFrame:
    """Summarize cold hours with time period grouping"""
    df = _load_weather_data()
    if df.empty:
        return pd.DataFrame()

    cold_hours = df[pd.to_numeric(df["temp"], errors="coerce") < 7.5]
    if cold_hours.empty:
        logger.info("No temperatures below 7.5°C found")
        return pd.DataFrame()

    cold_hours = _create_time_periods(cold_hours, group_by)
    summary = (
        cold_hours.groupby("period", as_index=False)
        .size()
        .rename(columns={"size": "cold"})
    )
    summary = _add_total_row(summary, "cold")
    return _format_summary_periods(summary, group_by)


def summarize_missing_entries(group_by: str = "date") -> pd.DataFrame:
    """Identify missing hourly entries by period"""
    df = _load_weather_data()
    if df.empty:
        return pd.DataFrame()

    now = datetime.now()
    min_date = df["datetime"].min().normalize()
    all_dates = pd.date_range(start=min_date, end=now, freq="D")

    expected = pd.DataFrame({"date": all_dates})
    expected["expected"] = 24
    expected.loc[expected["date"].dt.date == now.date(), "expected"] = now.hour + 1

    actual = df["datetime"].dt.normalize().value_counts().reset_index()
    actual.columns = ["date", "actual"]

    missing = expected.merge(actual, on="date", how="left").fillna(0)
    missing["missing"] = (missing["expected"] - missing["actual"]).astype(
        int
    )  # Force integer type

    missing = _create_time_periods(
        missing.rename(columns={"date": "datetime"}), group_by
    )

    summary = missing.groupby("period", as_index=False)["missing"].sum()
    summary = _add_total_row(summary, "missing")
    return _format_summary_periods(summary, group_by)


def _add_total_row(df: pd.DataFrame, value_col: str) -> pd.DataFrame:
    """Add total row to summary dataframe with integer formatting"""
    total = pd.DataFrame(
        {
            "period": ["Total"],
            value_col: [int(df[value_col].sum())],  # Ensure integer type
        }
    )
    return pd.concat([df, total], ignore_index=True)


def _format_summary_periods(df: pd.DataFrame, group_by: str) -> pd.DataFrame:
    """Format period column with appropriate date formatting"""
    date_format = DATE_FORMAT.get(group_by, DATE_FORMAT["date"])
    df["period"] = df["period"].apply(
        lambda x: x.strftime(date_format) if not isinstance(x, str) else x
    )
    return df


def print_summary_table(
    summary_df: pd.DataFrame, title: str, value_col: str, group_by: str = "date"
) -> None:
    """Print formatted summary table"""
    if summary_df.empty:
        print(f"No {title.lower()} to display")
        return

    table = PrettyTable()
    table.field_names = [group_by.capitalize(), title]
    table.align = "r"
    table.align[group_by.capitalize()] = "l"

    total = 0
    for _, row in summary_df.iterrows():
        if row["period"] == "Total":
            continue
        table.add_row([row["period"], row[value_col]])
        total += row[value_col]

    table.add_row(["total", total], divider=True)
    print(table)


if __name__ == "__main__":
    fetch_and_store_station_data()
    warnings_by_region()

    precipitation_csv = fetch_daily_precipitation()
    evapotranspiration_csv = fetch_evapotranspiration()

    if precipitation_csv:
        print("\n== Daily Precipitation ==\n", precipitation_csv[:5000])
    if evapotranspiration_csv:
        print("\n== Evapotranspiration ==\n", evapotranspiration_csv[:500])

    print_data_table(observations(), "observations")
    cold_summary = summarize_cold_hours("month")
    print_summary_table(cold_summary, "cold hours", "cold", "month")
    missing_summary = summarize_missing_entries("week")
    print_summary_table(missing_summary, "missing", "missing", "week")
    show_forecast()
    export_json(collection)
