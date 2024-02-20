// 초기값
const initialState = {
    todo: [], // {text, color}
    color: "white", // input box
};

// Action Type 정의
export const CREATE_TODO = "todo/CREATE_TODO";
export const DELETE_TODO = "todo/DELETE_TODO";
export const SET_COLOR = "todo/SET_COLOR";

// Action Creator
export const createTodo = (text, color) => {
    return {
        type: CREATE_TODO,
        payload: { text, color },
    };
};

export const deleteTodo = (idx) => {
    return {
        type: DELETE_TODO,
        payload: { idx },
    };
};

export const setColor = (color) => {
    return {
        type: SET_COLOR,
        payload: { color: color },
    };
};

// Reducer
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_TODO:
            return {
                todo: [...state.todo, { text: action.payload.text, color: action.payload.color }],
                color,
            };
        case DELETE_TODO:
            return {
                todo: [...state.todo.splice(idx, 1)],
                color,
            };
        case SET_COLOR:
            return {
                ...state,
                color: state.color !== action.payload.color
                    ? action.payload.color : "white",
            };
        default:
            return state;
    };
};

export default todoReducer;