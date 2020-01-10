import React from "react";
import "./index.scss";
import { connect } from "react-redux";
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
import { postRequest } from "../../../api";
import { AddCategory } from "../../../redux/actions/category.js";
const CreateCategory = props => {
  const { isOpen, toggle } = props;
  const [formCategory, setFormCategory] = React.useState("");
  const onFormChange = event => {
    setFormCategory(event.target.value);
  };
  const onCreateClick = event => {
    postRequest(
      "http://localhost:8000/api/post_category",
      {
        title: formCategory
      },
      {
        "Content-Type": "application/json"
      }
    ).then(res => {
      props.AddCategory(formCategory);
    });
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create category form</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Category Name</Label>
            <Input
              placeholder="category example"
              onChange={onFormChange}
              required
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          disabled={!formCategory}
          onClick={onCreateClick}
        >
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = store => ({});

const mapDispatchToProps = {
  AddCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCategory);
