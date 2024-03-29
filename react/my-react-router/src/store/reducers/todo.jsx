// 초기값
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    todo: [], // {id, text, color}
    color: "white", // input box
    counter: 0,
};

// Action Type 정의
export const CREATE_TODO = "todo/CREATE_TODO";
export const DELETE_TODO = "todo/DELETE_TODO";
export const UPDATE_TODO = "todo/UPDATE_TODO";
export const SET_COLOR = "todo/SET_COLOR";

// Action Creator
export const createTodo = (text) => {
    return {
        type: CREATE_TODO,
        payload: { text },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: { id },
    };
};

export const updateTodo = (id, text) => {
    return {
        type: UPDATE_TODO,
        payload: { id, text },
    };
};

export const setColor = (color) => { // input box
    return {
        type: SET_COLOR,
        payload: { color: color },
    };
};

// Reducer
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            const newTodo = {
                id: uuidv4(),
                text: action.payload.text,
                color: state.color,
            };
            return {
                ...state,
                todo: [...state.todo, newTodo],
                color: "white",
                counter: state.counter + 1,
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter((item) => item.id !== action.payload.id),
                counter: state.counter - 1,
            };
        case UPDATE_TODO:
            return {
                ...state,
                todo: state.todo.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, text: action.payload.text, color: state.color };
                    }
                    return item;
                }),
            };
        case SET_COLOR:
            return {
                ...state,
                color: state.color !== action.payload.color
                    ? action.payload.color
                    : "white",
            };
        default:
            return state;
    };
};

export default todoReducer;
