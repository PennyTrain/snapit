import React from 'react'
import { Form, Button } from "react-bootstrap"

const LogInForm = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" />
                </Form.Group>
                <Form.Group controlId="password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        </div>
    )
}

export default LogInForm
