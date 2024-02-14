import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { login } from '~/lib/apis/login';

export default function BoardLoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        console.log('Logged in:', { username, password });
        login(username, password)
            .then((res) => { console.log(res); navigate('/'); })
            .catch((err) => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleLogin();
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

                <Button variant="dark" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}
