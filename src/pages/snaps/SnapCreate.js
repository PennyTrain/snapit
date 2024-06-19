import React, { useState } from 'react';
import { Form, Button, Alert, Image, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { axiosReq } from '../../snapit_api/axiosDefaults';
import styles from '../../styles/SnapForm.module.css';
import useImageUpload from '../../hooks/useImageUpload';
import { useCurrentUser } from '../../contexts/CurrentUserContext';

const SnapCreate = () => {
    const { image, imageInputRef, handleChangeImage, handleOpenFileDialog } = useImageUpload();
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const currentUser = useCurrentUser();  // Get the current user

    const [snapData, setSnapData] = useState({
        title: "",
        body: "",
        featured_image: "",
        pet_name: "",
        pet_age: "",
        pet_breed: "",
        pet_type: "",
        location: "",
    });

    const { title, body, pet_name, pet_age, pet_breed, pet_type, location } = snapData;

    const validateTitle = (title) => {
        return title.trim().length > 0;
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        let newErrors = { ...errors };

        if (name === "pet_age") {
            if (value < 0) {
                newErrors.pet_age = ["Age cannot be negative"];
            } else if (value > 300) {
                newErrors.pet_age = ["Age cannot be more than 300 years"];
            } else {
                delete newErrors.pet_age;
                setSnapData({
                    ...snapData,
                    [name]: value,
                });
            }
        } else {
            setSnapData({
                ...snapData,
                [name]: value,
            });
        }

        setErrors(newErrors);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateTitle(title)) {
            setErrors({ title: ["Title cannot be empty or just spaces"] });
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('body', body);
        formData.append('pet_name', pet_name);
        formData.append('pet_age', pet_age);
        formData.append('pet_breed', pet_breed);
        formData.append('pet_type', pet_type);
        formData.append('location', location);
        formData.append('featured_image', imageInputRef.current.files[0]);

        try {
            const { data } = await axiosReq.post("/snaps/", formData);
            history.push(`/snaps/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    if (!currentUser) {
        history.push('/login');  // Redirect to login page if user is not logged in
        return null;  // Render nothing while redirecting
    }

    const snapFields = (
        <div>
            <Form.Group controlId="formTitle" className={styles.formControl}>
                <Form.Control
                    name="title"
                    value={title}
                    onChange={handleChange}
                    size="lg"
                    type="text"
                    placeholder="Enter title"
                />
                {errors?.title?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <Form.Group controlId="formBody" className={styles.formControl}>
                <Form.Label>Body</Form.Label>
                <Form.Control
                    name="body"
                    value={body}
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                    placeholder="Enter body"
                />
                {errors?.body?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <Form.Group controlId="form_pet_name" className={styles.formControl}>
                <Form.Label>Pet Name</Form.Label>
                <Form.Control
                    name="pet_name"
                    value={pet_name}
                    onChange={handleChange}
                    placeholder="Enter your pet's name!"
                />
                {errors?.pet_name?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <Form.Group controlId="form_pet_breed" className={styles.formControl}>
                <Form.Label>Pet Breed</Form.Label>
                <Form.Control
                    name="pet_breed"
                    value={pet_breed}
                    onChange={handleChange}
                    placeholder="Enter your pet's breed!"
                />
                {errors?.pet_breed?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <Form.Group controlId="form_pet_age" className={styles.formControl}>
                <Form.Label>Pet Age</Form.Label>
                <Form.Control
                    type="number"
                    name="pet_age"
                    value={pet_age}
                    onChange={handleChange}
                    placeholder="Enter your pet's age!"
                />
                {errors?.pet_age?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <Form.Group controlId="form_pet_type" className={styles.formControl}>
                <Form.Label>Pet Type</Form.Label>
                <Form.Control as="select" name="pet_type" value={pet_type} onChange={handleChange}>
                    <option>Cat</option>
                    <option>Dog</option>
                    <option>Bunny</option>
                    <option>Hamster</option>
                    <option>Bird</option>
                    <option>Fish</option>
                    <option>Horse</option>
                    <option>Reptiles</option>
                    <option>Other</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="form_location" className={styles.formControl}>
                <Form.Label>Location</Form.Label>
                <Form.Control
                    name="location"
                    value={location}
                    onChange={handleChange}
                    placeholder="Enter your location!"
                />
                {errors?.location?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>

            <div className={styles.buttonGroup}>
                <Button onClick={() => history.goBack()} className={styles.cancelBtn}>
                    Nevermind!
                </Button>
                <Button variant="primary" type="submit" className={styles.submitBtn}>
                    Create Snap
                </Button>
            </div>
        </div>
    );

    return (
        <Container className={styles.formContainer}>
            <h1>Create a New Snap</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formImage" className={styles.imageUpload}>
                    {image ? (
                        <>
                            <figure>
                                <Image src={image} className={styles.imagePreview} />
                            </figure>
                            <Form.Label onClick={handleOpenFileDialog} style={{ cursor: 'pointer' }}>
                                Change the image
                            </Form.Label>
                        </>
                    ) : (
                        <Form.Label onClick={handleOpenFileDialog} style={{ cursor: 'pointer' }}>
                            Click or tap to upload an image
                        </Form.Label>
                    )}
                    <Form.File
                        id="image-upload"
                        accept="image/*"
                        onChange={handleChangeImage}
                        ref={imageInputRef}
                        style={{ display: 'none' }}
                    />
                    {errors?.featured_image?.map((message, idx) => (
                        <Alert variant="warning" key={idx}>
                            {message}
                        </Alert>
                    ))}
                </Form.Group>
                <Container>{snapFields}</Container>
            </Form>
        </Container>
    );
};

export default SnapCreate;
