import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getWeatherIcon,
  getDateStringFromUnixDt,
  getTempForUnit,
} from "../../utils";
import { useState } from "react";
import "./CurrentWeather.scss";
import { Dropdown } from "../Dropdown/Dropdown";

export const CurrentWeather = ({ data }) => {
  const [unit, setUnit] = useState("celsius");

  const icon = getWeatherIcon(data.weather[0].icon);

  return (
    <div className="current-weather">
      <div className="controls">
        <div>
          <h2>{`${getDateStringFromUnixDt(data.dt)} ${new Date(
            data.dt * 1000
          ).getHours()}h`}</h2>
          <span>{data.weather[0].description}</span>
        </div>
        <Dropdown onChange={(u) => setUnit(u)} unit={unit} />
      </div>
      <div className="temp">
        <strong>
          <FontAwesomeIcon icon={icon?.icon} color={icon?.color} />{" "}
          {getTempForUnit(data.temp, unit)}°
        </strong>
      </div>
      <div className="additionnal-infos">
        <ul>
          <li>Feels like: {getTempForUnit(data.feels_like, unit)}°</li>
          <li>Wind: {Math.round(data.wind_speed * 360) / 100}km/h</li>
          <li>Humidity: {data.humidity}%</li>
        </ul>
      </div>
    </div>
  );
};
