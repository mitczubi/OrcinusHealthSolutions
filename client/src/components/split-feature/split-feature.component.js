import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from './split-feature.module.css'

const ProfileSplitFeature = () => {
    return (
        <Container>
            <Row className={styles['profile-row']}>
                <Col md={6} className="text-center">
                    <div className={styles["profile-card"]}>
                        <Image
                            src="https://picsum.photos/id/237/350/"
                            alt="Kristen Woods"
                            roundedCircle
                            className={styles["profile-picture"]}
                        />
                        <p className={styles["profile-blurb"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                            eget.
                        </p>
                    </div>
                </Col>
                <Col md={6} className="text-center">
                    <div className={styles["profile-card"]}>
                        <Image
                            src="https://picsum.photos/id/433/350"
                            alt="Paul Woods"
                            roundedCircle
                            className={styles["profile-picture"]}
                        />
                        <p className={styles["profile-blurb"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                            eget.
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProfileSplitFeature;