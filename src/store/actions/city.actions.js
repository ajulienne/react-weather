export const setCityAction = "[CITY] Set city";
export const resetCityAction = "[CITY] Reset city";

export const setCity = (city) => ({
  type: setCityAction,
  payload: city,
});

export const resetCity = () => ({
  type: resetCityAction,
});
