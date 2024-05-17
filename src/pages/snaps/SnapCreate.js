import React from 'react'
import { Form, Button, Alert, Image } from "react-bootstrap";
import useImageUpload from '../../hooks/useImageUpload';

const SnapCreate = () => {

    const { image, imageInputRef, handleChangeImage, handleOpenFileDialog } = useImageUpload();
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control size="lg" type="text" placeholder="Large text" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
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




            </Form>
        </div>
    )
}

export default SnapCreate

