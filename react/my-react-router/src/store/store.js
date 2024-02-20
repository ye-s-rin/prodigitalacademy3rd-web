import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";

export const rootReducer = combineReducers({
    todo: todoReducer,
});

const store = createStore(rootReducer);

// console.log(store.getState());
// console.log(store.dispatch());

export default store;