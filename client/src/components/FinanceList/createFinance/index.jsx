import React from "react";
import "./index.scss";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const createFinance = props => {
  const { isOpen, toggle } = props
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Finance create form</ModalHeader>
      <ModalBody>
        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default createFinance;
