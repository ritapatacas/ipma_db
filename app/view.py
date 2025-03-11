import os
import pandas as pd
from meteoblue import parse_soup_forecast
from analyze import analyze_data

df_forecast = pd.DataFrame(parse_soup_forecast())
df_observations = pd.DataFrame(analyze_data())

# Garante que as tabelas não quebram o JavaScript ao usar crase `
table_html_forecast = df_forecast.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')
table_html_observations = df_observations.to_html(index=False, border=0, classes="custom-table").replace('`', '\\`')

# Agora podemos usar direto sem .replace() na f-string!
html_page = f"""
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="color-scheme" content="light dark">
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap" rel="stylesheet">
    <title>14 Days Weather Forecast</title>
    <style>
        html, body {{ height: 100%; margin: 0; padding: 0; }}
        body {{ display: flex; flex-direction: column; align-items: center; text-align: center; }}
        h1 {{
            font-family: "Roboto Slab", serif;
            font-weight: 100;
            font-size: 1.2em;
            text-align: left;
        }}
        nav button {{
            padding: 0.4rem 0.8rem;
            font-size: 0.8rem;
            margin-left: 0.5rem;
            border-radius: 0.2rem;
            border: 0px;
            background-color: #7e7e7e70;
            transition: font-weight 0.1s ease;
        }}
        nav button:hover {{ font-weight: 600; }}
        main.container {{ padding: 2rem; }}
        table.custom-table {{
            font-size: 0.7rem;
            table-layout: auto;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
        }}
        th, td {{ padding: 0.4rem 0.8rem; text-align: left; }}
    </style>
  </head>
  <body>
    <main class="container">
    <nav>
        <ul>
            <li><h1><strong>The Owls Are Not What They Berrie</strong></h1></li>
        </ul>
        <ul>
            <li><button id="btn-forecast" class="secondary">forecast</button></li>
            <li><button id="btn-observations" class="secondary">observations</button></li>
            <li><button class="secondary">dashboard</button></li>
        </ul>
    </nav>
    <button id="theme-toggle" class="contrast">🌗 Theme</button>
    <div id="showcase" class="showcase">
      {df_forecast.to_html(index=False, border=0, classes="custom-table")}
    </div>
    </main>

    <script>
      const toggle = document.getElementById('theme-toggle');
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'dark') {{
        document.documentElement.setAttribute('data-theme', 'dark');
      }} else if (currentTheme === 'light') {{
        document.documentElement.setAttribute('data-theme', 'light');
      }}
      toggle.addEventListener('click', () => {{
        const theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
      }});

      // Content switching logic
      const forecastTable = `{table_html_forecast}`;
      const observationsTable = `{table_html_observations}`;

      const showcaseDiv = document.getElementById('showcase');
      const btnForecast = document.getElementById('btn-forecast');
      const btnObservations = document.getElementById('btn-observations');

      btnForecast.addEventListener('click', () => {{
        showcaseDiv.innerHTML = forecastTable;
      }});

      btnObservations.addEventListener('click', () => {{
        showcaseDiv.innerHTML = observationsTable;
      }});
    </script>
  </body>
</html>
"""

output_path = os.path.abspath("index.html")

with open(output_path, "w", encoding="utf-8") as f:
    f.write(html_page)

print(f"index.html created successfully at: {output_path}")

if os.path.isfile(output_path):
    print("index.html exists")
else:
    print("index.html not found")
