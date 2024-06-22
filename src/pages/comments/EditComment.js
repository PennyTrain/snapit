import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import useImageUpload from "../../hooks/useImageUpload";
import styles from "../../styles/CommentForm.module.css";
/*
The EditComment component facilitates editing existing comments, 
allowing users to modify the comment text, pet name, age, breed, 
and type. It also provides functionality to update an attached 
image, if present, and includes options to cancel the edit or 
submit the changes. The component integrates with the useImageUpload 
hook for managing image uploads and updates the comment data upon 
successful submission.
 */

function EditComment(props) {
  const { id, body, pet_name, pet_age, pet_breed, pet_type, attachment, setEnableUpdate, setComments } = props;
  const [editBody, setEditBody] = useState(body);
  const [editPetName, setEditPetName] = useState(pet_name);
  const [editPetAge, setEditPetAge] = useState(pet_age);
  const [editPetBreed, setEditPetBreed] = useState(pet_breed);
  const [editPetType, setEditPetType] = useState(pet_type);
  const { image, setImage, imageInputRef, handleChangeImage, handleOpenFileDialog, resetImage } = useImageUpload();

  if (attachment && !image) {
    setImage(attachment);
  }

    const handleSubmit = async (event) => {
        event.preventDefault();
    try {
        const formData = new FormData();
      formData.append("body", editBody.trim());
      formData.append("pet_name", editPetName);
      formData.append("pet_age", editPetAge);
      formData.append("pet_breed", editPetBreed);
      formData.append("pet_type", editPetType);
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
      setEnableUpdate(false);
        } catch (err) {
      console.log(err);
        }
    };

    return (
    <Form className={styles.formContainer} onSubmit={handleSubmit}>
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
