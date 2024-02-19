// 초기값
const initialState = {
    counter: 0,
    color: "black",
};

// Action Type 정의
export const INCREASE_COUNTER = "counter/INCREASE_COUNTER";
export const DECREASE_COUNTER = "counter/DECREASE_COUNTER";
export const SET_COLOR = "counter/SET_COLOR";

// Action Creator
export const increaseCounter = () => {
    return {
        type: INCREASE_COUNTER,
        payload: {},
    };
};

export const decreaseCounter = () => {
    return {
        type: DECREASE_COUNTER,
        payload: {},
    };
};

export const setColor = (color) => {
    return {
        type: SET_COLOR,
        payload: { color: color },
    };
};

// Reducer
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case SET_COLOR:
            return {
                ...state,
                color: action.payload.color,
            };
        default:
            return state;
    };
};

export default counterReducer;