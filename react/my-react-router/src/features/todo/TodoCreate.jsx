import React, { useRef, useState, useCallback } from "react";
import { InputGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from "../../store/reducers/todo";

export default function TodoCreate() {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const inputRef = useRef();
    const [text, setText] = useState("");

    const [cancel, setCancel] = useState(null);

    const handleAdd = useCallback(() => {
        const action = addTodo({
            text: text,
        });
        action.meta = {
            delay: 5000,
        };
    });

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
                                const action = createTodo(text);
                                dispatch(action);
                                inputRef.current.value = "";
                            }
                        }
                    }}
                />
                <Button
                    variant="dark"
                    onClick={(e) => {
                        if (inputRef.current?.value) {
                            const action = createTodo(text);
                            console.log(action);
                            dispatch(action);
                            inputRef.current.value = "";
                        }
                    }}
                >
                    입력
                </Button>
            </InputGroup >
            <div></div>
        </>
    );
};