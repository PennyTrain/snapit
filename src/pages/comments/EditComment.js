import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { axiosRes } from "../../snapit_api/axiosDefaults";

function EditComment(props) {
    const { id, body, setEnableUpdate, setComments } = props;
    const [editBody, setEditBody] = useState(body);

    const handleChange = (event) => {
        setEditBody(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axiosRes.put(`/snapcomments/${id}/`, {
                body: editBody.trim(),
            });
            setComments((prevComments) => ({
                ...prevComments,
                results: prevComments.results.map((comment) => {
                    return comment.id === id
                    ? {
                        ...comment,
                        body: editBody.trim(),
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
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="editComment">
                <Form.Label>Edit Comment</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={editBody}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button onClick={() => setEditBody(false)} type="button">
                Cancel
            </Button>
            <Button variant="primary" type="submit">
                Update Comment
            </Button>
        </Form>
    );
}

export default EditComment;
