import React from "react";
import "./App.scss";
import { Search } from "./components/Search/Search";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getWeather } from "./store/actions/weather.actions";
import { CurrentWeather } from "./components/CurrentWeather/CurrentWeather";
import { TwoDaysWeather } from "./components/TwoDaysWeather/TwoDaysWeather";
import { WeeklyWeather } from "./components/WeeklyWeather/WeeklyWeather";
import { Block } from "./components/Block/Block";
import { Address } from "./components/Address/Address";
import { Loader } from "./components/Loader/Loader";
import { Toast } from "./components/Toast/Toast";

function App() {
  const selectedCityStore = useSelector((state) => state.cityReducer);
  const weatherStore = useSelector((state) => state.weatherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCityStore.city) {
      dispatch(
        getWeather(selectedCityStore.city.lat, selectedCityStore.city.lon)
      );
    }
  }, [selectedCityStore.city, dispatch]);

  return (
    <div className="App">
      <Toast />
      <Search />
      {selectedCityStore.city && (
        <>
          <Address address={selectedCityStore.city.address} />
          {weatherStore.weather ? (
            <>
              <div className="side-by-side">
                <div>
                  <Block>
                    <CurrentWeather data={weatherStore.weather.current} />
                  </Block>
                  <Block>
                    <WeeklyWeather data={weatherStore.weather.daily} />
                  </Block>
                </div>
                <Block>
                  <TwoDaysWeather data={weatherStore.weather.hourly} />
                </Block>
              </div>
            </>
          ) : (
            <Loader />
          )}
        </>
      )}
    </div>
  );
}

export default App;
