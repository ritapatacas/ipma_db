import pandas as pd
from meteoblue import parse_soup_forecast

df_forecast = pd.DataFrame(parse_soup_forecast())
print(df_forecast)

def format_forecast(df: pd.DataFrame, mobile: bool = False) -> pd.DataFrame:
    df = df.copy()

    for col in ["min", "max", "prec mm"]:
        df[col] = pd.to_numeric(df[col], errors="coerce")

    # Create "day" column
    df["day"] = "(" + df["date"].astype(str) + ") " + df["weekday"].astype(str)

    if mobile:
        df["day"] = df["date"].str.extract(r"-(\d+)$")[0] + " (" + df["weekday"].astype(str) + ")"
        if {"day", "weekday", "min", "max", "prec mm", "prob %", "obs"}.issubset(df.columns):
            return df[["day", "min", "max", "prec mm", "prob %", "obs"]].head(7)

    else:
        for col in ["min", "max", "prec mm"]:
            if col in df.columns:
                df[col] = df[col].apply(lambda x: f"{float(x):.2f}" if pd.notna(x) else "-")

        # Ensure all expected columns exist
        expected_cols = {"icon", "day", "min", "max", "pred", "prec mm", "prob %"}
        existing_cols = expected_cols.intersection(df.columns)

        return df[["day", "icon", "min", "max", "prec mm", "prob %", "pred"]]


    return df


def format_forecast_html_table(df = df_forecast) -> tuple[str, str]:
    df_desktop = format_forecast(df, mobile=False)
    df_mobile = format_forecast(df, mobile=True)


    table_html_forecast = df_desktop.to_html(index=False, border=0, escape=False, classes="custom-table desktop-view").replace("`", "\\`")
    table_html_forecast_mobile = df_mobile.to_html(index=False, border=0, escape=False, classes="custom-table mobile-view").replace("`", "\\`")

    return table_html_forecast, table_html_forecast_mobile
