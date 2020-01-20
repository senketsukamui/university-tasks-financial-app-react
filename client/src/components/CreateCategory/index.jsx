import React from "react";
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
import { createCategory } from "../../redux/actions/category.js";
import "./index.scss";

const CreateCategory = props => {
  const { isOpen, toggle } = props;
  const [formCategory, setFormCategory] = React.useState("");

  const onFormChange = event => {
    setFormCategory(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.createCategory(formCategory).then(() => {
      toggle();
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      contentClassName="alert alert-primary"
    >
      <ModalHeader toggle={toggle}>Create category</ModalHeader>
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label>Category Name</Label>
            <Input
              placeholder="category example"
              onChange={onFormChange}
              required
            />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" type="button" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" className="ml-2" type="submit">
            Create
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default connect(() => ({}), {
  createCategory
})(CreateCategory);
