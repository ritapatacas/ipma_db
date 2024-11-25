# IPMA Weather Data Fetcher

! WIP !


## Overview

This app is designed to automatically retrieve meteorological data from [IPMA](https://api.ipma.pt/) stations and store it in MongoDB.

The primary goal is to support agricultural decisions by analyzing key weather parameters like temperature, precipitation, and humidity.

This data-driven approach aims to optimize (in the hopefully near bright future) the irrigation systems for red fruit cultivation, enhancing resource efficiency and sustainability :)

## Features

- Fetches weather data from last 24h hours by api request to:
https://api.ipma.pt/open-data/observation/meteorology/stations/observations.json
Select only the data from the desired weather station - includes temperature, precipitation, humidity, wind and radiation

- Seamlessly stores the fetched data in MongoDB for persistence and easy retrieval.


## Todos
- [ ] Cold hours: we need to analyze how many hours there were bellow 7 degrees.
- [ ] Forecasts: fetch weather forecasts and warnings
- [ ] Resources optimization: analyze the weather data to adjust irrigation schedules.
