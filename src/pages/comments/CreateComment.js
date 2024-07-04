import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useImageUpload from "../../hooks/useImageUpload";
import styles from "../../styles/CommentForm.module.css";
// The CreateComment component manages a form for users to submit comments 
// associated with a specific snap. It handles form submission, validates 
// input fields such as pet age to prevent negative values or excessive ages,
// and utilizes an image upload feature. Upon successful submission, it updates 
// both the comments and snaps states, resets the form fields, and displays a 
// success message using the useMessages context. If the user is not logged in, 
// it prompts them to log in before commenting.

function CreateComment({ snapId, setSnaps, setComments, profileImage, profile_id }) {
  const currentUser = useContext(CurrentUserContext);
  const [body, setBody] = useState("");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petType, setPetType] = useState("Other");
  const { image, imageInputRef, handleChangeImage, handleOpenFileDialog, resetImage } = useImageUpload();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newErrors = {};
    if (petAge < 0) {
      newErrors.pet_age = ["Age cannot be negative"];
    } else if (petAge > 300) {
      newErrors.pet_age = ["Age cannot be more than 300 years"];
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("body", body.trim());
      formData.append("snap", snapId);
      formData.append("pet_name", petName.trim());
      formData.append("pet_age", petAge);
      formData.append("pet_breed", petBreed.trim());
      formData.append("pet_type", petType.trim());
      if (image) {
        formData.append("attachment", imageInputRef.current.files[0]);
      }
      const { data } = await axiosRes.post("/snapcomments/", formData);
      
      // Update comments state immediately
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));

      // Update snaps state immediately
      setSnaps((prevSnaps) => ({
        ...prevSnaps,
        results: prevSnaps.results.map((snap) =>
          snap.id === snapId
            ? { ...snap, snapcomments_count: snap.snapcomments_count + 1 }
            : snap
        ),
      }));

      // Reset form
      setBody("");
      setPetName("");
      setPetAge("");
      setPetBreed("");
      setPetType("Other");
      resetImage();

      // Display success message
      setSuccessMessage("Comment posted successfully!");
      setErrorMessage("");

      // Reload page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (err) {
      console.error("Error posting comment:", err);
      setErrorMessage("Failed to post comment. Please try again later.");
      setSuccessMessage("");
      setErrors(err.response?.data || {});

      // Optionally reload page after a delay in case of error
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <>
      {currentUser ? (
        <>
          <Form className={`mt-2 ${styles.formContainer}`} onSubmit={handleSubmit}>
            {successMessage && <Alert variant="success" className={styles.alert}>{successMessage}</Alert>}
            {errorMessage && <Alert variant="danger" className={styles.alert}>{errorMessage}</Alert>}
            <Form.Group>
              <InputGroup>
                <Link to={`/profiles/${profile_id}`}>
                  <img src={profileImage} alt="Profile" height={50} width={50} />
                </Link>
                <Form.Control
                  placeholder="my comment..."
                  as="textarea"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={2}
                  className={styles.formControl}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Pet Name"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Pet Age"
                type="number"
                value={petAge}
                onChange={(e) => setPetAge(e.target.value)}
                className={styles.formControl}
              />
              {errors?.pet_age?.map((message, idx) => (
                <Alert key={idx} variant="warning" className={styles.alert}>
                  {message}
                </Alert>
              ))}
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Pet Breed"
                value={petBreed}
                onChange={(e) => setPetBreed(e.target.value)}
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                placeholder="Pet Type"
                value={petType}
                onChange={(e) => setPetType(e.target.value)}
                className={styles.formControl}
              />
            </Form.Group>
            <Form.Group className={styles.imageUpload}>
              <Form.Control type="file" ref={imageInputRef} style={{ display: "none" }} onChange={handleChangeImage} />
              <Button className={styles.btn} onClick={handleOpenFileDialog}>Choose Image</Button>
              {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
            </Form.Group>
            <Button disabled={!body.trim()} type="submit" className={styles.btn}>
              Post
            </Button>
          </Form>
        </>
      ) : (
        <p>Please log in to comment.</p>
      )}
    </>
  );
}

CreateComment.propTypes = {
  snapId: PropTypes.number.isRequired,
  setSnaps: PropTypes.func.isRequired,
  setComments: PropTypes.func.isRequired,
  profileImage: PropTypes.string.isRequired,
  profile_id: PropTypes.number.isRequired,
};

export default CreateComment;
