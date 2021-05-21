import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Row, Image } from "react-bootstrap";
// import styled from "styled-components";
import potlogo from "../assets/potlogo.gif";

const LandingScreen = () => {
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
          <LinkContainer to="/questions">
            <Button size="lg" as="button" className="btn-success">
              Lookup Strain
            </Button>
          </LinkContainer>
        </div>
      </Row>
    </>
  );
};

export default LandingScreen;
