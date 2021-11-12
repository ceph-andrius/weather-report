First Project

The goal of this project is to familiraize with how to communicate with API's and to practice
simple javascript. I'm using https://www.weatherapi.com/ as my weather api. An API key is needed for authentication
register and sign-up to get an API-key.

The results of weather api can be seen as .json or .xml files. This project explores more on the .json files.
An example of a result from /current.json:

```
{
    "location": {
        "name": "London",
        "region": "City of London, Greater London",
        "country": "United Kingdom",
        "lat": 51.52,
        "lon": -0.11,
        "tz_id": "Europe/London",
        "localtime_epoch": 1636227582,
        "localtime": "2021-11-06 19:39"
    },
    "current": {
        "last_updated_epoch": 1636227000,
        "last_updated": "2021-11-06 19:30",
        "temp_c": 12.0,
        "temp_f": 53.6,
        "is_day": 0,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
            "code": 1003
        },
        "wind_mph": 12.5,
        "wind_kph": 20.2,
        "wind_degree": 250,
        "wind_dir": "WSW",
        "pressure_mb": 1020.0,
        "pressure_in": 30.12,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 77,
        "cloud": 75,
        "feelslike_c": 9.6,
        "feelslike_f": 49.2,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 1.0,
        "gust_mph": 20.1,
        "gust_kph": 32.4
    }
}
```

In the above .json file we are able to see the "location" and "current". Location is **when** and **where**
we searched while current is **what** the temperature is currently.

List of Features I'd like to do:

1. Change Tempeartures °C or °F ✓
2. Searching a city ✓
    2.1 If a City already exists don't search
    2.2 Searching via "Region" with the comma specifier. I.e, "City of London,  Greater London" ✓
3. List of Cities
4. Better UI with css