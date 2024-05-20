import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { axiosRes } from '../../snapit_api/axiosDefaults';
import { Link, useHistory } from "react-router-dom";

function Snap(props) {
  const {
    id, owner, profile_id, profile_image, 
    created, updated, title, body, 
    snaplikes_count, featured_image, 
    status, snaplike_id, snapcomments_count, 
    snapdislike_id, snapdislikes_count, 
    setSnaps
  } = props;

  const history = useHistory();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const updateSnaps = (snapId, changes) => {
    setSnaps(prevSnaps => ({
      ...prevSnaps,
      results: prevSnaps.results.map(snap => (
        snap.id === snapId ? { ...snap, ...changes } : snap
      ))
    }));
  };

  const handleSnapLike = async () => {
    try {
      const { data } = await axiosRes.post("/snaplikes/", { snap: id });
      updateSnaps(id, { snaplikes_count: snaplikes_count + 1, snaplike_id: data.id });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnapUnlike = async () => {
    try {
      await axiosRes.delete(`/snaplikes/${snaplike_id}/`);
      updateSnaps(id, { snaplikes_count: snaplikes_count - 1, snaplike_id: null });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnapDislike = async () => {
    try {
      const { data } = await axiosRes.post("/snapdislikes/", { snap: id });
      updateSnaps(id, { snapdislikes_count: snapdislikes_count + 1, snapdislike_id: data.id });
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnapUndislike = async () => {
    try {
      await axiosRes.delete(`/snapdislikes/${snapdislike_id}/`);
      updateSnaps(id, { snapdislikes_count: snapdislikes_count - 1, snapdislike_id: null });
    } catch (err) {
      console.error(err);
    }
  };

  const renderLikeButton = () => {
    if (is_owner) {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>You can't like your own post!</Tooltip>}>
          <span><i className="fas fa-heart" style={{ color: "gray" }} /></span>
        </OverlayTrigger>
      );
    }
    if (snaplike_id) {
      return (
        <span onClick={handleSnapUnlike}>
          <i className="fas fa-heart" style={{ color: "red" }} />
        </span>
      );
    }
    if (currentUser) {
      return (
        <span onClick={handleSnapLike}>
          <i className="far fa-heart" />
        </span>
      );
    }
    return (
      <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like posts!</Tooltip>}>
        <span><i className="far fa-heart" /></span>
      </OverlayTrigger>
    );
  };

  const renderDislikeButton = () => {
    if (is_owner) {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>You can't dislike your own snaps!</Tooltip>}>
          <span><i className="far fa-thumbs-down" style={{ color: "gray" }} /></span>
        </OverlayTrigger>
      );
    }
    if (snapdislike_id) {
      return (
        <span onClick={handleSnapUndislike}>
          <i className="far fa-thumbs-down" style={{ color: "red" }} />
        </span>
      );
    }
    if (currentUser) {
      return (
        <span onClick={handleSnapDislike}>
          <i className="far fa-thumbs-down" />
        </span>
      );
    }
    return (
      <OverlayTrigger placement="top" overlay={<Tooltip>Log in to dislike snaps!</Tooltip>}>
        <span><i className="far fa-thumbs-down" /></span>
      </OverlayTrigger>
    );
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={featured_image} />
      <Card.Body>
        <Link to={`/profiles/${profile_id}`}>{owner}</Link>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        {renderLikeButton()} {snaplikes_count}
        {renderDislikeButton()} {snapdislikes_count}
      </Card.Body>
    </Card>
  );
}

export default Snap;
