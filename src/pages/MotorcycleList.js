import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import "../Style/MotorcycleList.css";

import cb200 from "../assets/CB200/cb200.jpg";

import HornetImage from "../assets/Hornet/Hornet.png";
import HornetRed from "../assets/Hornet/HornetRed.png";
import HornetBlack from "../assets/Hornet/HornetBlack.png";
import PearlIgneousBlack from "../assets/Hornet/PEARL_IGNEOUS_BLACK.png";

import Livo_bike from "../assets/Livo/Livo_bike.png";

import Black_with_blue from "../assets/CD110/Black_with_blue.png";
import Black_with_green from "../assets/CD110/Black_with_green.png";
import Black_with_grey from "../assets/CD110/Black_with_grey.png";
import Black_with_red from "../assets/CD110/Black_with_red.png";

import UnicornImage from "../assets/Unicorn/Pearl_Igneous_Black_dev_one.png";
import MattAxisGrey from "../assets/Unicorn/Matt_Axis_Grey_Metallic_dev_one.png";
import ImperialRed from "../assets/Unicorn/Imperial_Red_Metallic_dev_one.png";
import PearlSirenBlue from "../assets/Unicorn/Pearl_Siren_Blue_dev_one.png";

import SPImage from "../assets/SP125/Pearl_Siren_Blue.png";
import Black_23 from "../assets/SP125/Black_23.png";
import Imperial_Red_Metallic from "../assets/SP125/Imperial_Red_Metallic.png";
import Matte_Axis_Gray_Metallic from "../assets/SP125/Matte_Axis_Gray_Metallic.png";
import Matte_Marvel_Blue_Metallic from "../assets/SP125/Matte_Marvel_Blue_Metallic.png";

import Black from "../assets/ShineBS6/Black.png";
import Decent_blue_metallic from "../assets/ShineBS6/Decent_blue_metallic.png";
import Geny_grey_metallic from "../assets/ShineBS6/Geny_grey_metallic.png";
import Matte_Axis_grey from "../assets/ShineBS6/Matte_Axis_grey.png";
import Rebel_Red_Metallic from "../assets/ShineBS6/Rebel_Red_Metallic.png";

import Pearl_Spartan_Red from "../assets/SP160/Pearl_Spartan_Red.png";
import Pearl_Igneous_Black from "../assets/SP160/Pearl_Igneous_Black.png";
import Pearl_Deep_Ground from "../assets/SP160/Pearl_Deep_Ground.png";
import Matter_Marvel_BlueMetallic from "../assets/SP160/Matter_Marvel_BlueMetallic.png";
import Matte_Dark_Blue_Metallic from "../assets/SP160/Matte_Dark_Blue_Metallic.png";
import Matte_Axis_Grey_Metallic from "../assets/SP160/Matte_Axis_Grey_Metallic.png";

import Black_With_Red from "../assets/Shine100/Black_With_Red.png";
import Black_With_Grey from "../assets/Shine100/Black_With_Grey.png";
import Black_With_Green from "../assets/Shine100/Black_With_Green.png";
import Black_With_Gold from "../assets/Shine100/Black_With_Gold.png";
import Black_With_Blue from "../assets/Shine100/Black_With_Blue.png";

const motorcycles = [
  {
    id: 1,
    tagImage: require("../assets/bikeslogo/CB-200x.png"),
    images: [{ src: cb200, color: "CB200" }],
  },
  {
    id: 2,
    tagImage: require("../assets/bikeslogo/Hornet2.0.png"),
    images: [
      { src: HornetImage, color: "Matte Axis Gray Metallic" },
      { src: HornetRed, color: "Matte Sangria Red Metallic" },
      { src: HornetBlack, color: "Matte Marvel Blue Metallic" },
      { src: PearlIgneousBlack, color: "Pearl Igneous Black" },
    ],
  },

  {
    id: 3,
    tagImage: require("../assets/bikeslogo/livo.png"),
    images: [{ src: Livo_bike, color: "Livo" }],
  },

  {
    id: 4,
    tagImage: require("../assets/bikeslogo/CD-110.png"),
    images: [
      { src: Black_with_blue, color: "Black with blue" },
      { src: Black_with_green, color: "Black with green" },
      { src: Black_with_grey, color: "Black with grey" },
      { src: Black_with_red, color: "Black with red" },
    ],
  },

  {
    id: 5,
    tagImage: require("../assets/bikeslogo/shineBS6.png"),
    images: [
      { src: Black, color: "Black" },
      { src: Decent_blue_metallic, color: "Decent blue metallic" },
      { src: Geny_grey_metallic, color: "Geny grey metallic" },
      { src: Matte_Axis_grey, color: "Matte Axis grey" },
      { src: Rebel_Red_Metallic, color: "Rebel Red Metallic" },
    ],
  },
  {
    id: 6,
    tagImage: require("../assets/bikeslogo/unicorn.png"),
    images: [
      { src: UnicornImage, color: "Black" },
      { src: MattAxisGrey, color: "Matte Axis Gray Metallic" },
      { src: ImperialRed, color: "Imperial Red Metallic" },
      { src: PearlSirenBlue, color: "Pearl Siren Blue" },
    ],
  },

  {
    id: 7,
    tagImage: require("../assets/bikeslogo/sp160.png"),
    images: [
      { src: Pearl_Spartan_Red, color: "Pearl Spartan Red" },
      { src: Pearl_Igneous_Black, color: "Pearl Igneous Black" },
      { src: Pearl_Deep_Ground, color: "Pearl Deep Ground" },
      { src: Matter_Marvel_BlueMetallic, color: "Matter Marvel BlueMetallic" },
      { src: Matte_Dark_Blue_Metallic, color: "Matte Dark Blue Metallic" },
      { src: Matte_Axis_Grey_Metallic, color: "Matte Axis Grey Metallic" },
    ],
  },

  {
    id: 8,
    tagImage: require("../assets/bikeslogo/SP_125BS6.png"),
    images: [
      { src: SPImage, color: "Pearl Siren Blue" },
      { src: Black_23, color: "Black" },
      { src: Imperial_Red_Metallic, color: "Imperial Red Metallic" },
      { src: Matte_Axis_Gray_Metallic, color: "Matte Axis Gray Metallic" },
      { src: Matte_Marvel_Blue_Metallic, color: "Matte Marvel Blue Metallic" },
    ],
  },

  {
    id: 9,
    tagImage: require("../assets/bikeslogo/shine100.png"),
    images: [
      { src: Black_With_Red, color: "Black With Red" },
      { src: Black_With_Grey, color: "Black With Grey" },
      { src: Black_With_Green, color: "Black With Green" },
      { src: Black_With_Gold, color: "Black With Gold" },
      { src: Black_With_Blue, color: "Black With Blue" },
    ],
  },
];

const MotorcycleList = () => {
  const [selectedBike, setSelectedBike] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const handleViewDetails = (bike) => {
    setSelectedBike(bike);
    setCurrentImage(bike.images[0]);
    setShowModal(true);
  };

  const handleImageChange = (image) => {
    setCurrentImage(image);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedBike(null);
    setCurrentImage(null);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 red-bold-heading">MOTORCYCLES</h2>

      <Row>
        {motorcycles.map((bike) => (
          <Col key={bike.id} md={4} className="mb-4">
            <Card className="bike-card h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={bike.images[0].src}
                className="bike-card-img"
              />

              <Card.Body className="p-0 position-relative">
                <div className="tag-img-wrapper">
                  <Card.Img
                    src={bike.tagImage}
                    alt="Bike Tag"
                    className="tag-img"
                    style={{ maxHeight: "80px", objectFit: "contain" }}
                  />
                </div>

                <div className="card-overlay">
                  <button
                    className="view-details-btn"
                    onClick={() => handleViewDetails(bike)}
                  >
                    View Details
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedBike?.name} - {currentImage?.color}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={currentImage?.src}
            alt={selectedBike?.name}
            className="img-fluid mb-3 main-bike-img"
          />

          <div className="d-flex flex-wrap justify-content-center">
            {selectedBike?.images.map((img, index) => (
              <div key={index} className="text-center m-2 thumbnail-wrapper">
                <img
                  src={img.src}
                  alt={`color-${index}`}
                  className={`img-thumbnail thumbnail-img ${
                    img.src === currentImage?.src ? "selected" : ""
                  }`}
                  onClick={() => handleImageChange(img)}
                />
                <small className="d-block mt-1 text-muted">{img.color}</small>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MotorcycleList;
