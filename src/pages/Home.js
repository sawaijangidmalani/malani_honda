import React, { useState } from "react";
import { Container, Row, Col, Carousel, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Style/Home.css";
import InsuranceForm from "./Insurance.js";

// Banner images
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";

// Service icons
import BuyIcon from "../assets/Services_Icons/buy-button.png";
import ServiceIcon from "../assets/Services_Icons/Service.png";
import AccidentClaim from "../assets/Services_Icons/AccidentClaim.png";
import Insurance from "../assets/Services_Icons/insurance.png";
import BarackDown from "../assets/Services_Icons/tow-truck.png";
import AMC from "../assets/Services_Icons/Amc.png";
import SMS from "../assets/Services_Icons/sms.png";
import Drop from "../assets/Services_Icons/Drop.png";

function Home() {
  const [showInsuranceModal, setShowInsuranceModal] = useState(false);

  const handleShowInsuranceModal = () => setShowInsuranceModal(true);
  const handleCloseInsuranceModal = () => setShowInsuranceModal(false);

  const services = [
    {
      icon: BuyIcon,
      title: "Buy Two Wheeler Online",
      desc: "Buying a two wheeler is now child's play",
      btn: "BUY NOW",
    },
    {
      icon: ServiceIcon,
      title: "Vehicle Service Booking",
      desc: "Book your vehicle for free/paid service between 8 A.M. to 6 P.M.",
      btn: "BOOK YOUR VEHICLE SERVICE",
    },
    {
      icon: AccidentClaim,
      title: "Accident Claim Insurance",
      desc: "Legal claim procedure for damaged vehicle insurance.",
      btn: "CONTACT OUR BRANCH",
    },
    {
      icon: Insurance,
      title: "Insurance Renewal",
      desc: "We facilitate Insurance Renewal at our end.",
      btn: "SEND DETAILS",
    },
    {
      icon: BarackDown,
      title: "Accidents & Breakdown",
      desc: (
        <>
          If your two wheeler gets stucked any where in GUDAMALANI plz. call on
          <br />
          9001739007 & 8000616131 - through our breakdown service, we won’t let
          you get stucked. *T&C Apply
        </>
      ),
      btn: "CONTACT OUR BRANCH",
    },
    {
      icon: AMC,
      title: "Annual Maintenance Contract",
      desc: "Live a peaceful life. Sign a Annual Maintenance Contract and get the regular services done.",
      btn: "ASK OUR EXECUTIVE",
    },
    {
      icon: SMS,
      title: "SMS Service Reminder",
      desc: "We will inform you about your vehicle free service through SMS on your mobile.",
      btn: "ASK OUR EXECUTIVE",
    },
    {
      icon: Drop,
      title: "Drop Facility",
      desc: "When you come to our service station for the servicing of your two wheelers, we provide the facility of dropping you upto 5 KM from our service station.",
      btn: "ASK AT TIME OF BOOKING",
    },
  ];

  return (
    <div>
      <Carousel fade interval={3000}>
        {[banner1, banner2, banner3, banner4, banner5].map((banner, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100 banner-img"
              src={banner}
              alt={`Slide ${idx + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="button-section text-center">
        <Container>
          <h2 className="welcome-heading">Welcome to Malani Honda</h2>
          <p className="welcome-subheading">
            Honda & Motorcycle & Scooter India Private Limited (HMSI) Dealership
            for Sales, Service & Spaces
          </p>
          <Row className="justify-content-center">
            <Col md={3} sm={6} className="mb-4">
              <Link to="/service-booking" className="service-link">
                <img
                  src={require("../assets/booking.png")}
                  alt="Service Booking"
                  className="service-icon mb-3"
                />
                <h5>Online Service Booking</h5>
              </Link>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Link to="/emi" className="service-link">
                <img
                  src={require("../assets/payment.png")}
                  alt="EMI Calculator"
                  className="service-icon mb-3"
                />
                <h5>Online EMI Calculator</h5>
              </Link>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <Link to="/test-ride" className="service-link">
                <img
                  src={require("../assets/motorbike.png")}
                  alt="Test Ride"
                  className="service-icon mb-3"
                />
                <h5>Book Test Ride</h5>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="container my-5 text-center">
        <h2 className="section-title">Services by Malani Honda</h2>
        <p className="section-subtitle">
          All solutions of your needs under one roof
        </p>
        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-3" key={idx}>
              <div>
                <img
                  src={service.icon}
                  alt={service.title}
                  className="service-icon mb-2"
                />
              </div>
              <h5 className="text-danger service-title">{service.title}</h5>
              <p>{service.desc}</p>
              <button
                className="btn btn-outline-dark"
                onClick={
                  service.title === "Insurance Renewal"
                    ? handleShowInsuranceModal
                    : null
                }
              >
                {service.btn}
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={showInsuranceModal}
        onHide={handleCloseInsuranceModal}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Insurance Renewal Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InsuranceForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseInsuranceModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
