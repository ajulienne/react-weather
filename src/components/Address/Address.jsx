import React from "react";
import "./Address.scss";
import { getAddress } from "../../utils";

export const Address = ({ address }) => {
  const { cityName, countyName, countryName } = getAddress(address);

  return (
    <div className="address">
      <h1>{cityName}</h1>
      <h2>{countyName}</h2>
      <h2>{countryName}</h2>
    </div>
  );
};
