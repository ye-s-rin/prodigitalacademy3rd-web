import React, { useRef, useState } from "react";
import { InputGroup } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from "../../store/reducers/todo";

export default function TodoCreate() {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const inputRef = useRef();
    const [text, setText] = useState("");

    return (
        <>
            <InputGroup>
                <input
                    style={{ backgroundColor: todoObj.color }}
                    ref={inputRef}
                    type="text"
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            if (inputRef.current?.value) {
                                const action = createTodo(text, todoObj.color);
                                dispatch(action);
                                inputRef.current.value = "";
                            }
                        }
                    }}
                />
                <button
                    onClick={(e) => {
                        if (inputRef.current?.value) {
                            const action = createTodo(text, todoObj.color);
                            dispatch(action);
                            inputRef.current.value = "";
                        }
                    }}
                >
                    입력
                </button>
            </InputGroup >
        </>
    );
};