import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSetCurrentUser } from '../contexts/CurrentUserContext';

const LogoutButton = () => {
  const setCurrentUser = useSetCurrentUser();
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      // Set currentUser to null after successful logout
      setCurrentUser(null);
      // Redirect to the login page after successful logout
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <button onClick={handleLogOut}>Logout</button>
  );
};

export default LogoutButton;
