import React from "react";
import "./Tab.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import {
  getHour,
  getDateStringFromUnixDt,
  getTempForUnit,
  capitalize,
  getWeatherIcon,
} from "../../utils";

export const Tab = ({ dayData, unit, isOpen, onToggle }) => {
  const icon = getWeatherIcon(dayData.weather[0].icon);

  return (
    <div
      onClick={onToggle}
      className={classNames("tab", {
        open: isOpen,
      })}
    >
      <div className="heading">
        <div>
          <strong>{getDateStringFromUnixDt(dayData.dt)}</strong>
          <br />
          {capitalize(dayData.weather[0].description)}
        </div>
        <div className="precipitations">
          {dayData.pop > 0.15 ? (
            <span title="Precipitation chances">{dayData.pop * 100}%</span>
          ) : (
            ""
          )}
        </div>
        <div>
          <FontAwesomeIcon
            alt="Weather icon"
            title={dayData.weather[0].description}
            icon={icon.icon}
            color={icon.color}
            style={{ width: "40px", fontSize: "40px" }}
          />
        </div>
        <div className="min-max">
          <span title="Maximum temperature">
            {getTempForUnit(dayData.temp.max, unit)}°
          </span>
          <span title="Minimum temperature">
            {getTempForUnit(dayData.temp.min, unit)}°
          </span>
        </div>
      </div>
      <div className="body">
        <table className="general-infos">
          <tbody>
            <tr>
              <th>Wind</th>
              <td>{Math.round(dayData.wind_speed * 3.6)} km/h</td>
            </tr>
            <tr>
              <th>Humidity</th>
              <td>{dayData.humidity}%</td>
            </tr>
            <tr>
              <th>Sunrise</th>
              <td>{getHour(new Date(dayData.sunrise))}</td>
            </tr>
            <tr>
              <th>Sunset</th>
              <td>{getHour(new Date(dayData.sunset))}</td>
            </tr>
          </tbody>
        </table>
        <div className="day-temps">
          <div className="morning">
            <span>Morning</span>
            <br />
            <strong>{getTempForUnit(dayData.temp.morn, unit)}°</strong>
          </div>
          <div className="day">
            <span>Day</span>
            <br />
            <strong>{getTempForUnit(dayData.temp.day, unit)}°</strong>
          </div>
          <div className="evening">
            <span>Evening</span>
            <br />
            <strong>{getTempForUnit(dayData.temp.eve, unit)}°</strong>
          </div>
          <div className="night">
            <span>Night</span>
            <br />
            <strong>{getTempForUnit(dayData.temp.night, unit)}°</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
