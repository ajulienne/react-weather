import React, { useState } from "react";
import "./TwoDaysWeather.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { HourlyTab } from "../HourlyTab/HourlyTab";
import { getDateStringFromUnixDt } from "../../utils";

export const TwoDaysWeather = ({ data }) => {
  const [unit, setUnit] = useState("celsius");

  const [openedTab, setOpenedTab] = useState();

  const toggleTab = (index) => {
    if (openedTab === index) {
      setOpenedTab(null);
    } else {
      setOpenedTab(index);
    }
  };

  return (
    <div className="two-days-weather">
      <div className="controls">
        <h2>Hourly weather</h2>
        <Dropdown onChange={(u) => setUnit(u)} unit={unit} />
      </div>
      {data && (
        <>
          <span className="day-separator">Today</span>
          {data[0] &&
            data[0]
              .filter((d, i) => i % 3 === 0)
              .map((d, i) => (
                <HourlyTab
                  key={d.dt}
                  onToggle={() => toggleTab(d.dt)}
                  hourData={d}
                  isOpen={openedTab === d.dt}
                  unit={unit}
                />
              ))}
          <span className="day-separator">
            {getDateStringFromUnixDt(data[1][0].dt)}
          </span>
          {data[1] &&
            data[1]
              .filter((d, i) => i % 3 === 0)
              .map((d, i) => (
                <HourlyTab
                  key={d.dt}
                  onToggle={() => toggleTab(d.dt)}
                  hourData={d}
                  isOpen={openedTab === d.dt}
                  unit={unit}
                />
              ))}
        </>
      )}
    </div>
  );
};
