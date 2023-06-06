import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from './testimonial-slideshow.module.css';

const TestimonialSlidesow = () => {
    const images = [
        {
            src: "https://picsum.photos/id/123/300",
            alt: "Testimonial 1",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer malesuada nunc vel. At tempor commodo ullamcorper a."
        },
        {
            src: "https://picsum.photos/id/124/300",
            alt: "Testimonial 2",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Scelerisque felis imperdiet proin fermentum leo vel orci porta."
        },
        {
            src: "https://picsum.photos/id/125/300",
            alt: "Testimonial 3",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum lacinia quis vel eros. Sed vulputate odio ut enim blandit volutpat."
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    }

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className={`m-2 ${styles['slideshow-container']}`}>
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} sm={8} className="text-center">
                        <div className="mx-auto my-4 image-container">
                            <FiChevronLeft className="arrow-icon" size={25} onClick={handlePrev} />
                            <img src={images[activeIndex].src}
                                 alt={images[activeIndex].alt}
                                 className="rounded-circle"
                             />
                            <FiChevronRight className="arrow-icon" size={25} onClick={handleNext} />
                             <p className="image-text pt-3 px-5">
                                {images[activeIndex].text}
                             </p>
                        </div>
                    </Col>
                </Row>
                {/* <Row className="justify-content-center">
                    <Col xs="auto">
                    </Col>
                    <Col xs="auto">
                    </Col>
                </Row> */}
            </Container>
        </div>
    )
}

export default TestimonialSlidesow;