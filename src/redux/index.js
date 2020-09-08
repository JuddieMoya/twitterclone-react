import { createBrowserHistory } from "history";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { authReducer } from "./auth";
import { userReducer } from "./users"
import { msgReducer } from "./messages"

export * from "./messages"
export * from "./auth";
export * from "./users";

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    auth: combineReducers(authReducer),
    users: combineReducers(userReducer),
    messages: combineReducers(msgReducer)
  },
  preloadedState: {},
  devTools: process.env.NODE_ENV !== "production",
});

store.subscribe(() => {
  localStorage.setItem("login", JSON.stringify(store.getState().auth.login));
});
