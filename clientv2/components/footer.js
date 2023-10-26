import { Container, Row, Col, Nav } from "react-bootstrap";
import styles from "@/styles/Footer.module.css"

export default function Footer () {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`py-3 ${styles.footerCustom}`}>
            <Container>
                <Row>
                    <Nav className={`justify-content-center ${styles.borderBottom}`}>
                        <Nav.Item>
                            <Nav.Link className={styles.navCustomText} href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.navCustomText} href="/blog">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link className={styles.navCustomText} href="/news">News</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <p className="py-2 text-center">&copy; {currentYear} Orcinus Health Solutions</p>
                </Row>
            </Container>
        </footer>
    )
}