import React, { useState } from 'react';
import { Form, Button, Alert, Container } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import axios from "axios";
import { useSetCurrentUser } from '../../contexts/CurrentUserContext';
import { useMessages } from '../../contexts/MessageContext';
import styles from '../../styles/AuthForm.module.css';

// The LogInForm component manages the user login process, including form handling, 
// validation, and error display. It uses React state to manage form data, errors, 
// and general error messages. Upon form submission, it sends a POST request to the 
// server to log in the user, sets the current user on successful login, and displays 
// a success message. If login fails, it displays detailed error messages based on the 
// server's response.

const LogInForm = () => {
    const setCurrentUser = useSetCurrentUser();
    const { addMessage } = useMessages(); 
    const [logInData, setLogInData] = useState({ username: "", password: "" });
    const [errors, setErrors] = useState({});
    const [generalError, setGeneralError] = useState("");
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogInData(prevData => ({ ...prevData, [name]: value }));
        setGeneralError(""); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/dj-rest-auth/login/", logInData);
            setCurrentUser(data.user);
            history.push('/');
            addMessage({ text: "You have been successfully logged in.", type: "success" });
        } catch (err) {
            console.error("Login error details:", err); 
            if (err.response) {
                console.log("Response data:", err.response.data); 
                console.log("Response status:", err.response.status);
                console.log("Response headers:", err.response.headers); 
    
                setErrors(err.response.data);
    
                
                if (err.response.data.non_field_errors) {
                    setGeneralError("Invalid username or password. Please try again.");
                } else {
                    setGeneralError("An error occurred. Please try again later.");
                }
            } else if (err.request) {
                console.log("Request data:", err.request);
                setGeneralError("No response from server. Please check your connection and try again.");
            } else {
                console.log("Error message:", err.message); 
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
                    <Button type="submit" className={styles.submitBtn}>
                        Log in
                    </Button>
                    <Link to="/register">Don&apos;t have an account? Sign Up</Link>
                </div>
            </Form>
        </Container>
    );
};

export default LogInForm;
