import React, { useState } from 'react'
import { Form, Button, Alert, Image } from "react-bootstrap";
import useImageUpload from '../../hooks/useImageUpload';
import { useHistory } from "react-router";
import { axiosReq } from "../../snapit_api/axiosDefaults";


const SnapCreate = () => {

    const { image, imageInputRef, handleChangeImage, handleOpenFileDialog } = useImageUpload();
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const [snapData, setSnapData] = useState({
        title: "",
        body: "",
        featured_image: "",
      });
    const { title, body, featured_image } = snapData

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

    return (
        <div>
            <h1>HELLO</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control name="title" value={title} onChange={handleChange} size="lg" type="text" placeholder="Large text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control name="body" value={body} onChange={handleChange} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    {image ? (
                        <>
                            <figure>
                                <Image src={image} rounded />
                            </figure>
                            <div>
                                <Form.Label onClick={handleOpenFileDialog}>
                                    Change the image
                                </Form.Label>
                            </div>
                        </>
                    ) : (
                        <Form.Label onClick={handleOpenFileDialog}>
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
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form>
        </div>
    )
}

export default SnapCreate

