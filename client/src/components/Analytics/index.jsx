import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import _ from "lodash";
import { Label, Input } from "reactstrap";
const Analytics = props => {
  const categoriesList = Object.keys(props.categories);
  const options = categoriesList.map((p, i) => {
    return <option key={i}>{p}</option>;
  });
  const [formState, setFormState] = React.useState("");
  const onSelectChange = event => {
    setFormState(event.target.value);
  };
  console.log("form", formState);
  return (
    <div className="analytics__wrapper">
      <div className="analytics__title">Categorical analytics</div>
      <div className="analytics__select-menu">
        <Label>Select Category</Label>
        <Input
          type="select"
          onChange={onSelectChange}
          value=""
          className="analytics__select-menu__select"
        >
          {options}
        </Input>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  categories: store.category.categories
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
