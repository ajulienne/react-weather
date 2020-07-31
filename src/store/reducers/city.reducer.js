import { setCityAction, resetCityAction } from "../actions/city.actions";

const initialState = {
  city: null,
  loading: false,
  error: null,
};

export const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case setCityAction:
      return {
        ...state,
        city: action.payload,
      };
    case resetCityAction:
      return {
        ...state,
        city: null,
      };
    default:
      return state;
  }
};
