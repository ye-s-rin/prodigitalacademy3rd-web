import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchBoardList } from "~/store/reducers/board";

export default function MainPage() {
    const todoObj = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const action = fetchBoardList();
        dispatch(action);
    }, [dispatch]);

    return (
        <Container className="min-vh-100">
            <h1>This is my MainPage</h1>
            <p>MainPage입니다.</p>
        </Container>
    );
}
