import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import "../Style/Navbar.css";
import hondaLogo from "../assets/Honda_Logo.svg";
// import hondaLogo from '../assets/logo.png'
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <header className="fixed-top">
      <div className="top-bar bg-light py-2">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="d-flex align-items-center">
              <img src={hondaLogo} alt="Honda Logo" className="honda-logo" />
            </Col>
            <Col
              md={4}
              className="d-flex align-items-center justify-content-center top-contact"
            >
              <span className="service-booking">SERVICE BOOKING</span> |
              <span className="email"> customercare@malanihonda.com</span> |
              <span className="sales"> SALES: 9414530317</span> |
              <span className="service"> SERVICE: 8000616131</span>
            </Col>
            <Col md={4} className="text-end dealership-name">
              Malani Honda
            </Col>
          </Row>
        </Container>
      </div>

      <Navbar bg="white" variant="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={NavLink} to="/" className="nav-link-custom">
                HOME
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/motorcycles"
                className="nav-link-custom"
              >
                MOTORCYCLE
              </Nav.Link>
              <Nav.Link as={NavLink} to="/scooter" className="nav-link-custom">
                SCOOTER
              </Nav.Link>
              <Nav.Link as={NavLink} to="/ev" className="nav-link-custom">
                EV
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/superbikes"
                className="nav-link-custom"
              >
                SUPER BIKES
              </Nav.Link>

              <Nav.Link as={NavLink} to="/services" className="nav-link-custom">
                SERVICES
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/branch-locator"
                className="nav-link-custom"
              >
                BRANCH LOCATOR
              </Nav.Link>

              <Nav.Link
                as={NavLink}
                to="/buy-now"
                className="nav-link-custom buy-now"
              >
                BUY NOW
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Navigation;
