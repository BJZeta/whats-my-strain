import React from "react";
import { Col, Row } from "react-bootstrap";

const QuestionScreen = () => {
  return (
    <>
      <Row>
        <Col>
          <h2>First of</h2>
          <h4>What's your level?</h4>
          <p className="lead">
            Select below how much of a cannabis consumer you'd say you are...
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="card middle">
            <div class="front">
              <img src="sample.jpg" alt="" />
            </div>
            <div class="back">
              <div class="back-content middle">
                <h2>WebDevTrick</h2>
                <span>Designer &amp; Developers Blog</span>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card middle">
            <div class="front">
              <img src="sample.jpg" alt="" />
            </div>
            <div class="back">
              <div class="back-content middle">
                <h2>WebDevTrick</h2>
                <span>Designer &amp; Developers Blog</span>
              </div>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card middle">
            <div class="front">
              <img src="sample.jpg" alt="" />
            </div>
            <div class="back">
              <div class="back-content middle">
                <h2>WebDevTrick</h2>
                <span>Designer &amp; Developers Blog</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default QuestionScreen;
