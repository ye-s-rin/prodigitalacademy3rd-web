import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/todo";
import logger from "redux-logger";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counter";
const myMiddlewares = [
    logger,
];
const rootReducer = combineReducers({
    todo: todosReducer,
    counter: counterReducer,
});
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware().concat(myMiddlewares);
        console.log("middlewares", middlewares);
        return middlewares;
    }
}
);
export default store;