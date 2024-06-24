import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import useImageUpload from "../../hooks/useImageUpload";
import styles from "../../styles/CommentForm.module.css";

function EditComment(props) {
    const { id, body, pet_name, pet_age, pet_breed, pet_type, attachment, setEnableUpdate, setComments } = props;
    const [editBody, setEditBody] = useState(body || "");
    const [editPetName, setEditPetName] = useState(pet_name || "");
    const [editPetAge, setEditPetAge] = useState(pet_age || "");
    const [editPetBreed, setEditPetBreed] = useState(pet_breed || "");
    const [editPetType, setEditPetType] = useState(pet_type || "");
    const { image, setImage, imageInputRef, handleChangeImage, handleOpenFileDialog, resetImage } = useImageUpload();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    if (attachment && !image) {
        setImage(attachment);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!editBody.trim() || !editPetName.trim() || !editPetAge || !editPetBreed.trim() || !editPetType.trim()) {
            setErrorMessage("All fields are required.");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("body", editBody.trim());
            formData.append("pet_name", editPetName.trim());
            formData.append("pet_age", editPetAge);
            formData.append("pet_breed", editPetBreed.trim());
            formData.append("pet_type", editPetType.trim());
            if (image && image !== attachment) {
                formData.append("attachment", imageInputRef.current.files[0]);
            }

            const { data } = await axiosRes.put(`/snapcomments/${id}/`, formData);
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                        ? {
                            ...comment,
                            body: data.body,
                            pet_name: data.pet_name,
                            pet_age: data.pet_age,
                            pet_breed: data.pet_breed,
                            pet_type: data.pet_type,
                            attachment: data.attachment,
                            updated: "Just now!",
                        }
                        : comment;
                }),
            }));
            setSuccessMessage("Comment updated successfully!");
            setErrorMessage("");

            // Delay setting `setEnableUpdate` to allow success message to be shown
            setTimeout(() => {
                setEnableUpdate(false);
            }, 2000);
        } catch (err) {
            setErrorMessage("Failed to update comment. Please try again.");
            console.log(err);
        }
    };

    return (
        <Form className={styles.formContainer} onSubmit={handleSubmit}>
            {successMessage && <Alert variant="success" className={styles.alert}>{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger" className={styles.alert}>{errorMessage}</Alert>}
            <Form.Group controlId="editComment">
                <Form.Label>Edit Comment</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={editBody}
                    onChange={(e) => setEditBody(e.target.value)}
                    className={styles.formControl}
                />
            </Form.Group>
            <Form.Group controlId="editPetName">
                <Form.Label>Pet Name</Form.Label>
                <Form.Control
                    type="text"
                    value={editPetName}
                    onChange={(e) => setEditPetName(e.target.value)}
                    className={styles.formControl}
                />
            </Form.Group>
            <Form.Group controlId="editPetAge">
                <Form.Label>Pet Age</Form.Label>
                <Form.Control
                    type="number"
                    value={editPetAge}
                    onChange={(e) => setEditPetAge(e.target.value)}
                    className={styles.formControl}
                />
            </Form.Group>
            <Form.Group controlId="editPetBreed">
                <Form.Label>Pet Breed</Form.Label>
                <Form.Control
                    type="text"
                    value={editPetBreed}
                    onChange={(e) => setEditPetBreed(e.target.value)}
                    className={styles.formControl}
                />
            </Form.Group>
            <Form.Group controlId="editPetType">
                <Form.Label>Pet Type</Form.Label>
                <Form.Control
                    type="text"
                    value={editPetType}
                    onChange={(e) => setEditPetType(e.target.value)}
                    className={styles.formControl}
                />
            </Form.Group>
            <Form.Group className={styles.imageUpload}>
                <Form.Control type="file" ref={imageInputRef} style={{ display: "none" }} onChange={handleChangeImage} />
                <Button onClick={handleOpenFileDialog}>Choose Image</Button>
                {image && (
                    <img
                        src={typeof image === 'string' ? image : URL.createObjectURL(imageInputRef.current.files[0])}
                        alt="Preview"
                        className={styles.imagePreview}
                    />
                )}
            </Form.Group>
            <Button onClick={() => setEnableUpdate(false)} type="button" className={styles.cancelBtn}>
                Cancel
            </Button>
            <Button variant="primary" type="submit" className={styles.submitBtn}>
                Update Comment
            </Button>
        </Form>
    );
}

export default EditComment;
