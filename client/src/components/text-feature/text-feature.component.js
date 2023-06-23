import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const TextFeature = (props) => {
  const { title, paragraphs } = props;

  return (
    <div className="mx-2 my-5 text-md-start text-center">
      <Container>
        <Row>
          <Col>
            <h2 className="text-md-start text-center">{title}</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-start">
                {paragraph}
              </p>
            ))}
            <Button variant="dark">Learn More</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextFeature;
