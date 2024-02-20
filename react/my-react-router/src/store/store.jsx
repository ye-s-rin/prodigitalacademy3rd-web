import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo";

export const rootReducer = combineReducers({
    todo: todoReducer, // useSelector((state) => state.todo)로 사용
});

const store = createStore(rootReducer);

// console.log(store.getState());
// console.log(store.dispatch());

export default store;