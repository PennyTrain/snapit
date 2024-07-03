import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/PageNotFound.module.css';
import logo from "../../assets/project/logo.png";


// The PageNotFound component displays a 404 error page with a logo, message, 
// and a button that redirects the user to the homepage.

const PageNotFound = () => {
  return (
    <Container className={styles.PageNotFoundContainer}>
      <img src={logo} alt="logo" className={styles.Logo} />
      <h1 className={styles.Title}>404 - Page Not Found</h1>
      <p className={styles.Message}>Oops! The page you are looking for does not exist.</p>
      <NavLink to="/">
        <Button className={styles.HomeButton}>Go Home</Button>
      </NavLink>
    </Container>
  );
};

export default PageNotFound;
