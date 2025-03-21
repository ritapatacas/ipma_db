import os
from collections import defaultdict

import pandas as pd
from jinja2 import Environment, FileSystemLoader
from bs4 import BeautifulSoup
from percipitation import fetch_and_group_precipitation_data
from evapotranspiration import fetch_and_group_evapotranspiration_data
from percipitation import fetch_and_group_precipitation_data
from analyze import (
    observations,
    summarize_cold_hours,
    summarize_missing_entries,
    warnings_by_region,
) 
from forecast_view import format_forecast_html_table
from utils import get_closest_regions, WARNING_ICONS, get_warning_level_icon

df_observations = pd.DataFrame(observations())
df_show_missing_entries = pd.DataFrame(summarize_missing_entries("month"))
df_cold_hours = pd.DataFrame(summarize_cold_hours("month"))

df_precipitation = fetch_and_group_precipitation_data("day")
df_evapotranspiration = fetch_and_group_evapotranspiration_data("day")


def debug_print_data():
    print("\n == Forecast Data ==\n", df_forecast.head(10))
    print("\n == Observations Data ==\n", df_observations.head(10))
    print("\n == Missing Entries Data ==\n", df_show_missing_entries.head(10))
    print("\n == Cold Hours Data ==\n", df_cold_hours.head(10))
    print("\n == Evapotranspiration Data ==\n", df_evapotranspiration.head(10))

#debug_print_data()


table_html_forecast, table_html_forecast_mobile = format_forecast_html_table()



def format_table_html(df: pd.DataFrame, title: str) -> str:
    if df.empty:
        return ""

    table_html = df.to_html(index=False, border=0, classes="custom-table")
    table_html = table_html.replace(
        "<thead>",
        f"<thead>\n    <tr><th colspan='{len(df.columns)}'><h3 class='table-title'>{title}</h3></th></tr>\n"
    )
    return table_html


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


table_html_observations_raw = df_observations.to_html(index=False, border=0, classes="custom-table").replace("`", "\\`")
table_html_observations = apply_row_span_for_date_column(table_html_observations_raw)

table_html_missing = format_table_html(df_show_missing_entries, "Missing Entries")
table_html_cold_hours = format_table_html(df_cold_hours, "Cold Hours")

table_html_evapotranspiration = format_table_html(df_evapotranspiration, "Evaporatranspiration")

table_perceptation = format_table_html(df_precipitation, "Precipitation")

table_html_percipitation = format_table_html(df_precipitation, "Precipitation")


def prepare_evapo_json(df: pd.DataFrame) -> list[dict]:
    df = df.copy()
    if "period" not in df.columns and "date" in df.columns:
        df = df.rename(columns={"date": "period"})
    df["period"] = df["period"].astype(str)
    return df.to_dict(orient="records")

evapotranspiration_data = prepare_evapo_json(df_evapotranspiration)

def generate_warning_timeline(warnings: list) -> str:
    timeline_html = ""
    for warning in warnings:
        icon = WARNING_ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
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

def generate_warning_timeline_mobile(warnings: list) -> str:
    grouped_warnings = defaultdict(list)

    for warning in warnings:
        key = (warning["startTime"], warning["endTime"], warning["awarenessLevelID"])
        icon = WARNING_ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
        areas = ", ".join(warning["idsAreaAviso"])
        grouped_warnings[key].append(
            {"icon": icon, "type": warning["awarenessTypeName"], "areas": areas}
        )

    timeline_html = '<div id="warnings">' 
    for (startTime, endTime, color), warnings_list in grouped_warnings.items():
        start = pd.to_datetime(startTime).strftime("%d-%m")
        end = pd.to_datetime(endTime).strftime("%d-%m")
        icons_html = "".join(f'<i class="fa-solid {w["icon"]}"></i> ' for w in warnings_list)
        title = " | ".join(f'{w["type"]} [{w["areas"]}]' for w in warnings_list)

        timeline_html += f"""
        <div class="event {color}" title="{title}">
            {icons_html} ({start} → {end})
        </div>
        """
    timeline_html += "</div>"
    return timeline_html

def organize_warnings(warnings: list) -> dict:
    closest_regions = get_closest_regions()
    area_map = {region["idAreaAviso"]: region["acronym"] for region in closest_regions}
    area_info_map = {region["acronym"]: f"{region['local']} ({region['distance']})" for region in closest_regions}
    area_order = {region["acronym"]: index + 1 for index, region in enumerate(sorted(closest_regions, key=lambda r: r["acronym"]))}

    grouped_warnings = defaultdict(lambda: {
        "areas": defaultdict(set),
        "color": None,
        "icon": None,
        "details": defaultdict(list),
        "level": None,
        "start_time": None,
        "end_time": None
    })

    for warning in warnings:
        icon = WARNING_ICONS.get(warning["awarenessTypeName"], "fa-triangle-exclamation")
        color = warning["awarenessLevelID"]
        start_time = pd.to_datetime(warning["startTime"]).strftime("%d/%m %H:%M")
        end_time = pd.to_datetime(warning["endTime"]).strftime("%d/%m %H:%M")
        start_day = pd.to_datetime(warning["startTime"]).strftime("%d")
        end_day = pd.to_datetime(warning["endTime"]).strftime("%d/%m")
        date_range = f"{start_day}-{end_day}"
        warning_type = warning["awarenessTypeName"]
        warning_level = warning["awarenessLevelID"]

        key = (warning_type, date_range)

        if key not in grouped_warnings:
            grouped_warnings[key].update({
                "color": color,
                "icon": icon,
                "level": warning_level,
                "start_time": start_time,
                "end_time": end_time
            })

        for area in warning["idsAreaAviso"]:
            area_acronym = area_map.get(area, area)
            area_full_name = area_info_map.get(area_acronym, area_acronym)
            warning_text = warning["text"].strip() if warning["text"] else None

            grouped_warnings[key]["areas"][area_acronym].add(area_full_name)
            grouped_warnings[key]["details"][area_full_name].append(warning_text or "")

    return grouped_warnings, area_order


def generate_warning_modal(warning_type: str, date_range: str, data: dict) -> str:
    safe_warning_type = warning_type.replace(" ", "-").replace("/", "-")
    safe_date_range = date_range.replace("/", "-")
    modal_id = f"modal-{safe_warning_type}-{safe_date_range}"

    modal_details = f"""
        <strong>alert level:</strong> {data["level"]}
        <br><strong>start:</strong> {data["start_time"]}
        <br><strong>end:</strong> {data["end_time"]}
        <hr>
    """

    area_texts = [
        f"<p><strong>{area_full_name}</strong><br>{'<br>'.join(texts) if any(texts) else ''}</p>"
        for area_full_name, texts in data["details"].items()
    ]

    modal_details += "".join(area_texts)

    return f"""
    <dialog id="{modal_id}" class="modal">
        <article>
            <header>
                <a href="#" class="close" aria-label="Close" onclick="closeModal('{modal_id}', event)"></a>
                <h3>{warning_type}</h3>
            </header>
            {modal_details}
            <footer>
                <button onclick="closeModal('{modal_id}', event)">Close</button>
            </footer>
        </article>
    </dialog>
    """


def generate_warning_table_html(grouped_warnings: dict, area_order: dict) -> str:
    table_html = """
    <table class="custom-table">
        <thead>
            <tr class="{data['color']} hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <th colspan='4'><h3 class="table-title">Warnings</h3></th>
            </tr>
        </thead>
        <tbody>
    """

    modal_html = ""

    for (warning_type, date_range), data in grouped_warnings.items():
        sorted_areas = sorted(data["areas"].keys(), key=lambda x: area_order.get(x, 99))

        areas_with_tooltip = [
            f'<span data-tooltip="{", ".join(data["areas"][area])}">{area}</span>'
            for area in sorted_areas
        ]
        areas_display = ", ".join(areas_with_tooltip)

        modal_html += generate_warning_modal(warning_type, date_range, data)

        safe_warning_type = warning_type.replace(" ", "-").replace("/", "-")
        safe_date_range = date_range.replace("/", "-")
        modal_id = f"modal-{safe_warning_type}-{safe_date_range}"

        warning_icon = get_warning_level_icon(data["level"])  # 🔥 New: Use the icon instead of text

        table_html += f"""
        <tr class="{data['color']} hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            <td><i class="fa-solid {data["icon"]}"></i></td>
            <td class="level">{warning_icon}</td>  <!-- 🔥 New: Replaces text with icon -->
            <td><a href="#" onclick="openModal('{modal_id}', event)">{date_range}</a></td>
            <td>{areas_display}</td>
        </tr>
        """

    table_html += "</tbody></table>" + modal_html

    return table_html

def generate_warning_table(warnings: list) -> str:
    grouped_warnings, area_order = organize_warnings(warnings)
    return generate_warning_table_html(grouped_warnings, area_order)



warnings_data = warnings_by_region()

warnings_timeline_html = generate_warning_table(warnings_data["warnings"])
warnings_timeline_html_mobile = generate_warning_timeline_mobile(
    warnings_data["warnings"]
)



# TEMPLATE RENDERING & FILE HANDLING

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEMPLATES_DIR = os.path.join(BASE_DIR, "templates")
env = Environment(loader=FileSystemLoader(TEMPLATES_DIR))



def render_template() -> str:
    template = env.get_template("index.html")
    return template.render(
        title="The Owls Are Not What They Berrie",
        table_html_forecast=table_html_forecast,
        table_html_forecast_mobile=table_html_forecast_mobile,
        table_html_observations=table_html_observations,
        table_html_missing=table_html_missing,
        table_html_cold_hours=table_html_cold_hours,
        warnings_timeline=warnings_timeline_html,
        table_html_evapotranspiration=table_html_evapotranspiration,
        evapotranspiration_data=evapotranspiration_data,
        table_html_percipitation=table_html_percipitation,
    )

def render_tables_js() -> str:
    template_tables = env.get_template("tables.js.jinja")
    return template_tables.render(
        table_html_forecast=table_html_forecast,
        table_html_forecast_mobile=table_html_forecast_mobile,
        table_html_observations=table_html_observations,
        table_html_missing=table_html_missing,
        table_html_cold_hours=table_html_cold_hours,
        warnings_timeline=warnings_timeline_html,
        table_html_evapotranspiration=table_html_evapotranspiration,
        evapotranspiration_data=evapotranspiration_data,
        table_html_percipitation=table_html_percipitation,
    )

def save_files(html: str, tables_js: str):
    PROJECT_ROOT = os.path.abspath(os.path.join(BASE_DIR, ".."))

    index_html_path = os.path.join(PROJECT_ROOT, "index.html")
    with open(index_html_path, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"index.html saved at: {index_html_path}")

    tables_js_path = os.path.join(PROJECT_ROOT, "app/static/tables.js")
    os.makedirs(os.path.dirname(tables_js_path), exist_ok=True)
    with open(tables_js_path, "w", encoding="utf-8") as f:
        f.write(tables_js)
    print(f"tables.js saved at: {tables_js_path}")

html_output = render_template()
tables_js_output = render_tables_js()
save_files(html_output, tables_js_output)