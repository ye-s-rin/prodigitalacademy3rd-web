import React, { useRef, useState, useCallback, useEffect } from "react";
import { InputGroup, Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from "../../store/reducers/todo";

export default function TodoCreate() {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const inputRef = useRef();
    const [text, setText] = useState("");

    const [cancel, setCancel] = useState(() => { });

    const handleAdd = useCallback(() => {
        const action = createTodo(text);
        action.meta = {
            delay: 3000,
        };
        const cancelFn = dispatch(action);
        setCancel(() => cancelFn);
    }, [dispatch, text]);

    const handleCancel = useCallback(() => {
        if (cancel) {
            cancel();
        }
        setCancel(null);
    }, [cancel]);

    useEffect(() => {
        setCancel(null)
        inputRef.current.value = "";
    }, [todoObj.todo])

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
                                handleAdd();
                            }
                        }
                    }}
                />
                <Button
                    variant="dark"
                    onClick={(e) => {
                        if (inputRef.current?.value) {
                            handleAdd();
                        }
                    }}
                >
                    입력
                </Button>
                {cancel ? (
                    <Button variant="danger" onClick={() => handleCancel()}>
                        실행취소
                    </Button>
                ) : null}
            </InputGroup >
            <div></div>
        </>
    );
};