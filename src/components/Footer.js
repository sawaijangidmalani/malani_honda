import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col md={3}>
            <h6 className="fw-bold text-uppercase">Head Office</h6>
            <p className="mb-1 fw-bold">ANPURNA AASHRAM, MAIN ROAD</p>
            <p>
              Gudamalani, Barmer – 344031.
              <br />
              Rajasthan (India)
            </p>
            <p className="mb-1">customercare@malanihonda.com</p>
            <p>
              9414530317 / 9001739007
              <br />
              8000616131 / 7728900905
            </p>
            <div className="d-flex gap-2 mt-3">
              <FaFacebookF className="text-danger fs-4" />
              <FaTwitter className="text-danger fs-4" />
              <FaInstagram className="text-danger fs-4" />
              <FaYoutube className="text-danger fs-4" />
              <FaPinterest className="text-danger fs-4" />
            </div>
          </Col>

          <Col md={3}>
            <h6 className="fw-bold text-uppercase">Workshop Address</h6>
            <p>
              ANPURNA AASHRAM, MAIN ROAD,
              <br />
              Gudamalani, Barmer – 344031.
              <br />
              Rajasthan (India)
            </p>
            <p>
              9414530317 / 9001739007
              <br />
              8000616131 / 7728900905
            </p>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold text-uppercase">Branch Office</h6>
            <ul className="list-unstyled">
              <li>Ramji ka Gol Branch</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold text-uppercase">Our Services</h6>
            <ul className="list-unstyled">
              <li>Service Telephonic Booking</li>
              <li>Break Down Service</li>
              <li>Accident Claim Insurance</li>
              <li>Insurance Renewal</li>
              <li>Annual Maintenance Contract</li>
              <li>SMS Service Reminder</li>
              <li>Drop Facility</li>
            </ul>
          </Col>

          <Col md={2}>
            <h6 className="fw-bold text-uppercase">Online Services</h6>
            <ul className="list-unstyled">
              <li>Buy Two Wheeler Online</li>
              <li>Buy Insurance Online</li>
              <li>Online Service Booking</li>
              <li>Online EMI Calculator</li>
            </ul>
          </Col>
        </Row>

        <hr className="bg-light my-4" />

        <Row>
          <Col md={8}>
            <p className="mb-0 small">
              &copy; 2020 - 2025 Malani Honda – All Rights Reserved.{" "}
              <a href="#!" className="text-white text-decoration-underline">
                Terms & Conditions
              </a>
            </p>
          </Col>
          <Col md={4} className="text-md-end">
            <p className="mb-0 small">
              Design & Developed By{" "}
              <a href="#!" className="text-white text-decoration-underline">
                Sawai Jangid
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
