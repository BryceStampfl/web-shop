import React, { useState } from 'react';

import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router';
import { loginUser } from '../../_reducers/usersSlice'

import { Container } from 'react-bootstrap'

const Login = () => {

    const [loginData, setLoginData] = useState({ login: '', password: '' });
    const dispatch = useDispatch();
    const history = useHistory();
    const userLoggedIn = useSelector(state => state.reducer.users.validToken)


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({
            username: loginData.login,
            password: loginData.password
        }, history))
    }

    const handleLoginInputChange = (event) => {
        event.persist();
        setLoginData((data) => ({
            ...data,
            login: event.target.value
        }));
    };

    const handlePasswordInputChange = (event) => {
        event.persist();
        setLoginData((data) => ({
            ...data,
            password: event.target.value
        }));
    };




    if (userLoggedIn) {
        return (
            <Redirect to="/app" />
        )
    }

    return (
        <div>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Login</Form.Label>
                        <Form.Control onChange={handleLoginInputChange} placeholder="Enter login"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordInputChange} placeholder="Enter password"></Form.Control>
                    </Form.Group>

                    <Button onClick={handleSubmit} variant="primary">Submit</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Login;