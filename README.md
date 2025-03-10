
# IPMA Weather Data Fetcher

## 🌤️ Overview

This app automatically retrieves weather data from [IPMA](https://api.ipma.pt/) stations and stores **Ansião** station data in a MongoDB cluster.

The main goal is to **support agricultural decisions** in my red fruit exploration by analyzing key weather parameters like temperature, precipitation, humidity, and more.

By adopting this data-driven approach, I aim to **optimize irrigation systems**, improving resource efficiency and sustainability (hopefully, in the near bright future! 😉).


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

