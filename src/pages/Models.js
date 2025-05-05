// src/pages/Models.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BikeCard from '../components/BikeCard';

function Models() {
  return (
    <Container>
      <h1 className="text-center my-4">Our Models</h1>
      <Row>
        <Col md={4}>
          <BikeCard model="Honda CB Shine" price="80,000" image="/images/cb-shine.jpg" />
        </Col>
        <Col md={4}>
          <BikeCard model="Honda Activa 6G" price="70,000" image="/images/activa.jpg" />
        </Col>
        <Col md={4}>
          <BikeCard model="Honda SP 125" price="90,000" image="/images/sp-125.jpg" />
        </Col>
      </Row>
    </Container>
  );
}

export default Models;
