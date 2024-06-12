import {Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import styles from "../styles/Navigation.module.css"

export default function Navigation () {
    return (
        <Navbar sticky="top" expand="lg" className={`me-auto ${styles.navbarCustom}`} >
            <Container>
                <Navbar.Brand href="/" className={styles.navbarCustomText}>
                    Orcinus
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarNav" />
                <Navbar.Collapse className="justify-content-end mr-3">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link className={`${styles.navbarCustomText}`} href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={`${styles.navbarCustomText}`} href="/about">About</Nav.Link>
                        </Nav.Item>
                        <NavDropdown
                            id="navigation-drop-down"
                            menuVariant="dark" 
                            title={<span className={`${styles.navbarCustomText}`}>Services</span>}>
                                <NavDropdown.Item className={`${styles.navbarCustomText}`} href="/executivecoaching">Executive Coaching</NavDropdown.Item>
                                <NavDropdown.Item className={`${styles.navbarCustomText}`} href="/consulting">Consulting</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link className={`${styles.navbarCustomText}`} href="/blog">Fun Stuff</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}