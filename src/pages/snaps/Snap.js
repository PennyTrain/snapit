import React from "react";
import PropTypes from "prop-types";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { axiosRes } from '../../snapit_api/axiosDefaults';
import { Link, useHistory } from "react-router-dom";
import { MoreDropDown } from "../../components/MoreDropDown";
import styles from '../../styles/Snap.module.css';

/*
The Snap component represents a single snap in a social media-like application. 
It displays the snap's owner, title, body, featured image, and various interaction 
options like liking, disliking, and commenting. Users can interact with the snap by 
liking, disliking, and commenting, with different visual cues provided based on their 
authentication status and interaction history. Additionally, owners of snaps have access 
to tools for editing and deleting their snaps.
*/

function Snap(props) {
  const {
    id, owner, profile_id,
    title, body,
    snaplikes_count, featured_image,
    snaplike_id, snapcomments_count,
    snapdislike_id, snapdislikes_count,
    setSnaps
  } = props;

  const history = useHistory();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleEdit = () => {
    history.push(`/snaps/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/snaps/${id}/`);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  const handleSnapLike = async () => {
    try {
      if (snapdislike_id) {
        await axiosRes.delete(`/snapdislikes/${snapdislike_id}/`);
      }
      const { data } = await axiosRes.post("/snaplikes/", { snap: id });
      setSnaps(prevSnaps => ({
        ...prevSnaps,
        results: prevSnaps.results.map(snap => (
          snap.id === id ? { ...snap, snaplikes_count: snaplikes_count + 1, snaplike_id: data.id, snapdislikes_count: snapdislike_id ? snapdislikes_count - 1 : snapdislikes_count, snapdislike_id: null } : snap
        ))
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnapUnlike = async () => {
    try {
      await axiosRes.delete(`/snaplikes/${snaplike_id}/`);
      setSnaps(prevSnaps => ({
        ...prevSnaps,
        results: prevSnaps.results.map(snap => (
          snap.id === id ? { ...snap, snaplikes_count: snaplikes_count - 1, snaplike_id: null } : snap
        ))
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnapDislike = async () => {
    try {
      if (snaplike_id) {
        await axiosRes.delete(`/snaplikes/${snaplike_id}/`);
      }
      const { data } = await axiosRes.post("/snapdislikes/", { snap: id });
      setSnaps(prevSnaps => ({
        ...prevSnaps,
        results: prevSnaps.results.map(snap => (
          snap.id === id ? { ...snap, snapdislikes_count: snapdislikes_count + 1, snapdislike_id: data.id, snaplikes_count: snaplike_id ? snaplikes_count - 1 : snaplikes_count, snaplike_id: null } : snap
        ))
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSnapUndislike = async () => {
    try {
      await axiosRes.delete(`/snapdislikes/${snapdislike_id}/`);
      setSnaps(prevSnaps => ({
        ...prevSnaps,
        results: prevSnaps.results.map(snap => (
          snap.id === id ? { ...snap, snapdislikes_count: snapdislikes_count - 1, snapdislike_id: null } : snap
        ))
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const renderLikeButton = () => {
    if (is_owner) {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>You can&apos;t like your own post!</Tooltip>}>
          <span><i style={{ color: "white" }} className={`${styles.iconButton} far fa-heart`} /></span>
        </OverlayTrigger>
      );
    }
    if (snaplike_id) {
      return (
        <span onClick={handleSnapUnlike}>
          <i style={{ color: "#f84bd4" }} className={`${styles.iconButton} far fa-heart`}/>
        </span>
      );
    }
    if (currentUser) {
      return (
        <span onClick={handleSnapLike}>
          <i className={`${styles.iconButton} far fa-heart`} />
        </span>
      );
    }
    return (
      <OverlayTrigger placement="top" overlay={<Tooltip>Log in to like posts!</Tooltip>}>
        <span><i className={`${styles.iconButton} far fa-heart`} /></span>
      </OverlayTrigger>
    );
  };

  const renderDislikeButton = () => {
    if (is_owner) {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>You can&apos;t dislike your own snaps!</Tooltip>}>
          <span> <i className={`${styles.iconButton} far fa-thumbs-down`} style={{ color: "white" }} /></span>
        </OverlayTrigger>
      );
    }
    if (snapdislike_id) {
      return (
        <span onClick={handleSnapUndislike}>
          <i className={`${styles.iconButton} far fa-thumbs-down`} style={{ color: "#f84bd4" }} /> 
        </span>
      );
    }
    if (currentUser) {
      return (
        <span onClick={handleSnapDislike}>
          <i className={`${styles.iconButton} far fa-thumbs-down`} />
        </span>
      );
    }
    return (
      <OverlayTrigger placement="top" overlay={<Tooltip>Log in to dislike snaps!</Tooltip>}>
        <span> <i className={`${styles.iconButton} far fa-thumbs-down`} /></span>
      </OverlayTrigger>
    );
  };

  const renderOwnerTools = () => {
    if (is_owner) {
      return (
        <MoreDropDown handleEdit={handleEdit} handleDelete={handleDelete} />
      );
    }
  };

  const renderCommentsButton = () => {
    if (currentUser) {
      return (
        <Link to={`/snaps/${id}`} className={styles.commentButton}>
          <span>
            <i className="far fa-comments" /> {snapcomments_count}
          </span>
        </Link>
      );
    } else {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>Log in to create comments!</Tooltip>}>
          <Link to={`/snaps/${id}`} className={styles.commentButton}>
            <span>
              <i className="far fa-comments" /> 
              </span>
          </Link>
        </OverlayTrigger>
      );
    }
  };

  return (
    <Card className={styles.cardContainer}>
      <Link to={`/snaps/${id}`}>
        <Card.Img variant="top" src={featured_image} className={styles.cardImage} />
      </Link>
      <Card.Body className={styles.cardBody}>
        <Link to={`/profiles/${profile_id}`}>{owner}</Link>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{body}</Card.Text>
        {renderOwnerTools()}
        <div className={styles.buttonGroup}>
          {renderLikeButton()} {snaplikes_count}
          {renderDislikeButton()} {snapdislikes_count}
          {renderCommentsButton()}
        </div>
      </Card.Body>
    </Card>
  );
}

Snap.propTypes = {
  id: PropTypes.number.isRequired,
  owner: PropTypes.string.isRequired,
  profile_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  snaplikes_count: PropTypes.number.isRequired,
  featured_image: PropTypes.string.isRequired,
  snaplike_id: PropTypes.number,
  snapcomments_count: PropTypes.number.isRequired,
  snapdislike_id: PropTypes.number,
  snapdislikes_count: PropTypes.number.isRequired,
  setSnaps: PropTypes.func.isRequired
};

export default Snap;
