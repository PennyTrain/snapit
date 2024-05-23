import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Container, Alert, Image } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { axiosReq } from "../../snapit_api/axiosDefaults";
import useImageUpload from "../../hooks/useImageUpload";

function SnapEdit() {
  const [errors, setErrors] = useState({});
  const [snapData, setSnapData] = useState({
    title: "",
    body: "",
    pet_name: "",
    pet_age: "",
    pet_breed: "",
    pet_type: "",
    location: "",
  });
  const { title, body, pet_name, pet_age, pet_breed, pet_type, location } = snapData;
  
  const { image, setImage, imageInputRef, handleChangeImage, handleOpenFileDialog } = useImageUpload();
  
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/snaps/${id}/`);
        const {
          title, body, featured_image,
          pet_name, pet_age, pet_breed, pet_type,
          location, is_owner
        } = data;

        if (is_owner) {
          setSnapData({
            title, body,
            pet_name, pet_age, pet_breed, pet_type,
            location,
          });
          setImage(featured_image);
        } else {
          history.push("/");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [history, id, setImage]);

  const handleChange = (event) => {
    setSnapData({
      ...snapData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("body", body);
    formData.append("pet_name", pet_name);
    formData.append("pet_age", pet_age);
    formData.append("pet_breed", pet_breed);
    formData.append("pet_type", pet_type);
    formData.append("location", location);

    if (imageInputRef.current.files[0]) {
      formData.append("featured_image", imageInputRef.current.files[0]);
    }

    try {
      await axiosReq.put(`/snaps/${id}/`, formData);
      history.push(`/snaps/${id}`);
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const snapFields = (
    <div className="text-center">
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
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
          placeholder="Enter your pet's name!"
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
          placeholder="Enter your pet's breed!"
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
          placeholder="Enter your pet's age!"
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
          placeholder="Enter your location!"
        />
        {errors?.location?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}
      </Form.Group>

      <Button onClick={() => history.goBack()}>
        Nevermind!
      </Button>
      <Button type="submit">
        Save Snap
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Container>
            <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image src={image} rounded />
                  </figure>
                  <Form.Label
                    onClick={handleOpenFileDialog}
                    style={{ cursor: 'pointer' }}
                  >
                    Change the image
                  </Form.Label>
                </>
              ) : (
                <Form.Label
                  onClick={handleOpenFileDialog}
                  style={{ cursor: 'pointer' }}
                >
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
            <div className="d-md-none">{snapFields}</div>
          </Container>x
        </Col>
        <Col>
          <Container>{snapFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default SnapEdit;