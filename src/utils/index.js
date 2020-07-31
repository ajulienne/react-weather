import {
  faSun,
  faCloudSun,
  faCloud,
  faCloudShowersHeavy,
  faBolt,
  faSnowflake,
  faSmog,
  faMoon,
  faCloudMoon,
  faCloudMoonRain,
  faCloudSunRain,
} from "@fortawesome/free-solid-svg-icons";

export const getWeatherIcon = (id) => {
  const icons = [
    {
      id: "01d",
      icon: faSun,
      color: "#ffc845",
    },
    {
      id: "02d",
      icon: faCloudSun,
      color: "#ffc845",
    },
    {
      id: "03d",
      icon: faCloud,
      color: "#7C7E8D",
    },
    {
      id: "04d",
      icon: faCloudSun,
      color: "#ffc845",
    },
    {
      id: "09d",
      icon: faCloudShowersHeavy,
      color: "#16132f",
    },
    {
      id: "10d",
      icon: faCloudSunRain,
      color: "#16132f",
    },
    {
      id: "11d",
      icon: faBolt,
      color: "#ffc845",
    },
    {
      id: "13d",
      icon: faSnowflake,
      color: "#25A2D8",
    },
    {
      id: "50d",
      icon: faSmog,
      color: "#cccccc",
    },
    {
      id: "01n",
      icon: faMoon,
      color: "#4e4cac",
    },
    {
      id: "02n",
      icon: faCloudMoon,
      color: "#4e4cac",
    },
    {
      id: "03n",
      icon: faCloud,
      color: "#7C7E8D",
    },
    {
      id: "04n",
      icon: faCloudMoon,
      color: "#4e4cac",
    },
    {
      id: "09n",
      icon: faCloudShowersHeavy,
      color: "#16132f",
    },
    {
      id: "10n",
      icon: faCloudMoonRain,
      color: "#4e4cac",
    },
    {
      id: "11n",
      icon: faBolt,
      color: "#ffc845",
    },
    {
      id: "13n",
      icon: faSnowflake,
      color: "#25A2D8",
    },
    {
      id: "50n",
      icon: faSmog,
      color: "#cccccc",
    },
  ];

  return icons.find((i) => i.id === id);
};

export const getDateStringFromUnixDt = (dt) => {
  const dayIndex = new Date(dt * 1000).getDay();
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekdays[dayIndex];
};

export const getHour = (dt, minutes = true) => {
  const date = new Date(dt * 1000);
  let ret = `${String(date.getHours()).padStart(2, "0")}h`;
  if (minutes) ret += String(date.getMinutes()).padStart(2, "0");
  return ret;
};

export const getTempForUnit = (temp, unit) => {
  if (unit === "celsius") {
    return Math.round(temp);
  } else {
    return Math.round((temp * 9) / 5 + 32);
  }
};

export const capitalize = (str) => {
  return str.substr(0, 1).toUpperCase() + str.slice(1);
};

export const getAddress = (addr) => {
  if (!addr) return null;
  const cityName = addr.city || addr.municipality || addr.town || addr.village;
  const countyName =
    addr.region || addr.state || addr.state_district || addr.county;
  const countryName = addr.country || addr.country_code || addr.continent;
  return { cityName, countyName, countryName };
};
