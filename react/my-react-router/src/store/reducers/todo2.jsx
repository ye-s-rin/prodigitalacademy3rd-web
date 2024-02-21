import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const todosSlice = createSlice({
    name: "todos",
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            // 내부적으로 immer.js 사용 (immutable 유지시켜줌)
            // return 하지 말자 (화살표함수에서는 return 하면 이상해질 수 있어요.)
            state.todos.push(action.payload);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});
// action creator
export const { addTodo, removeTodo } = todosSlice.actions;
// reducer
export default todosSlice.reducer;