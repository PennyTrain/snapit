import React, { useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";

const LogInForm = () => {
    const [logInData, setLogInData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogInData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/login/", logInData);
            history.push('/');
        } catch(err) {
            // Handle errors
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleChange} name="username" value={logInData.username} type="text" placeholder="username" />
                </Form.Group>
                {errors.username && (
                    <Alert variant="warning">
                        {errors.username}
                    </Alert>
                )}
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} value={logInData.password} name="password" type="password" placeholder="Password" />
                </Form.Group>
                {errors.password && (
                    <Alert variant="warning">
                        {errors.password}
                    </Alert>
                )}
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        </div>
    );
};

export default LogInForm;
