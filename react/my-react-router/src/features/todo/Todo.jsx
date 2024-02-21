import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TodoCreate from './TodoCreate';
import TodoColor from './TodoColor';
import TodoList from './TodoList';

export default function Todo() {
    const counterObj = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Todo</h1>
            <TodoCreate />
            <TodoColor />
            <TodoList />
        </>
    );
};