import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./navbar.module.css";

const Navigation = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    }  
  ];

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={`navigation ${styles["navbar"]}`}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#" className={styles["navbar-text-custom"]}>
            Orcinus Health Solutions
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            {links.map((link, index) => (
              <Nav.Item key={index}>
                <LinkContainer to={link.to}>
                  <Nav.Link className={styles["navbar-text-custom"]}>
                    {link.name}
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
