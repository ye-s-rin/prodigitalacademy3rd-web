import React, { useContext, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signin } from '~/lib/apis/auth';
import useAuth from '~/lib/hooks/useAuth';

export default function BoardSigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { clientLogin } = useAuth(); // 전역 State

    const handleSignin = () => {
        console.log('Sign in:', { email, password });
        signin(email, password)
            .then((res) => {
                console.log(res);
                const user = res;
                if (user.token) {
                    delete user.token;
                    clientLogin(user); // 로그인 정보 전역 State에 저장
                    navigate('/');
                };
            })
            .catch((err) => console.log(err));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSignin();
    };

    return (
        <Container className="min-vh-100">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    Sign in
                </Button>
            </Form>
        </Container>
    );
}
