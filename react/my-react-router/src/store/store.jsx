import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "react-logger";
import myMid from "./middlewares/myMiddleware";

const myMiddlewares = [
    logger, myMid
];

export const rootReducer = combineReducers({
    todo: todoReducer, // useSelector((state) => state.todo)로 사용
    // counter: counterReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;