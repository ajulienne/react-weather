import React from "react";
import "./Dropdown.scss";
import { capitalize } from "../../utils";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useRef } from "react";
import { useOnClickOutside } from "../../hooks";

export const Dropdown = ({ onChange, unit }) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, () => setIsOpen(false));

  const selectUnit = (unit) => {
    setIsOpen(false);
    onChange(unit);
  };

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const celsiusButton = (
    <button
      onClick={() => selectUnit("celsius")}
      className={classNames({
        current: unit === "celsius",
      })}
    >
      Celsius
    </button>
  );

  const farenheitButton = (
    <button
      onClick={() => selectUnit("farenheit")}
      className={classNames({
        current: unit === "farenheit",
      })}
    >
      Farenheit
    </button>
  );

  return (
    <div className="dropdown">
      <button onClick={toggleOpen}>
        {capitalize(unit)}{" "}
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </button>
      {isOpen && (
        <div className="options" ref={ref}>
          {unit === "celsius" ? (
            <>
              {celsiusButton}
              {farenheitButton}
            </>
          ) : (
            <>
              {farenheitButton}
              {celsiusButton}
            </>
          )}
        </div>
      )}
    </div>
  );
};
