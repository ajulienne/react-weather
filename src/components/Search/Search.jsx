import React, { useState, useRef } from "react";
import "./Search.scss";
import { useEffect } from "react";
import { useDebounce, useAsync, useOnClickOutside } from "../../hooks";
import { getGeoloc, getCityName } from "../../api";
import { Loader } from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setCity, resetCity } from "../../store/actions/city.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearchLocation,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { getAddress } from "../../utils";
import { addToast } from "../../store/actions/toast.actions";

export const Search = () => {
  const [query, setQuery] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useDispatch();
  const selectedCity = useSelector((state) => state.cityReducer.city);
  const [isLoading, setIsLoading] = useState(false);

  const { execute, pending, value, error } = useAsync(getGeoloc, false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(resetCity());
      execute(debouncedQuery);
    }
  }, [debouncedQuery, execute, dispatch]);

  const selectCity = (city) => {
    dispatch(setCity(city));
  };

  const getOwnGeoloc = () => {
    if ("geolocation" in navigator) {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          getCityName(position.coords.latitude, position.coords.longitude).then(
            (data) => {
              dispatch(setCity(data));
              setIsLoading(false);
            }
          );
        },
        (err) => {
          setIsLoading(false);
          dispatch(
            addToast(
              "Unable to locate you.",
              "Please type in your location manually.",
              "error"
            )
          );
        }
      );
    } else {
      setIsLoading(false);
      dispatch(
        addToast(
          "Your browser doesn't support geolocation.",
          "Please type in your location manually.",
          "error"
        )
      );
    }
  };

  const focusSearch = () => {
    setIsEditing(true);
  };

  const ref = useRef();
  useOnClickOutside(ref, () => setIsEditing(false));

  return (
    <>
      <div className="searchbar">
        <button title="Search my location" onClick={getOwnGeoloc}>
          {isLoading || pending ? (
            <FontAwesomeIcon icon={faCircleNotch} spin />
          ) : (
            <FontAwesomeIcon icon={faSearchLocation} />
          )}
        </button>
        {isEditing ? (
          <input
            autoFocus
            ref={ref}
            type="text"
            placeholder="City name"
            onChange={(e) => setQuery(e.target.value)}
          />
        ) : (
          <span
            onClick={focusSearch}
            className={classNames("placeholder", {
              empty: !selectedCity?.address,
            })}
          >
            {(selectedCity && getAddress(selectedCity?.address).cityName) ||
              "City name"}
          </span>
        )}
        {!selectedCity && value?.length > 0 && (
          <div className="query-results">
            {value.map((city, i) => (
              <button key={i} onClick={() => selectCity(city)}>
                {city.address.city}, {city.address.state},{" "}
                {city.address.country}
              </button>
            ))}
            {pending && <Loader />}
            {error && <div className="error">{error}</div>}
          </div>
        )}
      </div>
    </>
  );
};
