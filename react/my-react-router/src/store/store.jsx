import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import { myMiddleware, timeoutScheduler } from "./middlewares/myMiddleware";

const myMiddlewares = [
    logger, myMiddleware, timeoutScheduler
];

export const rootReducer = combineReducers({
    todo: todoReducer, // useSelector((state) => state.todo)로 사용
    // counter: counterReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware().concat(myMiddlewares);
        return middlewares;
    },
});

export default store;