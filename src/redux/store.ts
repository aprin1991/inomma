import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
const middlewares = [];
middlewares.push(logger);
// const store = configureStore({ reducer: rootReducer });
const store = createStore(rootReducer, applyMiddleware(...middlewares));
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
