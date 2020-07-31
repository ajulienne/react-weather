import { combineReducers, createStore, applyMiddleware } from "redux";
import { cityReducer, weatherReducer, toastReducer } from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const configureStore = (initialState) => {
  const rootReducers = combineReducers({
    cityReducer,
    weatherReducer,
    toastReducer,
  });

  let reduxMiddlewares = applyMiddleware(thunk);

  if (process.env.NODE_ENV !== "production") {
    reduxMiddlewares = composeWithDevTools(reduxMiddlewares);
  }

  return createStore(rootReducers, initialState, reduxMiddlewares);
};
