import React, { useState } from 'react';
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
    <NavLink className="" activeClassName="" to="/snaps/create">
      <i className="far fa-plus-square"></i>Snap
    </NavLink>
  );

  return (
    <div>
      <Navbar expanded={openBurger} className={styles.NavBar} bg="light" expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Brand href="#home">SNAP IT</Navbar.Brand>
          {createSnap}
          <Navbar.Toggle onClick={() => setOpenBurger(!openBurger)} ref={ref} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" activeClassName={styles.Active} className={styles.NavLink}>Home</NavLink>
              {currentUser ? (
                <>
                  <NavLink className={styles.NavLink} activeClassName="" to="/friended/feed">
                    Feed
                  </NavLink>
                  <NavLink className={styles.NavLink} activeClassName="" to="/liked/feed">
                    Liked
                  </NavLink>
                  <NavLink className={styles.NavLink} activeClassName="" to="/disliked/feed">
                    Disliked
                  </NavLink>
                  <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
                    <ProfilePic src={currentUser?.profile_image} text="Profile" height={40} />
                  </NavLink>
                  <LogoutButton />
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
