import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
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
    </div>
  );
};

export default ContactForm;
