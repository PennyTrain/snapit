import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useSetProfileDetail } from "../../contexts/ProfileDetailContext";
import styles from "../../styles/Profile.module.css";

const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props;
  const { id, friendship_id, image, owner } = profile;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const { handleFriend, handleUnfriend } = useSetProfileDetail();

  return (
    <div className={styles.profileContainer}>
      <div>
        <Link to={`/profiles/${id}`}>
          <img src={image} alt="avatar" className={styles.profileImage} style={{ width: imageSize, height: imageSize }} />
        </Link>
      </div>
      <div className={styles.profileOwner}>
        <p>{owner}</p>
      </div>
      <div className={styles.profileButton}>
        {/* {!mobile &&
          currentUser &&
          !is_owner &&
          (friendship_id ? (
            <Button onClick={() => handleUnfriend(profile)}>unfriend</Button>
          ) : (
            <Button onClick={() => handleFriend(profile)}>friend</Button>
          ))} */}
      </div>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    friendship_id: PropTypes.number,
    image: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
  }).isRequired,
  mobile: PropTypes.bool,
  imageSize: PropTypes.number,
};

export default Profile;
