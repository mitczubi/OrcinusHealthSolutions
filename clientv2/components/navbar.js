import {Nav, Navbar, Container } from "react-bootstrap";
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
                            <Nav.Link className={`${styles.navbarCustomText}`} href="/blog">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={`${styles.navbarCustomText}`} href="/news">News</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}