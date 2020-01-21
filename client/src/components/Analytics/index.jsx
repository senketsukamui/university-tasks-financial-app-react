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
  LineChart,
  Line,
  ResponsiveContainer
} from "recharts";
const Analytics = props => {
  const [formState, setFormState] = React.useState("");

  const categoriesList = React.useMemo(() => Object.keys(props.categories), [
    props.categories
  ]);

  const options = React.useMemo(
    () =>
      categoriesList.map((p, i) => {
        return <option key={i}>{p}</option>;
      }),
    [categoriesList]
  );

  const onSelectChange = event => {
    setFormState(event.target.value);
  };

  const getCategoryData = inputCategory =>
    _.get(props.categories, inputCategory, []);

  const createCategoryChart = inputCategory => {
    const chartData = getCategoryData(inputCategory);

    return (
      <LineChart
        width={500}
        height={500}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="5 5" />
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
      <div className="box__title">
        <div className="analytics__title">Categorical analytics</div>
      </div>
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
                Choose category
              </option>
              {options}
            </Input>
          </FormGroup>
        </Form>
        <div className="box">
          <div className="box__body">
            <div className="analytics__category-chart">
              <ResponsiveContainer width={"100%"} height={400}>
                {createCategoryChart(formState)}
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  store => ({
    categories: store.category.categories
  }),
  null
)(Analytics);
