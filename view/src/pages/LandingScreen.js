import React, { useState } from "react";
import { Button, Row, Image } from "react-bootstrap";
import StopModal from "../components/StopModal";
import potlogo from "../assets/potlogo.gif";

const LandingScreen = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <>
      <Row className="text-center">
        <h1>What's My Strain???&trade;</h1>
        <Image src={potlogo} height="360" width="150" />
        <h3 className="mt-2 mb-5">
          Find out what cannabis strain fits right for you through simple
          questions
        </h3>
        <div className="mt-5">
          <Button variant="primary" onClick={handleShow}>
            Launch static backdrop modal
          </Button>
        </div>
      </Row>
      <StopModal show={show} handleClose={handleClose} />
    </>
  );
};

export default LandingScreen;
