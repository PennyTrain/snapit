import React, { useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        password1: "",
        password2: "",
    })
    const {username, password1, password2} = registerData;
    const history= useHistory()
    const [errors, setErrors] = useState({});


    const handleChange = (event) => {
        setRegisterData({
            ...registerData,
            // This line creates a key value pair
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", registerData)
            history.push('/login')
        } catch (err) {
            // Check if the error response contains a 'username' property
            if (err.response?.data?.username) {
                setErrors(err.response.data)
            } else {
                // Handle other types of errors
            }
        }
    };
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control onChange={handleChange} value={username} type="text" placeholder="username" />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                <Form.Group controlId="password1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} value={password1} type="password" placeholder="Password" />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                <Form.Group controlId="password2">
                    <Form.Label>Please Confirm Your Password</Form.Label>
                    <Form.Control onChange={handleChange} value={password2} type="password" placeholder="Password Confirmation" />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                            <Alert variant="warning" key={idx}>
                                {message}
                            </Alert>
                        ))}
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}

export default RegisterForm
