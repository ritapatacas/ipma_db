from jinja2 import Environment, FileSystemLoader
import pandas as pd
from meteoblue import parse_soup_forecast
from analyze import analyze_data, show_cold_hours, hours_below_7, summarize_missing_entries

df_forecast = pd.DataFrame(parse_soup_forecast())
df_observations = pd.DataFrame(analyze_data())
df_show_missing_entries = pd.DataFrame(summarize_missing_entries())

#df_cold_hours = pd.DataFrame(show_cold_hours(hours_below_7(), "month"))


table_html_forecast = df_forecast.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_observations = df_observations.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_missing = df_show_missing_entries.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')  # ✅

env = Environment(loader=FileSystemLoader("templates"))
template = env.get_template("index.html")

html = template.render(
    title="The Owls Are Not What They Berrie",
    forecast_table=df_forecast.to_html(index=False, border=0, classes="custom-table"),
    table_html_forecast=table_html_forecast,
    table_html_observations=table_html_observations,
    table_html_missing=table_html_missing  # ✅
)

with open("index.html", "w", encoding="utf-8") as f:
    f.write(html)

print("✅ index.html created successfully!")
