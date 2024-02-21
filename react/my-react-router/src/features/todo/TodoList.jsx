import React from 'react'
import { InputGroup, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import TodoUpdate from './TodoUpdate';
import TodoDelete from './TodoDelete';

export default function TodoList() {
    const todoObj = useSelector((state) => state.todo);

    return (
        <>
            <ListGroup>
                {todoObj.todo.map((elem, idx) => (
                    <ListGroup.Item
                        key={elem.id}
                        style={{ display: 'flex', border: 'none' }}>
                        <InputGroup>
                            <TodoUpdate
                                id={elem.id}
                                text={elem.text}
                                color={elem.color} />
                            <TodoDelete id={elem.id} />
                        </InputGroup>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </>
    );
};