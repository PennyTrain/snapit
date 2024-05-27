import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import ProfilePic from './ProfilePic';
import LogoutButton from './LogoutButton'; 
import { useCurrentUser } from '../contexts/CurrentUserContext';
import useCloseBurgerToggle from '../hooks/useCloseBurgerToggle';

const NavBar = () => {
  const currentUser = useCurrentUser();

  const { openBurger, setOpenBurger, ref } = useCloseBurgerToggle();

  const createSnap = currentUser && (
    <NavLink className={styles.NavLink} to="/snaps/create">
      <i className="far fa-plus-square"></i> Snap
    </NavLink>
  );

  return (
    <div>
      <Navbar expanded={openBurger} className={styles.NavBar} expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand className={styles.NavbarBrand}>
              <img alt="logo" src="/path/to/logo.png" height="45" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Brand className={styles.NavbarBrand}>
          <span style={{ color: '#fff' }}>SNAP IT</span>
          </Navbar.Brand>
          {createSnap}
          <Navbar.Toggle 
          onClick={() => setOpenBurger(!openBurger)} 
          ref={ref} 
          aria-controls="basic-navbar-nav"
          style={{ color: '#fff' }}
           />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" activeClassName={styles.Active} className={styles.NavLink}>Home</NavLink>
              {currentUser ? (
                <>
                  <NavLink className={styles.NavLink} to="/friended/feed">Feed</NavLink>
                  <NavLink className={styles.NavLink} to="/liked/feed">Liked</NavLink>
                  <NavLink className={styles.NavLink} to="/disliked/feed">Disliked</NavLink>
                  <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
                    <ProfilePic src={currentUser?.profile_image} text="Profile" height={40} />
                  </NavLink>
                  <LogoutButton className={styles.LogoutButton} />
                </>
              ) : (
                <>
                  <NavLink to="/login" activeClassName={styles.Active} className={styles.NavLink}>Log in</NavLink>
                  <NavLink to="/register" activeClassName={styles.Active} className={styles.NavLink}>Register</NavLink>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
