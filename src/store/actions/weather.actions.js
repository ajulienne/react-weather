import { getWeatherForLocation } from "../../api";

export const getWeatherAction = "[WEATHER] Get Weather";
export const getWeatherSuccessAction = "[WEATHER] Get Weather - Success";
export const getWeatherFailureAction = "[WEATHER] Get Weather - Failure";

export const getWeather = (lat, lon) => (dispatch, getState) => {
  dispatch({ type: getWeatherAction });
  getWeatherForLocation(lat, lon)
    .then((data) => {
      dispatch(getWeatherSuccess(data));
    })
    .catch((err) => {
      dispatch(getWeatherFailure(err));
    });
};

export const getWeatherSuccess = (data) => ({
  type: getWeatherSuccessAction,
  payload: data,
});

export const getWeatherFailure = (err) => ({
  type: getWeatherFailureAction,
  payload: err,
});
