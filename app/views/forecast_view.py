import pandas as pd
from app.views.meteoblue import parse_soup_forecast, parse_soup_hourly_forecast

DESKTOP_COLUMNS = ["day", "icon", "min", "max", "prec mm", "prob %", "pred"]
MOBILE_COLUMNS = ["day", "min", "max", "prec mm", "prob %", "obs"]


def load_forecast_dataframe() -> pd.DataFrame:
    try:
        forecast = parse_soup_forecast()
        return pd.DataFrame(forecast)
    except Exception as e:
        print(f"⚠️ Forecast unavailable: {e}")
        return pd.DataFrame(
            columns=[
                "date",
                "weekday",
                "min",
                "max",
                "pred",
                "prec mm",
                "prob %",
                "obs",
                "icon",
            ]
        )


def load_hourly_forecast_dataframe(days: int = 7) -> pd.DataFrame:
    try:
        forecast = parse_soup_hourly_forecast(days=days)
        return pd.DataFrame(forecast)
    except Exception as e:
        print(f"⚠️ Hourly forecast unavailable: {e}")
        return pd.DataFrame(
            columns=[
                "day",
                "date",
                "weekday",
                "time",
                "temp",
                "prec mm",
                "prob %",
                "humidity %",
                "wind dir",
                "wind km/h",
                "gust km/h",
                "obs",
                "icon",
            ]
        )


def format_forecast(df: pd.DataFrame, mobile: bool = False) -> pd.DataFrame:
    df = df.copy()
    if df.empty:
        return pd.DataFrame(columns=MOBILE_COLUMNS if mobile else DESKTOP_COLUMNS)

    if "date" not in df.columns:
        df["date"] = "-"
    if "weekday" not in df.columns:
        df["weekday"] = "-"

    for col in ["min", "max", "prec mm"]:
        if col in df.columns:
            df[col] = pd.to_numeric(df[col], errors="coerce")
        else:
            df[col] = pd.NA

    df["day"] = "(" + df["date"].astype(str) + ") " + df["weekday"].astype(str)

    if mobile:
        day_num = df["date"].astype(str).str.extract(r"-(\d+)$", expand=False)
        df["day"] = day_num.fillna(df["date"].astype(str)) + " (" + df["weekday"].astype(str) + ")"
        for col in MOBILE_COLUMNS:
            if col not in df.columns:
                df[col] = "-"
        return df[MOBILE_COLUMNS].head(7)

    for col in ["min", "max", "prec mm"]:
        if col in df.columns:
            df[col] = df[col].apply(lambda x: f"{float(x):.2f}" if pd.notna(x) else "-")

    for col in DESKTOP_COLUMNS:
        if col not in df.columns:
            df[col] = "-"
    return df[DESKTOP_COLUMNS]


def format_forecast_html_table(df: pd.DataFrame | None = None) -> tuple[str, str]:
    if df is None:
        df = load_forecast_dataframe()

    df_desktop = format_forecast(df, mobile=False)
    df_mobile = format_forecast(df, mobile=True)

    table_html_forecast = df_desktop.to_html(
        index=False, border=0, escape=False, classes="custom-table desktop-view"
    ).replace("`", "\\`")
    table_html_forecast_mobile = df_mobile.to_html(
        index=False, border=0, escape=False, classes="custom-table mobile-view"
    ).replace("`", "\\`")

    return table_html_forecast, table_html_forecast_mobile
