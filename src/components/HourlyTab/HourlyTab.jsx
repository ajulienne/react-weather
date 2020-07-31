import React from "react";
import "./HourlyTab.scss";
import { getTempForUnit, getWeatherIcon, capitalize } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint, faTintSlash } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

export const HourlyTab = ({ hourData, unit, isOpen, onToggle }) => {
  const icon = getWeatherIcon(hourData.weather[0].icon);

  return (
    <div
      className={classNames("hourly-tab", { open: isOpen })}
      onClick={onToggle}
    >
      <div className="heading">
        <div>
          <strong>{`${new Date(hourData.dt * 1000).getHours()}h`}</strong>
        </div>
        <div>{getTempForUnit(hourData.temp, unit)}°</div>
        <div>
          <FontAwesomeIcon
            alt="Precipitation icon"
            title={`${hourData.pop * 100}% chance of precipitations`}
            icon={hourData.pop > 0.15 ? faTint : faTintSlash}
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={icon?.icon}
            color={icon.color}
            alt="Weather icon"
            title={capitalize(hourData.weather[0].description)}
          />
        </div>
      </div>
      <div className="body">
        <table>
          <tbody>
            <tr>
              <th>Feels like</th>
              <td>{getTempForUnit(hourData.feels_like, unit)}°</td>
            </tr>
            <tr>
              <th>Wind</th>
              <td>
                {Math.round(hourData.wind_speed * 3.6)} km/h
                {hourData.wind_gust &&
                  `, with gusts up to ${Math.round(
                    hourData.wind_gust * 3.6
                  )} km/h`}
              </td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{hourData.humidity}%</td>
            </tr>
            <tr>
              <th>Atmospheric pressure</th>
              <td>{hourData.pressure} hPa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
