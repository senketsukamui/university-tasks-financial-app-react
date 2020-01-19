import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import _ from "lodash";
import { Label, Input, Form, FormGroup } from "reactstrap";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Sector,
  Cell,
  LineChart,
  Line
} from "recharts";
const Analytics = props => {
  const categoriesList = Object.keys(props.categories);
  const options = categoriesList.map((p, i) => {
    return <option key={i}>{p}</option>;
  });
  const [formState, setFormState] = React.useState("");
  const onSelectChange = event => {
    setFormState(event.target.value);
  };
  const getCategoryData = inputCategory => {
    return _.get(props.categories, inputCategory, []);
  };
  const createCategoryChart = inputCategory => {
    let chartData = getCategoryData(inputCategory);
    console.log(chartData);
    return (
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    );
  };
  return (
    <div className="analytics__wrapper">
      <div className="analytics__title">Categorical analytics</div>
      <div className="analytics__select-menu">
        <Form>
          <FormGroup>
            <Label>Select Category</Label>
            <Input
              type="select"
              onChange={onSelectChange}
              defaultValue=""
              className="analytics__select-menu__select"
            >
              <option selected disabled hidden>
                click here to choose category
              </option>
              {options}
            </Input>
          </FormGroup>
        </Form>
        <div className="analytics__category-chart">
          {createCategoryChart(formState)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  categories: store.category.categories
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Analytics);
