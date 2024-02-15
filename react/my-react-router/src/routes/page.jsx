import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function MainPage() {
    const location = useLocation();

    return (
        <Container className="min-vh-100">
            <h1>This is my MainPage</h1>
            <p>MainPage입니다.</p>
        </Container>
    );
}
