import React, { useState } from 'react';
import { Form, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/AuthForm.module.css';
/*
The LogInForm component manages the user login process 
by capturing username and password inputs and sending 
them to the server via an API call. It uses the 
useSetCurrentUser hook to update the current user context 
upon successful login and redirects the user to the home 
page. The component also handles and displays any errors 
returned from the server, providing feedback to the user 
within the form.
 */
const LogInForm = () => {
    const setCurrentUser = useSetCurrentUser();
    const [logInData, setLogInData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogInData(prevData => ({ ...prevData, [name]: value }));
        setGeneralError("");  // Reset general error message when user starts typing
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/dj-rest-auth/login/", logInData);
            setCurrentUser(data.user);
            history.push('/');
        } catch (err) {
            console.error("Login error details:", err); // Log the error details
            if (err.response) {
                console.log("Response data:", err.response.data); // Log response data
                console.log("Response status:", err.response.status); // Log response status
                console.log("Response headers:", err.response.headers); // Log response headers
    
                setErrors(err.response.data);
    
                // Check for a non-field error message indicating an incorrect login attempt
                if (err.response.data.non_field_errors) {
                    setGeneralError("Invalid username or password. Please try again.");
                } else {
                    setGeneralError("An error occurred. Please try again later.");
                }
            } else if (err.request) {
                console.log("Request data:", err.request); // Log request data
                setGeneralError("No response from server. Please check your connection and try again.");
            } else {
                console.log("Error message:", err.message); // Log general error message
                setGeneralError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <Container className={styles.formContainer}>
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit}>
                {generalError && (
                    <Alert variant="danger" className={styles.alert}>
                        {generalError}
                    </Alert>
                )}
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
