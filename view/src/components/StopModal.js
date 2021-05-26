import React from "react";
import { Button, Modal } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const StopModal = ({ show, handleClose }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <i class="fas fa-hand-paper"></i> Stop Right There!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This App is for demonstartion purposes only, and is only for users
          that are <strong>21 of age or older</strong> (as permitted by the
          state of California)
        </Modal.Body>
        <Modal.Footer>
          <Button
            as="a"
            href="https://youtu.be/lXEA8WqjHlY"
            variant="secondary"
          >
            I am not
          </Button>
          <LinkContainer to="/questions">
            <Button variant="primary">I am 21 or Older</Button>
          </LinkContainer>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StopModal;
