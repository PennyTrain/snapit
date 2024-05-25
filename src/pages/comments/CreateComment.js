import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { axiosRes } from "../../snapit_api/axiosDefaults";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import useImageUpload from "../../hooks/useImageUpload";

function CommentCreateForm(props) {
  const { snapId, setSnaps, setComments, profileImage, profile_id } = props;
  const currentUser = useContext(CurrentUserContext);
  const [body, setBody] = useState("");
  const [petName, setPetName] = useState(""); // Add state for pet name
  const [petAge, setPetAge] = useState(""); // Add state for pet age
  const [petBreed, setPetBreed] = useState(""); // Add state for pet breed
  const [petType, setPetType] = useState("Other"); // Add state for pet type
  const { image, imageInputRef, handleChangeImage, handleOpenFileDialog, resetImage } = useImageUpload(); // Use the useImageUpload hook

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("body", body);
      formData.append("snap", snapId);
      formData.append("pet_name", petName); // Add pet_name to the form data
      formData.append("pet_age", petAge); // Add pet_age to the form data
      formData.append("pet_breed", petBreed); // Add pet_breed to the form data
      formData.append("pet_type", petType); // Add pet_type to the form data
      if (image) {
        formData.append("attachment", imageInputRef.current.files[0]); // Add attachment to the form data if an image is uploaded
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
      resetImage(); // Reset the image state after successful submission
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {currentUser ? ( 
        <Form className="mt-2" onSubmit={handleSubmit}>
          <Form.Group>
            <InputGroup>
              <Link to={`/profiles/${profile_id}`}>
                <img src={profileImage} alt="Profile" />
              </Link>
              <Form.Control
                placeholder="my comment..."
                as="textarea"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={2}
              />
            </InputGroup>
          </Form.Group>
          {/* Add fields for pet details */}
          <Form.Group>
            <Form.Control placeholder="Pet Name" value={petName} onChange={(e) => setPetName(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Pet Age" type="number" value={petAge} onChange={(e) => setPetAge(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Pet Breed" value={petBreed} onChange={(e) => setPetBreed(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Control placeholder="Pet Type" value={petType} onChange={(e) => setPetType(e.target.value)} />
          </Form.Group>
          {/* Add image upload */}
          <Form.Group>
            <Form.Control type="file" ref={imageInputRef} style={{ display: "none" }} onChange={handleChangeImage} />
            <Button onClick={handleOpenFileDialog}>Choose Image</Button>
            {image && <img src={image} alt="Preview" style={{ maxWidth: "100px", marginTop: "10px" }} />}
          </Form.Group>
          <Button disabled={!body.trim()} type="submit">Post</Button>
        </Form>
      ) : (
        <p>Please log in to comment.</p>
      )}
    </>
  );
}

export default CommentCreateForm;
