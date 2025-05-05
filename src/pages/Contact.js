// src/pages/Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="my-5">
      <h1 className="text-center">Contact Us</h1>
      <Row>
        <Col md={6}>
          <h3>Malani Honda</h3>
          <p>Address: Your Dealership Address</p>
          <p>Phone: +91 123 456 7890</p>
          <p>Email: info@malanihonda.com</p>
        </Col>
        <Col md={6}>
          <h3>Find Us On Google Maps</h3>
          <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300"></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
