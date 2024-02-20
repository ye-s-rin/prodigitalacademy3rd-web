import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo } from '~/store/reducers/todo';

export default function TodoDelete(props) {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    return (<>
        <button
            onClick={(e) => {
                const action = deleteTodo(props.id);
                dispatch(action);
            }}
        >
            삭제
        </button></>);
};