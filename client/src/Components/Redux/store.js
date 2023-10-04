import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducer.js";
import thunkMiddleware from "redux-thunk"

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);