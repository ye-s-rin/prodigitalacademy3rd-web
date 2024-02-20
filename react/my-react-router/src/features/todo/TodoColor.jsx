import React, { useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../../store/reducers/todo';

export default function TodoColor() {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [colors, setColors] = useState(["pink", "lightblue", "yellow", "lightgray", "white"]);

    return (
        <>
            <ListGroup horizontal>
                {colors.map((color, idx) => (
                    <ListGroup.Item key={idx} style={{ outline: 'none', border: 'none' }}>
                        <button
                            style={{
                                width: "25px",
                                height: "25px",
                                backgroundColor: color,
                                borderRadius: "50%",
                                display: "inline-block",
                                marginRight: "2.8%",
                                border: "none",
                            }}
                            onClick={(e) => {
                                const action = setColor(color);
                                dispatch(action);
                            }}
                        ></button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};