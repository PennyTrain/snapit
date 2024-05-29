import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


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

    const handleChange = (event) => {
        setUserDetail({
            ...userDetail,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        if (currentUser?.profile_id?.toString() !== id) {
            history.push("/")
        }
    }, [currentUser, history, id]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.post("/dj-rest-auth/password/change/", userDetail);
            history.goBack();
        } catch (err) {
            console.log(err);
            setErrors(err.response?.data);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
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
                <Alert key={idx} variant="warning">
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
                <Alert key={idx} variant="warning">
                    {message}
                </Alert>
            ))}
            <Button onClick={() => history.goBack()}>
                Back
            </Button>
            <Button type="submit">
                Save Password!
            </Button>
        </Form>
    )
}

export default UserPassword;