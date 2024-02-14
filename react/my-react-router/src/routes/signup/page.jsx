import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function BoardSignupPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted:', { username, password, nickname });
    };

    return (
        <Container className="min-vh-100">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicNickname">
                    <Form.Label>Nickname</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </Form.Group>

                <Button variant="dark" type="submit">
                    Sign up
                </Button>
            </Form>
        </Container>
    );
}
