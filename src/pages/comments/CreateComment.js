import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useImageUpload from "../../hooks/useImageUpload";
import styles from "../../styles/CommentForm.module.css";

function CreateComment(props) {
  const { snapId, setSnaps, setComments, profileImage, profile_id } = props;
  const currentUser = useContext(CurrentUserContext);
  const [body, setBody] = useState("");
  const [petName, setPetName] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [petType, setPetType] = useState("Other");
  const { image, imageInputRef, handleChangeImage, handleOpenFileDialog, resetImage } = useImageUpload();
  const [successMessage, setSuccessMessage] = useState("");
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("body", body);
      formData.append("snap", snapId);
      formData.append("pet_name", petName);
      formData.append("pet_age", petAge);
      formData.append("pet_breed", petBreed);
      formData.append("pet_type", petType);
      if (image) {
        formData.append("attachment", imageInputRef.current.files[0]);
      }
      const { data } = await axiosRes.post("/snapcomments/", formData);
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setSnaps((prevSnaps) => ({
        results: [
          {
            ...prevSnaps.results[0],
            snapcomments_count: prevSnaps.results[0].snapcomments_count + 1,
          },
        ],
      }));
      setBody("");
      setPetName("");
      setPetAge("");
      setPetBreed("");
      setPetType("Other");
      resetImage();
      setSuccessMessage("Comment posted successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000); // Refresh the page after 1 second
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      {currentUser ? (
        <Form className={`mt-2 ${styles.formContainer}`} onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup>
              <Link to={`/profiles/${profile_id}`}>
                <img 
                src={profileImage} 
                alt="Profile"
                height={50}
                width={50}
                 />
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
            <Button onClick={handleOpenFileDialog}>Choose Image</Button>
            {image && <img src={image} alt="Preview" className={styles.imagePreview} />}
          </Form.Group>
          <Button disabled={!body.trim()} type="submit" className={styles.btn}>
            Post
          </Button>
        </Form>
      ) : (
        <p>Please log in to comment.</p>
      )}
    </>
  );
}

export default CreateComment;
