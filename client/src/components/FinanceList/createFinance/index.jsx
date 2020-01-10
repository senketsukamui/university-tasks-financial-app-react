import React from "react";
import { connect } from "react-redux";
import "./index.scss";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

const CreateFinance = props => {
  const { isOpen, toggle } = props;
  const [formState, setFormState] = React.useState({
    title: "",
    price: "",
    category: ""
  });
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Finance create form</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Finance Title</Label>
            <Input placeholder="title example" required />
            <Label>Finance Price</Label>
            <Input placeholder="price example" required />
            <Label>Select Category</Label>
            <Input type="select">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
        </Form>
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
const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CreateFinance);
