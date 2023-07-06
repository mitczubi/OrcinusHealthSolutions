import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import baseUrl from "../../api/axios.js";
import { appointmentRoute } from "../../api/routes.js";
import { trackPromise } from "react-promise-tracker";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const [submissionError, setSubmissionError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const appointmentData = {
      name: formData.name,
      email: formData.email,
      start: formData.start,
      description: formData.description,
    };
    trackPromise(
      axios
        .post(baseUrl + appointmentRoute, appointmentData)
        .then((response) => {
          setSubmitted(true);
          setSubmissionError(false);
          console.log(response.status, response.data);
        })
        .catch((response) => {
          console.log(response);
          setSubmitted(true);
          setSubmissionError(true);
        })
    );
  };

  const getDates = (startDate, endDate) => {
    let currentDate = new Date(startDate);
    const dates = [];
    while (currentDate <= endDate) {
      if (
        currentDate.getDay() === 2 ||
        currentDate.getDay() === 3 ||
        currentDate.getDay() === 4
      ) {
        currentDate.setHours(11, 0, 0);
        for (let step = 0; step < 3; step++) {
          currentDate.setHours(currentDate.getHours() + 1);
          let appointmentDate = new Date(currentDate);
          dates.push(appointmentDate);
        }
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);
  const endDate = new Date(startDate.getTime() + 7 * 24 * 60 * 60 * 1000);

  let dates = getDates(startDate, endDate);

  return (
    <div>
      {!submitted ? (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="my-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Select Appintment Time</Form.Label>
              <Form.Control
                as="select"
                id="start"
                name="start"
                value={formData.start}
                onChange={handleChange}
              >
                <option>Date and Time</option>
                {dates.map((value) => (
                  <option key={value} value={value}>
                    {new Date(value).toLocaleString("en-US", {
                      timeZone: "America/Chicago",
                    })}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Desription</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="description"
                name="description"
                placeholder="Please provide a brief description of yourself and what you are looking for in coaching."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Container>
      ) : (
        <div className="mx-2 my-5">
          <Container>
            <Row>
              <Col>
                {submissionError ? (
                  <p>
                    Sorry, something went wrong with your submission. We've
                    notified the administrator. Pleae try again later.
                  </p>
                ) : (
                  <p>
                    Thank you for submitting an appointment request. We'll be
                    back to you about next steps shortly!
                  </p>
                )}
                <p>
                  Back to:&nbsp;
                  <LinkContainer to="/">
                    <a href="/">Homepage.</a>
                  </LinkContainer>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
