import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from "../../store/reducers/todo";

export default function TodoUpdate(props) {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(true);
    const [text, setText] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        setText(props.text);
    }, [props.text]);

    useEffect(() => {
        setColor(props.color);
    }, [props.color]);

    useEffect(() => {
        if (!disabled) {
            setColor(todoObj.color);
        }
    }, [todoObj.color]);

    return (
        <>
            <input
                style={{ backgroundColor: color }}
                type="text"
                placeholder={props.text}
                disabled={disabled}
                onChange={(e) => {
                    setText(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        if (text.length > 0) {
                            const action = updateTodo(props.id, text)
                            dispatch(action);
                        }
                        setDisabled(!disabled);
                    }
                }}
            />
            <Button
                variant="dark"
                onClick={(e) => {
                    if (!disabled) {
                        if (text.length > 0) {
                            const action = updateTodo(props.id, text)
                            dispatch(action);
                        }
                    }
                    setDisabled(!disabled);
                }}
            >
                수정
            </Button>
        </>
    );
};