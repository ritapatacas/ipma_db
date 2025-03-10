
# IPMA Weather Data Fetcher

## 🌤️ Overview

This app automatically retrieves weather data from [IPMA](https://api.ipma.pt/) stations and stores **Ansião** station data in a MongoDB cluster.

The main goal is to **support agricultural decisions** in my red fruit exploration by analyzing key weather parameters like temperature, precipitation, humidity, and more.

By adopting this data-driven approach, I aim to **optimize irrigation systems**, improving resource efficiency and sustainability (hopefully, in the near bright future! 😉).

---

## 🚀 Features

- **Fetches** selected weather data (temperature, precipitation, humidity, wind, radiation) for the last 24 hours from:
  > [https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json](https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json)

- **Stores** data in MongoDB for easy querying and analysis.

- **Automated fetching**:
  - GitHub Actions Workflow: runs several times a day to ensure data continuity.
  - Local batch script: as a backup to fetch data manually when needed.

---

## 🛠️ Scripts

| Script      | Purpose                                                         |
|-------------|-----------------------------------------------------------------|
| `fetch.py`  | Fetches and stores data (used by the automated workflow)        |
| `analyze.py`| Generates tables with summarized data: last 48h weather, cold hours count, missing data control |
| `utils.py`  | Utility functions: data parsing, cleaning, exporting, checking for missing data, etc.             |

---

## ✅ Roadmap & Tasks

### **Main Objectives**

- [x] **Cold hours**: Analyze how many hours were below 7°C.
- [ ] **Forecasts**: Fetch weather forecasts and warnings.
- [ ] **Resources optimization**: Analyze weather data to adjust irrigation schedules.

---

### **Development Tasks**

- [x] Fix invalid values (e.g., negative `precAcumulada`, `pressao`).
- [x] Count hours below 7.2°C per day and per month.
- [ ] **Add columns** for enhanced analysis: date, time, year, month, day.
- [ ] **Calculate** monthly min, avg, and max temperatures.
- [ ] Analyze the **distribution of relative humidity** over the year.
- [ ] Examine **precipitation trends** to guide irrigation.
- [ ] Create **line charts** for temperature and humidity evolution.
- [ ] Plot **histograms** for ideal temperatures (<7.2°C and 16–27°C).
- [ ] Generate **heatmaps** for critical humidity or cold periods.

---

## 💡 Notes

- Data is primarily gathered from **Ansião station** (`1210716`).
- `utils.py` contains handy tools to parse, clean, and check dataset consistency.
- The **GitHub Actions workflow** ensures **daily automation**, crucial for building reliable time series.


---

## ⚙️ How to Use

### 1. Setup

- Edit `connections.py` to set your **MongoDB collection** and **IPMA desired station** ID.
- Create a `.env` file in the project root with your MongoDB URI:
```
MONGO_URI="your-mongodb-cluster-uri"
```

### 2. Running

- Run `fetch.py` to get and store data:
```
python fetch.py
```

- Run `analyze.py` to generate summarized tables:
```
python analyze.py
```

---

