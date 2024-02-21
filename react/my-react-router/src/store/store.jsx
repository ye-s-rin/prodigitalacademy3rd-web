import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { myMiddleware, timeoutScheduler } from "./middlewares/myMiddleware";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";

const rootPersistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["todo"],
};

const myMiddlewares = [logger, myMiddleware, timeoutScheduler];

const rootReducer = persistReducer(
    rootPersistConfig,
    combineReducers({
        todo: todoReducer,
    })
);

// export default createStore(rootReducer);
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        const middlewares = getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(myMiddlewares);
        return middlewares;
    },
});

const persistor = persistStore(store);
export { store, persistor };
export default store;