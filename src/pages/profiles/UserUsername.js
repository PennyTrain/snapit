import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

/*
The UserUsername component enables users to change their username. 
It pre-fills the form with the current username if the user is 
authorized and handles form submission by sending the updated 
username to the server. Upon successful update, it reflects the 
change in the global user context and navigates back, displaying 
validation errors if any issues occur during the process.
*/
const UserUsername = () => {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const history = useHistory();
    const { id } = useParams();

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    useEffect(() => {
        if (currentUser?.profile_id?.toString() === id) {
            setUsername(currentUser.username);
        } else {
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put("/dj-rest-auth/user/", {
                username,
            });
            setCurrentUser((prevUser) => ({
                ...prevUser,
                username,
            }));
            setSuccessMessage("Username changed successfully!");
            setErrors({});
            history.goBack();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
            setSuccessMessage("");
        }
    };
    return (
        <Form onSubmit={handleSubmit}>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            <Form.Group controlId="username">
                <Form.Label>Change Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="New username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}
            <Button onClick={() => history.goBack()}>
                Cancel
            </Button>
            <Button type="submit">
                Save
            </Button>
        </Form>
    );
};

export default UserUsername;
