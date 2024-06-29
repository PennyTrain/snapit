import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../snapit_api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";
import LogoutButton from "../../components/LogoutButton";
import styles from "../../styles/ProfileEdit.module.css";

/*
The ProfileEdit component allows users to edit their profile information, 
including their bio and profile image. It fetches the current profile data 
on mount, ensuring the user is authorized to edit the profile based on 
their ID, and uses a form to handle updates. If the user makes changes 
and submits the form, the updated data is sent to the server, and the 
profile image is updated accordingly in the context, with any errors displayed to the user. 
*/
const ProfileEdit = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();
  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image } = data;
          setProfileData({ name, content, image });
        } catch (err) {
          console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };
    fetchProfileData();
  }, [currentUser, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);
    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]);
    }
    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      setSuccessMessage("Profile updated successfully!");
      setErrors({});
    } catch (err) {
      console.error("Error updating profile:", err);
      setErrors(err.response?.data || {});
      setSuccessMessage("");
    }
  };

  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>

      {errors?.content?.map((message, idx) => (
        <Alert key={idx} variant="warning">
          {message}
        </Alert>
      ))}
      <Button className={styles.button} onClick={() => history.goBack()}>
        Exit
      </Button>
      <Button className={styles.button} type="submit">
        Save
      </Button>
      <LogoutButton />
    </>
  );

  return (
    <Form className={styles.formContainer} onSubmit={handleSubmit}>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container>
            <Form.Group>
              {image && (
                <figure className={styles.figure}>
                  <Image src={image} fluid className={styles.imagePreview} />
                </figure>
              )}
              {errors?.image?.map((message, idx) => (
                <Alert key={idx} variant="warning">
                  {message}
                </Alert>
              ))}
              <div className={styles.imageUpload}>
                <Form.Label htmlFor="image-upload" className={styles.label}>
                  Change the image
                </Form.Label>
                <Form.File
                  id="image-upload"
                  ref={imageFile}
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files.length) {
                      setProfileData({
                        ...profileData,
                        image: URL.createObjectURL(e.target.files[0]),
                      });
                    }
                  }}
                />
              </div>
            </Form.Group>
          </Container>
        </Col>
        <Col className={styles.textFieldsContainer}>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEdit;
