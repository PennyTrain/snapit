import React from "react";
import styles from "../styles/ProfilePic.module.css";

const ProfilePic = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.ProfilePic}
        src={src}
        height={height}
        width={height}
        alt="profile picture"
      />
      {text}
    </span>
  );
};

export default ProfilePic;