import React from "react";
import styles from "../styles/ProfilePic.module.css";
/*
This React component, ProfilePic, 
renders a profile picture along with 
optional text below it. It accepts 
props such as src for the image source, 
height for the image height, and text 
for the optional text. The image is styled 
using CSS modules with the class name ProfilePic 
from the imported styles.
 */

const ProfilePic = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.ProfilePic}
        src={src}
        height={height}
        width={height}
        alt="profile pic!"
      />
      {text}
    </span>
  );
};

export default ProfilePic;
