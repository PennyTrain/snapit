import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import useImageUpload from "../../hooks/useImageUpload";
import styles from "../../styles/CommentForm.module.css";

// The EditComment component facilitates editing existing comments 
// associated with a snap. It initializes state variables for various 
// fields like comment body, pet details, and an image upload feature 
// using useImageUpload. Upon component mount, it fetches the comment's 
// data via an API call and populates the form fields accordingly. The 
// component handles form submission, validates the pet age to ensure 
// it's within acceptable limits, updates the comment via a PUT request 
// to the API, and provides user feedback through success or error messages 
// displayed using Bootstrap Alerts.
function EditComment({
  id,
  body,
  pet_name,
  pet_age,
  pet_breed,
  pet_type,
  attachment,
  setEnableUpdate,
  setComments,
}) {
  const [editBody, setEditBody] = useState(body || "");
  const [editPetName, setEditPetName] = useState(pet_name || "");
  const [editPetAge, setEditPetAge] = useState(pet_age || "");
  const [editPetBreed, setEditPetBreed] = useState(pet_breed || "");
  const [editPetType, setEditPetType] = useState(pet_type || "");
  const { image, setImage, imageInputRef, handleChangeImage, handleOpenFileDialog } = useImageUpload();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const { data } = await axiosRes.get(`/snapcomments/${id}/`);
        setEditBody(data.body);
        setEditPetName(data.pet_name);
        setEditPetAge(data.pet_age);
        setEditPetBreed(data.pet_breed);
        setEditPetType(data.pet_type);
        if (data.attachment) {
          setImage(data.attachment);
        }
      } catch (err) {
        console.error("Error fetching comment data:", err);
      }
    };
    fetchCommentData();
  }, [id, setImage]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (editPetAge < 0) {
      newErrors.pet_age = ["Age cannot be negative"];
    } else if (editPetAge > 300) {
      newErrors.pet_age = ["Age cannot be more than 300 years"];
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
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
        results: prevComments.results.map((comment) =>
          comment.id === id
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
            : comment
        ),
      }));
      setSuccessMessage("Comment updated successfully!");
      setErrorMessage("");
      setTimeout(() => {
        setEnableUpdate(false);
      }, 2000);
    } catch (err) {
      console.error("Error updating comment:", err);
      setErrorMessage("Failed to update comment. Please try again.");
      setErrors(err.response?.data || {});
    }
  };

  return (
    <Form className={styles.formContainer} onSubmit={handleSubmit}>
      {successMessage && <Alert variant="success" className={styles.alert}>{successMessage}</Alert>}
      {errorMessage && <Alert variant="danger" className={styles.alert}>{errorMessage}</Alert>}
      <Form.Group controlId="editCommentBody">
        <Form.Control
          as="textarea"
          rows={2}
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          className={styles.formControl}
        />
      </Form.Group>
      <Form.Group controlId="editPetName">
        <Form.Control
          type="text"
          placeholder="Pet Name"
          value={editPetName}
          onChange={(e) => setEditPetName(e.target.value)}
          className={styles.formControl}
        />
      </Form.Group>
      <Form.Group controlId="editPetAge">
        <Form.Control
          type="number"
          placeholder="Pet Age"
          value={editPetAge}
          onChange={(e) => setEditPetAge(e.target.value)}
          className={styles.formControl}
        />
        {errors?.pet_age?.map((message, idx) => (
          <Alert key={idx} variant="warning" className={styles.alert}>
            {message}
          </Alert>
        ))}
      </Form.Group>
      <Form.Group controlId="editPetBreed">
        <Form.Control
          type="text"
          placeholder="Pet Breed"
          value={editPetBreed}
          onChange={(e) => setEditPetBreed(e.target.value)}
          className={styles.formControl}
        />
      </Form.Group>
      <Form.Group controlId="editPetType">
        <Form.Control
          type="text"
          placeholder="Pet Type"
          value={editPetType}
          onChange={(e) => setEditPetType(e.target.value)}
          className={styles.formControl}
        />
      </Form.Group>
      <Form.Group controlId="editCommentImage">
        <Form.Control type="file" ref={imageInputRef} style={{ display: "none" }} onChange={handleChangeImage} />
        <Button onClick={handleOpenFileDialog} className={styles.btn}>
          Choose Image
        </Button>
        {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
      </Form.Group>
      <Button type="submit" className={styles.btn}>
        Save
      </Button>
      <Button variant="secondary" onClick={() => setEnableUpdate(false)} className={styles.btn}>
        Cancel
      </Button>
    </Form>
  );
}

// Prop types definition for validation
EditComment.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  pet_name: PropTypes.string.isRequired,
  pet_age: PropTypes.number.isRequired,
  pet_breed: PropTypes.string.isRequired,
  pet_type: PropTypes.string.isRequired,
  attachment: PropTypes.string.isRequired,
  setEnableUpdate: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
};

export default EditComment;
