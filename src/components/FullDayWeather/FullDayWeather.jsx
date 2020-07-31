import React from "react";
import "./FullDayWeather.scss";
import { getTempForUnit } from "../../utils";

export const FullDayWeather = ({ data, unit }) => {
  return (
    <div className="full-day-weather">
      <div className="min">
        <span className="title">Min</span>
        <br />
        <strong>{getTempForUnit(data.temp.min, unit)}°</strong>
      </div>
      <div className="max">
        <span className="title">Max</span>
        <br />
        <strong>{getTempForUnit(data.temp.max, unit)}°</strong>
      </div>
      <div className="morning">
        <span className="title">Morning</span>
        <br />
        <strong>{getTempForUnit(data.temp.morn, unit)}°</strong>
      </div>
      <div className="day">
        <span className="title">Day</span>
        <br />
        <strong>{getTempForUnit(data.temp.day, unit)}°</strong>
      </div>
      <div className="evening">
        <span className="title">Evening</span>
        <br />
        <strong>{getTempForUnit(data.temp.eve, unit)}°</strong>
      </div>
      <div className="night">
        <span className="title">Night</span>
        <br />
        <strong>{getTempForUnit(data.temp.night, unit)}°</strong>
      </div>
    </div>
  );
};
