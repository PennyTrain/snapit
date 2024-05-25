import React, { useContext, useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';

const LogInForm = () => {
    const setCurrentUser = useSetCurrentUser();
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
            const { data } = await axios.post("/dj-rest-auth/login/", logInData);
            setCurrentUser(data.user);
            history.push('/');
        } catch (err) {
            if (err.response && err.response.data) {
                setErrors(err.response.data);
            } else {
                setErrors({ non_field_errors: "Something went wrong. Please try again." });
            }
        }
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleChange} name="username" value={logInData.username} type="text" placeholder="Username" />
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
                {errors.non_field_errors && (
                    <Alert variant="warning">
                        {errors.non_field_errors}
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
