import React, { useState } from 'react';
import { Form, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import styles from '../../styles/AuthForm.module.css';

const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const { username, password1, password2 } = registerData;
    const history = useHistory();
    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegisterData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post("/dj-rest-auth/registration/", registerData);
            history.push('/login');
        } catch (err) {
            if (err.response?.data) {
                setErrors(err.response.data);
            }
        }
    };

    return (
        <Container className={styles.formContainer}>
            <h1>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className={styles.formControl}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        name="username"
                        onChange={handleChange}
                        value={username}
                        type="text"
                        placeholder="Username"
                    />
                </Form.Group>
                {errors.username && (
                    <Alert variant="warning" className={styles.alert}>
                        {errors.username}
                    </Alert>
                )}
                <Form.Group controlId="password1" className={styles.formControl}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password1"
                        onChange={handleChange}
                        value={password1}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                {errors.password1 && (
                    <Alert variant="warning" className={styles.alert}>
                        {errors.password1}
                    </Alert>
                )}
                <Form.Group controlId="password2" className={styles.formControl}>
                    <Form.Label>Please Confirm Your Password</Form.Label>
                    <Form.Control
                        name="password2"
                        onChange={handleChange}
                        value={password2}
                        type="password"
                        placeholder="Password Confirmation"
                    />
                </Form.Group>
                {errors.password2 && (
                    <Alert variant="warning" className={styles.alert}>
                        {errors.password2}
                    </Alert>
                )}
                <div className={styles.buttonGroup}>
                    <Button variant="primary" type="submit" className={styles.submitBtn}>
                        Sign Up
                    </Button>
                    <Link to="/login">Already have an account? Log In</Link>
                </div>
            </Form>
        </Container>
    );
};

export default RegisterForm;
