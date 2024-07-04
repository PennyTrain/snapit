import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Tooltip, OverlayTrigger } from "react-bootstrap";
import { axiosRes } from '../../snapit_api/axiosDefaults';
import { Link, useHistory } from "react-router-dom";
import { MoreDropDown } from "../../components/MoreDropDown";
import styles from '../../styles/Snap.module.css';


// The Snap component is responsible for rendering a card that displays details of 
// a snap (post) fetched from an API. It receives numerous props containing data 
// such as the snap's ID, owner's username, title, body content, like and dislike 
// counts, featured image URL, pet details, and comment count. The component includes 
// functionalities to handle actions like editing and deleting a snap if the current 
// user matches the owner of the snap.

// The component also integrates features for liking and disliking snaps, which dynamically 
// update the snap's like and dislike counts upon interaction using POST and DELETE requests 
// to the API. Error handling is implemented to manage potential issues during these API 
// interactions, displaying appropriate messages on failure. Additionally, it supports navigation 
// to the snap's detailed view and the owner's profile through React Router links, enhancing user 
// engagement and interaction with the application.

// Styling is applied using React Bootstrap components and custom CSS from the styles module, 
// ensuring a cohesive and visually appealing presentation of the snap's information and interactive 
// elements. Overall, Snap encapsulates the display, interaction, and management of individual snaps 
// within the broader application context.

function Snap(props) {
  const {
    id, owner, profile_id,
    title, body,
    snaplikes_count, featured_image,
    snaplike_id, snapcomments_count,
    snapdislike_id, snapdislikes_count,
    pet_name, pet_age, pet_breed, pet_type, location,
    setSnaps
  } = props;

  const history = useHistory();
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const [deleteMessage, setDeleteMessage] = useState(null);

  useEffect(() => {
    if (deleteMessage) {
      setTimeout(() => {
        setDeleteMessage(null);
      }, 5000); 
    }
  }, [deleteMessage]);

  const handleEdit = () => {
    history.push(`/snaps/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/snaps/${id}/`);
      setSnaps(prevSnaps => ({
        ...prevSnaps,
        results: prevSnaps.results.filter(snap => snap.id !== id)
      }));
      setDeleteMessage("Snap deleted successfully.");
      history.push("/");
    } catch (err) {
      console.error(err);
      setDeleteMessage("Failed to delete snap. Please try again later.");
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
          <span><i className={`${styles.iconButton} far fa-heart`} style={{ color: "gray" }} /></span>
        </OverlayTrigger>
      );
    }
    if (snaplike_id) {
      return (
        <span onClick={handleSnapUnlike}>
          <i className={`${styles.iconButton} fas fa-heart`} style={{ color: "#f84bd4" }} />
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
        <span><i className={`${styles.iconButton} far fa-heart`} style={{ color: "gray" }} /></span>
      </OverlayTrigger>
    );
  };

  const renderDislikeButton = () => {
    if (is_owner) {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>You can&apos;t dislike your own snaps!</Tooltip>}>
          <span><i className={`${styles.iconButton} far fa-thumbs-down`} style={{ color: "gray" }} /></span>
        </OverlayTrigger>
      );
    }
    if (snapdislike_id) {
      return (
        <span onClick={handleSnapUndislike}>
          <i className={`${styles.iconButton} fas fa-thumbs-down`} style={{ color: "#f84bd4" }} />
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
        <span><i className={`${styles.iconButton} far fa-thumbs-down`} style={{ color: "white" }} /></span>
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
      <Card.Text className={styles.petDetails}>Location: {location}</Card.Text>
      <Link to={`/snaps/${id}`}>
        <Card.Img variant="top" src={featured_image} className={styles.cardImage} />
      </Link>
      {renderOwnerTools()}
      <Card.Body className={styles.cardBody}>
        <Link to={`/profiles/${profile_id}`} className={styles.authorLink}>User: {owner} </Link>
        <Card.Title className={styles.cardTitle}>{title}</Card.Title>
        <Card.Text className={styles.cardText}>{body}</Card.Text>
        <Card.Text className={styles.petDetails}>Pet Age: {pet_age} | Pet Breed: {pet_breed} | Pet Type: {pet_type} | Pet Name: {pet_name}</Card.Text>
        <div className={styles.buttonGroup}>
          {renderLikeButton()} <span className={styles.countText}>{snaplikes_count}</span>
          {renderDislikeButton()} <span className={styles.countText}>{snapdislikes_count}</span>
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
  pet_name: PropTypes.string,
  pet_age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  pet_breed: PropTypes.string,
  pet_type: PropTypes.string,
  location: PropTypes.string,
  setSnaps: PropTypes.func.isRequired
};

export default Snap;
