import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styles from "./navbar.module.css";

const Navigation = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Executive Coaching",
      to: "/coaching",
    },
    {
      name: "Consulting",
      to: "/consulting",
    },
    {
      name: "About",
      to: "/about",
    },
  ];

  return (
    <Navbar
      sticky="top"
      expand="lg"
      className={`navigation ${styles["navbar"]}`}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#" className="">
            Orcinus Health Solutions
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav" className="justify-content-end">
          <Nav>
            {links.map((link, index) => (
              <Nav.Item key={index}>
                <LinkContainer to={link.to}>
                  <Nav.Link>{link.name}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))}
          </Nav>
          <Nav className="ps-2">
            <Button>Contact</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
