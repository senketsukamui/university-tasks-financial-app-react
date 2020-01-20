import React from "react";
import { connect } from "react-redux";
import { createFinance } from "../../redux/actions/category";
import "./index.scss";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import _ from "lodash";

const CreateFinance = props => {
  const { isOpen, toggle } = props;
  const [formState, setFormState] = React.useState({
    title: "",
    price: "",
    category: "",
    date: ""
  });
  const [categoriesList, setCategoriesList] = React.useState([]);

  React.useEffect(() => {
    const c = Object.keys(props.categories);
    setCategoriesList(c);
    setFormState({
      ...formState,
      category: c.length ? c[0] : ""
    });
  }, [props.categories]);

  const handleSubmit = event => {
    event.preventDefault();
    props.createFinance(formState).then(() => {
      toggle();
    });
  };

  const onFormChange = field => event => {
    setFormState({ ...formState, [field]: event.target.value });
  };

  const _renderedOptions = React.useMemo(
    () => categoriesList.map((p, i) => <option key={i}>{p}</option>),
    [categoriesList]
  );

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      contentClassName="alert alert-primary"
    >
      <ModalHeader toggle={toggle}>Create new finance</ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup>
            <Label>Finance Title</Label>
            <Input
              placeholder="title example"
              onChange={onFormChange("title")}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Finance Price</Label>

            <Input
              placeholder="price example"
              onChange={onFormChange("price")}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleDate">Select date</Label>

            <Input
              type="date"
              name="date"
              id="exampleDate"
              placeholder="date placeholder"
              onChange={onFormChange("date")}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Select Category</Label>

            <Input
              type="select"
              onChange={onFormChange("category")}
              defaultValue={categoriesList.length ? categoriesList[0] : ""}
            >
              {_renderedOptions}
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button type="button" color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" className="ml-2" type="submit">
            Create
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

export default connect(store => ({ categories: store.category.categories }), {
  createFinance
})(CreateFinance);
