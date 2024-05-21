import React, { useState } from 'react';
import { Form, Button, Alert, Image, Container } from 'react-bootstrap';
import useImageUpload from '../../hooks/useImageUpload';
import { useHistory } from 'react-router';
import { axiosReq } from '../../snapit_api/axiosDefaults';

const SnapCreate = () => {
    const { image, imageInputRef, handleChangeImage, handleOpenFileDialog } = useImageUpload();
    const [errors, setErrors] = useState({});
    const history = useHistory();
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

    const handleChange = (event) => {
        setSnapData({
            ...snapData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
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


    const snapFields = (
        <div>
            <Form.Group controlId="formTitle">
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

            <Form.Group controlId="formBody">
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

            <Form.Group controlId="form_pet_name">
                <Form.Label>Pet Name</Form.Label>
                <Form.Control
                    name="pet_name"
                    value={pet_name}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Enter your pets name!"
                />
                {errors?.pet_name?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>


            <Form.Group controlId="form_pet_breed">
                <Form.Label>Pet Breed</Form.Label>
                <Form.Control
                    name="pet_breed"
                    value={pet_breed}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Enter your pets Breed!"
                />
                {errors?.pet_breed?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>
            <Form.Group controlId="form_pet_age">
                <Form.Label>Pet Age</Form.Label>
                <Form.Control
                    name="pet_age"
                    value={pet_age}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Enter your pets age!"
                />
                {errors?.pet_age?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>


            <Form.Group controlId="form_pet_type">
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
            <Form.Group controlId="form_location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    name="location"
                    value={location}
                    onChange={handleChange}
                    as="textarea"
                    placeholder="Enter your pets age!"
                />
                {errors?.location?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}
            </Form.Group>



            <Button
                onClick={() => history.goBack()}
            >
                Nevermind!
            </Button>

            <Button variant="primary" type="submit">
                Create Snap
            </Button>
        </div>
    )
    return (
        <div>
            <h1>Create a New Snap</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formImage">
                    {image ? (
                        <>
                            <figure>
                                <Image src={image} />
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
        </div>
    );
};

export default SnapCreate;
