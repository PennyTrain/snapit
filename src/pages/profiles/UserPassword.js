import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/UserChange.module.css";

/*
The UserPassword component allows users to change their password. 
It includes a form where users input their new password and confirm 
it, and handles form submission by sending the details to the server 
via an API call. The component ensures only the profile owner can access 
the password change form, displaying validation errors if the password 
change fails. 
*/

const UserPassword = () => {
    const history = useHistory();
    const { id } = useParams();
    const currentUser = useCurrentUser();

    const [userDetail, setUserDetail] = useState({
        new_password1: "",
        new_password2: "",
    });
    const { new_password1, new_password2 } = userDetail;
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (event) => {
        setUserDetail({
            ...userDetail,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/");
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userDetail);
            setSuccessMessage("Password changed successfully!");
            setErrors({});
            setUserDetail({
                new_password1: "",
                new_password2: "",
            });
            setTimeout(() => {
                history.push("/");
            }, 2000);
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data || {});
            setSuccessMessage("");
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {successMessage && <Alert variant="success">{successMessage}</Alert>}
            {errors?.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                    {message}
                </Alert>
            ))}
            <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                    placeholder="New Password"
                    type="password"
                    value={new_password1}
                    onChange={handleChange}
                    name="new_password1"
                />
            </Form.Group>
            {errors?.new_password1?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                    {message}
                </Alert>
            ))}

            <Form.Group>
                <Form.Label>New Password Confirmation</Form.Label>
                <Form.Control
                    placeholder="New Password Confirmation"
                    type="password"
                    value={new_password2}
                    onChange={handleChange}
                    name="new_password2"
                />
            </Form.Group>
            {errors?.new_password2?.map((message, idx) => (
                <Alert key={idx} variant="danger">
                    {message}
                </Alert>
            ))}
            <Button className={styles.btn} onClick={() => history.goBack()}>
                Cancel
            </Button>
            <Button className={styles.btn} type="submit">
                Save Password
            </Button>
        </Form>
    );
};

export default UserPassword;
