import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSetCurrentUser } from '../contexts/CurrentUserContext';
import styles from "../styles/LogoutButton.module.css"
/* 
The LogoutButton component in React triggers
a logout process when clicked, sending a POST 
request to the "dj-rest-auth/logout/" endpoint 
using axios. On successful logout, it updates 
the current user context to null and redirects 
the user to the login page; any errors encountered 
are logged to the console.
*/

const LogoutButton = () => {
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button className={styles.logoutBtn} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
