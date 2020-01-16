import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import _ from "lodash";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";
import { getDateForChart } from "../utils/";
const FinanceList = props => {
  const dataForMainBarChart = Object.values(props.categories)
    .flat()
    .reduce((acc, el) => {
      const idx = acc.findIndex(a => a.date === el.date);
      if (idx !== -1) {
        acc[idx] = { ...acc[idx], price: acc[idx].price + parseInt(el.price) };
      } else {
        acc.push({ date: el.date, price: parseInt(el.price) });
      }
      return acc;
    }, []);

  console.log("new", dataForMainBarChart);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${getDateForChart(label)} : ${
            payload[0].value
          }`}</p>
        </div>
      );
    }

    return null;
  };
  const renderBarChart = (
    <BarChart
      width={800}
      height={300}
      data={dataForMainBarChart.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )}
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
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey="price" fill="#8884d8" />
    </BarChart>
  );

  return (
    <div className="finance-list__wrapper">
      <div className="finance-list">{renderBarChart}</div>
    </div>
  );
};

const mapStateToProps = store => ({
  categories: store.category.categories
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FinanceList);
