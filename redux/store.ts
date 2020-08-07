import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./combineReducers";

const composeEnhancers =
  typeof window === "undefined"
    ? compose
    : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

export const initStore = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);
