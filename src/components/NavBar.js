import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import ProfilePic from './ProfilePic';
import LogoutButton from './LogoutButton'; 
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {
  const currentUser = useCurrentUser();

  const createSnap = currentUser && (
    <NavLink className="" activeClassName="" to="/snaps/create">
      <i className="far fa-plus-square"></i>Snap
    </NavLink>
  );

  return (
    <div>
      <Navbar className={styles.NavBar} bg="light" expand="lg">
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              {/* add back src={logo} */}
              <img alt="logo" height="45" />
            </Navbar.Brand>
          </NavLink>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          {createSnap}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" activeClassName={styles.Active} className={styles.NavLink}>Home</NavLink>
              {currentUser ? (
                <>
                  <NavLink className="" activeClassName="" to="/newsfeed">
                    <i className="far fa-plus-square"></i>feed
                  </NavLink>
                  <NavLink className="" activeClassName="" to="/liked">
                    <i className="far fa-plus-square"></i>liked
                  </NavLink>
                  <LogoutButton />
                  <NavLink className={styles.NavLink} to={`/profiles/${currentUser?.profile_id}`}>
                    <ProfilePic src={currentUser?.profile_image} text="Profile" height={40} />
                  </NavLink>
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
