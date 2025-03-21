import pandas as pd

DATE_FORMAT = {
    "date_time": "%Y-%m-%d %H:%M",
    "date": "%d %b",   # Used when grouping by "day"
    "week": "%d %b",
    "month": "%b %y",
}


def group_by_period(df: pd.DataFrame, date_column: str, period: str) -> pd.DataFrame:
    """
    Groups a DataFrame by the specified time period and applies formatting.

    Args:
        df (pd.DataFrame): Input DataFrame with a datetime column.
        date_column (str): The column name containing datetime values.
        period (str): One of "year", "biennial", "month", "biweek", "week", "day", "hour".

    Returns:
        pd.DataFrame: DataFrame with a formatted 'period' column.
    """

    df = df.copy()
    df[date_column] = pd.to_datetime(df[date_column], errors="coerce")

    if period == "year":
        df["period"] = df[date_column].dt.to_period("Y").dt.start_time

    elif period == "biennial":
        df["period"] = (df[date_column].dt.year // 2 * 2).astype(str) + "-01-01"
        df["period"] = pd.to_datetime(df["period"])

    elif period == "month":
        df["period"] = df[date_column].dt.to_period("M").dt.start_time

    elif period == "biweek":
        df["period"] = df[date_column] - pd.to_timedelta(df[date_column].dt.weekday, unit="D")
        df["period"] = df["period"] - pd.to_timedelta(df["period"].dt.day % 14, unit="D")

    elif period == "week":
        df["period"] = df[date_column] - pd.to_timedelta(df[date_column].dt.weekday, unit="D")

    elif period == "day":
        df["period"] = df[date_column].dt.normalize()
        # ✅ Apply DATE_FORMAT["date"] when grouping by day
        df["period"] = df["period"].dt.strftime(DATE_FORMAT["date"])

    elif period == "hour":
        df["period"] = df[date_column].dt.floor("H")

    else:
        raise ValueError(f"Invalid period: {period}. Choose from: year, biennial, month, biweek, week, day, hour.")

    return df


if __name__ == "__main__":
    data = {
        "date": pd.date_range(start="2023-01-01", periods=10, freq="D"),
        "value": range(10),
    }
    df_sample = pd.DataFrame(data)
    df_grouped = group_by_period(df_sample, "date", "week")
    print(df_grouped)
