import React from 'react';
import { Form, Button } from 'react-bootstrap'


const Login = () => {

    return (
        <div>
            <Form>
                <Form.Group controlID="formLogin">
                    <Form.Label>Login</Form.Label>
                    <Form.Control placeholder="Enter login"></Form.Control>
                </Form.Group>

                <Form.Group controlID="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control placeholder="Enter password"></Form.Control>
                </Form.Group>

                <Button variant="primary">Submit</Button>
            </Form>
        </div>
    )
}

export default Login;