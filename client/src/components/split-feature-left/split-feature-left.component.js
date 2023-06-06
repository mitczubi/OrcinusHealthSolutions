import React from 'react';
import { Container, Row, Col, Image} from 'react-bootstrap';

const SplitFeatureLeft = (props) => {
    const { imageUrl, title, text } = props;

    return (
        <div className="m-2">
            <Container>
                <Row>
                    <Col md={6} className="text-center">
                        <Image src={imageUrl} alt="About Us" fluid/>
                    </Col>
                    <Col md={6} className="d-flex">
                        <div className='m-auto'>
                            <h2 className='text-md-start text-center'>{title}</h2>
                            <p className='text-start'>
                                {text}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SplitFeatureLeft