import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './hero.module.css'

const Hero = () => {
    return (
        <div className={styles['hero']}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className={styles['hero-title']}>Orcinus Health Solutions</h1>
                        <p className={styles["hero-blurb"]}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                            dapibus tristique lacinia.
                        </p>    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;