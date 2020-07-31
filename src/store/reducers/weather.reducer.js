import {
  getWeatherAction,
  getWeatherSuccessAction,
  getWeatherFailureAction,
} from "../actions/weather.actions";

const initialState = {
  weather: null,
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case getWeatherAction:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case getWeatherSuccessAction:
      return {
        ...state,
        loading: false,
        weather: action.payload,
      };
    case getWeatherFailureAction:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
