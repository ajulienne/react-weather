import axios from "axios";

const weather = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});

const nominatim = axios.create({
  baseURL: "https://nominatim.openstreetmap.org/",
});

export const getGeoloc = (cityName) => {
  return nominatim
    .get("search", {
      params: {
        q: cityName,
        format: "json",
        addressdetails: 1,
      },
    })
    .then(({ data }) =>
      data
        .map(({ display_name, lat, lon, address }) => ({
          display_name,
          lat,
          lon,
          address,
        }))
        .filter(({ address }) => {
          return (
            (address.city !== null && address.city !== undefined) ||
            (address.village !== null && address.vilage !== undefined)
          );
        })
    );
};

export const getCityName = (lat, lon) => {
  return nominatim
    .get("reverse", {
      params: {
        lat,
        lon,
        format: "json",
        addressdetails: 1,
      },
    })
    .then(({ data }) => {
      return {
        display_name: data.display_name,
        lat: data.lat,
        lon: data.lon,
        address: data.address,
      };
    });
};

export const getWeatherForLocation = (lat, lon) => {
  return weather
    .get("onecall", {
      params: {
        appid: process.env.REACT_APP_OPENWEATHERMAP_API_KEY,
        lat,
        lon,
        units: "metric",
      },
    })
    .then(({ data }) => {
      const now = new Date();
      const hoursRemaining = 24 - now.getHours();
      data.hourly = [
        data.hourly.slice(0, hoursRemaining + 1),
        data.hourly.slice(hoursRemaining + 1, 25 + hoursRemaining),
      ];
      return data;
    });
};
