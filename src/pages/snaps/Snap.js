import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Tooltip, OverlayTrigger, Button } from "react-bootstrap";
import { axiosRes } from '../../snapit_api/axiosDefaults';
import { Link, useHistory } from "react-router-dom";
import { MoreDropDown } from "../../components/MoreDropDown";
import styles from '../../styles/Snap.module.css';

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

  const handleEdit = () => {
    history.push(`/snaps/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/snaps/${id}/`);
      history.goBack();
      console.log("deleted");
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
      updateSnaps(id, {
        snaplikes_count: snaplikes_count + 1,
        snaplike_id: data.id,
        snapdislikes_count: snapdislike_id ? snapdislikes_count - 1 : snapdislikes_count,
        snapdislike_id: null,
      });
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
      if (snaplike_id) {
        await axiosRes.delete(`/snaplikes/${snaplike_id}/`);
      }
      const { data } = await axiosRes.post("/snapdislikes/", { snap: id });
      updateSnaps(id, {
        snapdislikes_count: snapdislikes_count + 1,
        snapdislike_id: data.id,
        snaplikes_count: snaplike_id ? snaplikes_count - 1 : snaplikes_count,
        snaplike_id: null,
      });
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
          <span><i style={{ color: "gray" }} className={`${styles.iconButton} far fa-heart`} /></span>
        </OverlayTrigger>
      );
    }
    if (snaplike_id) {
      return (
        <span onClick={handleSnapUnlike}>
          <i style={{ color: "red" }} className={`${styles.iconButton} far fa-heart`}/>
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
        <OverlayTrigger placement="top" overlay={<Tooltip>You can't dislike your own snaps!</Tooltip>}>
          <span> <i className={`${styles.iconButton} far fa-thumbs-down`} style={{ color: "gray" }} /></span>
        </OverlayTrigger>
      );
    }
    if (snapdislike_id) {
      return (
        <span onClick={handleSnapUndislike}>
          <i className={`${styles.iconButton} far fa-thumbs-down`} style={{ color: "red" }} onClick={handleSnapUndislike} /> 
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
          <Button variant="primary">
            <i className="far fa-comments" /> {snapcomments_count}
          </Button>
        </Link>
      );
    } else {
      return (
        <OverlayTrigger placement="top" overlay={<Tooltip>Log in to view comments!</Tooltip>}>
          <Link to={`/snaps/${id}`} className={`${styles.commentButton} ${styles.disabled}`}>
            <Button variant="primary" disabled>
              <i className="far fa-comments" /> {snapcomments_count}
            </Button>
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

export default Snap;
