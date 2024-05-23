import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { axiosRes } from "../../snapit_api/axiosDefaults";

function CommentCreateForm(props) {
  const { snapId, setSnaps, setComments, profileImage, profile_id } = props;
  const [body, setBody] = useState("");

  const handleChange = (event) => {
    setBody(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/snapcomments/", {
        body,
        snap: snapId, 
      });
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
    } catch (err) {
      console.log(body, snapId);
      console.log(err);
    }
  };

  return (
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
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        disabled={!body.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CommentCreateForm;
