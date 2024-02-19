import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter, setColor } from '~/store/reducers/counter';

export default function Counter() {
    const counterObj = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Counter</h1>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <button
                    onClick={() => {
                        const action = increaseCounter();
                        console.log(action);
                        dispatch(action);
                    }}>증가</button>
                <button
                    onClick={() => {
                        const action = decreaseCounter();
                        console.log(action);
                        dispatch(action);
                    }}>감소</button>
            </div>
            <div style={{ color: counterObj.color }}>
                {counterObj.counter}
            </div>
            <input
                type="text"
                onChange={(e) => {
                    dispatch(setColor(e.target.value))
                }}></input>
            <h1 style={{ color: counterObj.color }}>{counterObj.counter}</h1>
        </>
    );
};