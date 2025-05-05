// src/components/BikeCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function BikeCard({ model, price, image }) {
  return (
    <Card style={{ width: '18rem' }} className="mb-4">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{model}</Card.Title>
        <Card.Text>Starting at ₹{price}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
}

export default BikeCard;
