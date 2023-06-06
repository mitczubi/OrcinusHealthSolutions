import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import styles from './three-square-feature.module.css';

const ThreeSquareFeature = () => {
    return (
        <div className={styles['feature-parent']}>
            <Container>
                <Row className="pt-5">
                    <Col className="text-center">
                        <h1 className={styles['feature-headline']}>Services</h1>
                        <p className='feature-blurb'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                            eget.
                        </p>
                    </Col>
                </Row>
                <Row className={styles['feature-row']}>
                    <Col md={4} className="text-center">
                        <div className={styles["image-card"]}>
                            <Image src="https://picsum.photos/id/20/370/" className={styles['feature-image']}/>
                            <h3 className={styles["feature-image-title"]}>Executive Coaching</h3>
                            <p className={styles["feature-image-blurb"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                                eget.
                            </p>
                            <Button variant="dark" className="feature-learn-more">
                                Learn More
                            </Button>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className={styles["image-card"]}>
                            <Image src="https://picsum.photos/id/24/370/" className={styles['feature-image']}/>
                            <h3 className={styles["feature-image-title"]}>Consulting</h3>
                            <p className={styles["feature-image-blurb"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                                eget.
                            </p>
                            <Button variant="dark" className="feature-learn-more">
                                Learn More
                            </Button>
                        </div>
                    </Col>
                    <Col md={4} className="text-center">
                        <div className={styles["image-card"]}>
                            <Image src="https://picsum.photos/id/42/370/" className={styles['feature-image']}/>
                            <h3 className={styles["feature-image-title"]}>Franchises</h3>
                            <p className={styles["feature-image-blurb"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                                eget.
                            </p>
                            <Button variant="dark" className="feature-learn-more">
                                Learn More
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}

export default ThreeSquareFeature;