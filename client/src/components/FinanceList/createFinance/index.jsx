import React from "react";
import { connect } from "react-redux";
import { AddFinance } from "../../../redux/actions/category.js";
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
    category: "",
    date: ""
  });
  const categoriesList = Object.keys(props.categories);
  const options = categoriesList.map(p => {
    return <option>{p}</option>;
  });
  const onFormChange = field => event => {
    setFormState({ ...formState, [field]: event.target.value });
  };
  console.log(formState);
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Finance create form</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Finance Title</Label>
            <Input
              placeholder="title example"
              onChange={onFormChange("title")}
              required
            />
            <Label>Finance Price</Label>
            <Input
              placeholder="price example"
              onChange={onFormChange("price")}
              required
            />
            <Label for="exampleDate">Select date</Label>
            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={onFormChange("date")}
            />
            <Label>Select Category</Label>
            <Input type="select" onChange={onFormChange("category")}>
              {options}
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Create
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
const mapStateToProps = store => ({ categories: store.category.categories });

const mapDispatchToProps = { AddFinance };

export default connect(mapStateToProps, mapDispatchToProps)(CreateFinance);
