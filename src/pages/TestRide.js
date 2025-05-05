// src/pages/TestRide.js
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function TestRide() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    model: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Test Ride Booked for ${form.model} on ${form.date}`);
  };

  return (
    <Container className="my-5">
      <h1 className="text-center">Book a Test Ride</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control type="text" name="model" placeholder="Enter Bike Model" value={form.model} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="date">
          <Form.Label>Test Ride Date</Form.Label>
          <Form.Control type="date" name="date" value={form.date} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default TestRide;
