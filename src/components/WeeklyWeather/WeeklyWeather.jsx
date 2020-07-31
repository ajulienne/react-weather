import React, { useState } from "react";
import "./WeeklyWeather.scss";
import { Dropdown } from "../Dropdown/Dropdown";
import { Tab } from "../Tab/Tab";

export const WeeklyWeather = ({ data }) => {
  const [unit, setUnit] = useState("celsius");

  const [tabOpened, setTabOpened] = useState();

  const toggleOpen = (index) => {
    if (tabOpened === index) {
      setTabOpened(null);
    } else {
      setTabOpened(index);
    }
  };

  return (
    <div className="weekly">
      <div className="controls">
        <h2>Weekly weather</h2>
        <Dropdown onChange={(u) => setUnit(u)} unit={unit} />
      </div>
      <div>
        {data.map((d, i) => (
          <Tab
            dayData={d}
            unit={unit}
            key={d.dt}
            isOpen={tabOpened === i}
            onToggle={() => toggleOpen(i)}
          />
        ))}
      </div>
    </div>
  );
};
