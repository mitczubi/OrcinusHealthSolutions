import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <Container>
        <Row>
          <Col md={6} className={styles["footer-brand"]}>
            <div>
              <h3>Orcinus Health Solutions, LLC</h3>
              <p>Trademark &copy; {new Date().getFullYear()}</p>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles["footer-links"]}>
              <Row>
                <Col>
                  <h4 className={styles["footer-links-title"]}>Services</h4>
                  <ul className={styles["footer-links-list"]}>
                    <li>
                      <a href="/">Link 1</a>
                    </li>
                    <li>
                      <a href="/">Link 2</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <h4 className={styles["footer-links-title"]}>Resources</h4>
                  <ul className={styles["footer-links-list"]}>
                    <li>
                      <a href="/">Link 1</a>
                    </li>
                    <li>
                      <a href="/">Link 2</a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
