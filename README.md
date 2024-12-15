# IPMA Weather Data Fetcher

! WIP !


## Overview

This app is designed to automatically retrieve meteorological data from [IPMA](https://api.ipma.pt/) stations and store it in MongoDB.

The primary goal is to support agricultural decisions by analyzing key weather parameters like temperature, precipitation, and humidity.

This data-driven approach aims to optimize (in the hopefully near bright future) the irrigation systems for red fruit cultivation, enhancing resource efficiency and sustainability :)

## Features

- Fetches weather selected data from the desired weather station - includes temperature, precipitation, humidity, wind and radiation - from the last 24h hours by api request to:
https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json 

- Seamlessly stores the fetched data in MongoDB for persistence and easy retrieval.


## Todos
Objectives:
- [ ] Cold hours: we need to analyze how many hours there were bellow 7 degrees.
- [ ] Forecasts: fetch weather forecasts and warnings
- [ ] Resources optimization: analyze the weather data to adjust irrigation schedules.

Tasks:
- [ ] Fix invalid values (e.g., negative precAcumulada and pressao).
- [ ] Create additional columns: date, time, year, month, and day for detailed analysis.
- [ ] Calculate minimum, average, and maximum temperature per month.
- [ ] Count hours below 7.2°C per day and per month.
- [ ] Analyze the distribution of relative humidity over the year.
- [ ] Examine precipitation trends to adjust irrigation needs.
- [ ] Create line charts for temperature and humidity over time.
- [ ] Plot histograms to check the frequency of ideal temperatures (<7.2°C and 16–27°C).
- [ ] Generate heatmaps to identify critical periods of humidity or cold.
