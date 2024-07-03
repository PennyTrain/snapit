import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from '../../styles/PageNotFound.module.css';
import logo from "../../assets/project/logo.png";

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
