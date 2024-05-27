import React, { useContext, useState } from 'react';
import { Form, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/AuthForm.module.css';

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
            const {data} = await axios.post("/dj-rest-auth/login/", logInData);
            setCurrentUser(data.user);
            history.push('/');
        } catch(err) {
            if (err.response?.data) {
                setErrors(err.response.data);
            }
        }
    };

    return (
        <Container className={styles.formContainer}>
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username" className={styles.formControl}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        name="username"
                        value={logInData.username}
                        type="text"
                        placeholder="Username"
                    />
                </Form.Group>
                {errors.username && (
                    <Alert variant="warning" className={styles.alert}>
                        {errors.username}
                    </Alert>
                )}
                <Form.Group controlId="password" className={styles.formControl}>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={handleChange}
                        value={logInData.password}
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                {errors.password && (
                    <Alert variant="warning" className={styles.alert}>
                        {errors.password}
                    </Alert>
                )}
                <div className={styles.buttonGroup}>
                    <Button variant="primary" type="submit" className={styles.submitBtn}>
                        Log in
                    </Button>
                    <Link to="/register">Don't have an account? Sign Up</Link>
                </div>
            </Form>
        </Container>
    );
};

export default LogInForm;
