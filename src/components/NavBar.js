import React from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css"
import { NavLink } from "react-router-dom"

const NavBar = () => {
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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink exact to="/" activeClassName={styles.Active} className={styles.NavLink}>Home</NavLink>
              <NavLink to="/login" activeClassName={styles.Active} className={styles.NavLink}>Log in</NavLink>
              <NavLink to="/register" activeClassName={styles.Active} className={styles.NavLink}>Register</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
