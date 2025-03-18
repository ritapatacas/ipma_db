import os
from jinja2 import Environment, FileSystemLoader
import pandas as pd
from collections import defaultdict
from bs4 import BeautifulSoup
from meteoblue import parse_soup_forecast
from analyze import (
    observations,
    summarize_cold_hours,
    summarize_missing_entries,
    warnings_by_region,
)

df_forecast = pd.DataFrame(parse_soup_forecast())
df_observations = pd.DataFrame(observations())
df_show_missing_entries = pd.DataFrame(summarize_missing_entries("month"))
df_cold_hours = pd.DataFrame(summarize_cold_hours("month"))

print("\n == forecast\n", df_forecast.head(10))
print("\n\n == observations\n", df_observations.head(10))
print("\n\n == missing entries\n", df_show_missing_entries.head(10))
print("\n\n == cold hours\n", df_cold_hours.head(10))


def apply_row_span_for_date_column(html_table):
    soup = BeautifulSoup(html_table, "html.parser")
    rows = soup.find_all("tr")

    if not rows or len(rows) < 2:
        return str(soup)

    previous_date = None
    rowspan = 1
    to_remove = []

    for i in range(1, len(rows)):
        cols = rows[i].find_all("td")
        if not cols:
            continue

        current_date = cols[0].text.strip()

        if current_date == previous_date:
            rowspan += 1
            to_remove.append(i)
        else:
            if rowspan > 1:
                rows[i - rowspan].find_all("td")[0]["rowspan"] = str(rowspan)
            rowspan = 1
            previous_date = current_date

    if rowspan > 1:
        rows[len(rows) - rowspan].find_all("td")[0]["rowspan"] = str(rowspan)

    for i in reversed(to_remove):
        rows[i].find_all("td")[0].extract()

    return str(soup)


def format_forecast_df(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    for col in ["min", "max", "prec mm"]:
        if col in df.columns:
            df[col] = df[col].apply(lambda x: f"{float(x):.2f}" if pd.notna(x) else "-")

    return df


def format_forecast_df_mobile(df: pd.DataFrame) -> pd.DataFrame:
    df = df.copy()

    if {"date", "weekday", "min", "max", "prec mm", "prob %"}.issubset(df.columns):
        df["date"] = df["date"].str.extract(r"-(\d+)$")
        df["day"] = df["weekday"].astype(str) + " (" + df["date"].astype(str) + ")"
        df = df[["day", "min", "max", "prec mm", "prob %"]]

    df = df.head(7)

    return df


df_forecast = format_forecast_df(df_forecast)
df_forecast_mobile = format_forecast_df_mobile(df_forecast)

table_html_forecast = df_forecast.to_html(
    index=False, border=0, classes="custom-table desktop-view"
).replace("`", "\\`")
table_html_forecast_mobile = df_forecast_mobile.to_html(
    index=False, border=0, classes="custom-table mobile-view"
).replace("`", "\\`")

table_html_observations_raw = df_observations.to_html(
    index=False, border=0, classes="custom-table"
).replace("`", "\\`")
table_html_observations = apply_row_span_for_date_column(table_html_observations_raw)
table_html_missing = df_show_missing_entries.to_html(
    index=False, border=0, classes="custom-table"
).replace("`", "\\`")
table_html_cold_hours = df_cold_hours.to_html(
    index=False, border=0, classes="custom-table"
).replace("`", "\\`")


ICONS = {
    "Nevoeiro": "fa-smog",
    "Tempo Quente": "fa-temperature-high",
    "Tempo Frio": "fa-temperature-low",
    "Precipitação": "fa-cloud-rain",
    "Neve": "fa-snowflake",
    "Trovoada": "fa-bolt",
    "Vento": "fa-wind",
}


def generate_warning_timeline(warnings: list) -> str:
    timeline_html = ""
    for warning in warnings:
        icon = ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
        color = warning["awarenessLevelID"]
        start = pd.to_datetime(warning["startTime"]).strftime("%d-%m")
        end = pd.to_datetime(warning["endTime"]).strftime("%d-%m")
        areas = ", ".join(warning["idsAreaAviso"])
        timeline_html += f"""
        <div class="event {color}" title="Áreas: {areas}">
          <i class="fa-solid {icon}"></i> {warning['awarenessTypeName']} ({start} → {end})
        </div>
        """
    return timeline_html


def generate_warning_table(warnings: list) -> str:
    table_html = """
    <table class="custom-table">
        <thead>
            <tr>
                <th></th>
                <th>start</th>
                <th>end</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
    """


    for warning in warnings:
        icon = ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
        color = warning["awarenessLevelID"]  # Color class
        start = pd.to_datetime(warning["startTime"]).strftime("%d-%m")
        end = pd.to_datetime(warning["endTime"]).strftime("%d-%m")
        areas = ", ".join(warning["idsAreaAviso"])

        table_html += f"""
        <tr class="{color}">
            <td><i class="fa-solid {icon}"></i></td>
            <td>{start}</td>
            <td>{end}</td>
            <td><span data-tooltip="{warning['awarenessTypeName']}{" [" + warning['text'] + "]" if warning['text'] else ""}">{areas}</span></td>
        </tr>
        """


    table_html += "</tbody></table>"
    return table_html


def generate_warning_timeline_mobile(warnings: list) -> str:
    grouped_warnings = defaultdict(list)

    for warning in warnings:
        key = (warning["startTime"], warning["endTime"], warning["awarenessLevelID"])
        icon = ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
        areas = ", ".join(warning["idsAreaAviso"])
        grouped_warnings[key].append(
            {"icon": icon, "type": warning["awarenessTypeName"], "areas": areas}
        )

    timeline_html = '<div id="warnings">' 
    for (startTime, endTime, color), warnings_list in grouped_warnings.items():
        start = pd.to_datetime(startTime).strftime("%d-%m")
        end = pd.to_datetime(endTime).strftime("%d-%m")
        icons_html = ""
        title_parts = []

        for w in warnings_list:
            icons_html += f'<i class="fa-solid {w["icon"]}"></i> '
            title_parts.append(f'{w["type"]} [{w["areas"]}]')

        title = " | ".join(title_parts)

        timeline_html += f"""
        <div class="event {color}" title="{title}">
            {icons_html} ({start} → {end})
        </div>
        """
    timeline_html += "</div>"
    return timeline_html


warnings_data = warnings_by_region()

warnings_timeline_html = generate_warning_table(warnings_data["warnings"])
warnings_timeline_html_mobile = generate_warning_timeline_mobile(
    warnings_data["warnings"]
)


def generate_warning_timeline_mobile(warnings: list) -> str:
    timeline_html = ""
    for warning in warnings:
        icon = ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
        color = warning["awarenessLevelID"]
        start = pd.to_datetime(warning["startTime"]).strftime("%d-%m")
        end = pd.to_datetime(warning["endTime"]).strftime("%d-%m")
        areas = ", ".join(warning["idsAreaAviso"])
        timeline_html += f"""
        <div class="event {color}" title="Warnign: {warning['awarenessTypeName']}">
            
          <i class="fa-solid {icon}" ></i> (<span data-tooltip="Warnign: {warning['awarenessTypeName']} For: {areas}">{start} → {end}></span>)
        
        </div>
        """
    return timeline_html


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")

env = Environment(loader=FileSystemLoader(TEMPLATES_DIR))
template = env.get_template("index.html")

html = template.render(
    title="The Owls Are Not What They Berrie",
    forecast_table=df_forecast.to_html(index=False, border=0, classes="custom-table"),
    table_html_forecast=table_html_forecast,
    table_html_forecast_mobile=table_html_forecast_mobile,
    table_html_observations=table_html_observations,
    table_html_missing=table_html_missing,
    table_html_cold_hours=table_html_cold_hours,
    warnings_timeline=warnings_timeline_html,
    warnings_timeline_html_mobile=warnings_timeline_html_mobile,
)

# Ensure we are loading from the correct templates directory
template_tables = env.get_template("tables.js.jinja")

# Render the JavaScript file
tables_js = template_tables.render(
    table_html_forecast=table_html_forecast,
    table_html_forecast_mobile=table_html_forecast_mobile,
    table_html_observations=table_html_observations,
    table_html_missing=table_html_missing,
    table_html_cold_hours=table_html_cold_hours,
    warnings_timeline=warnings_timeline_html,
)

def save_files(html, tables_js):
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Inside app/
    PROJECT_ROOT = os.path.abspath(os.path.join(BASE_DIR, ".."))  # Moves up to ipma_db/

    # Save index.html in the correct project directory
    index_html_path = os.path.join(PROJECT_ROOT, "index.html")

    with open(index_html_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"✅ index.html saved at: {index_html_path}")

    # Save tables.js in static/ inside the correct project directory
    tables_js_path = os.path.join(PROJECT_ROOT, "app/static/tables.js")

    os.makedirs(os.path.dirname(tables_js_path), exist_ok=True)

    with open(tables_js_path, "w", encoding="utf-8") as f:
        f.write(tables_js)
    
    print(f"✅ tables.js saved at: {tables_js_path}")


save_files(html, tables_js)