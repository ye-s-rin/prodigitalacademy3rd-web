import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counter";

export const rootReducer = combineReducers({
    counter: counterReducer,
});

const store = createStore(rootReducer);

// console.log(store.getState());
// console.log(store.dispatch());

export default store;