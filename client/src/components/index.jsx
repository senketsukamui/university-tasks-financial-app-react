import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import _ from "lodash";
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
import { getDateForChart, getDateForChartShort } from "../utils/";
const FinanceList = props => {
  const dataForMainChart = Object.values(props.categories)
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
  const sortedDataForChart = dataForMainChart.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const dataForPieChart = Object.keys(props.categories)
    .reduce(
      (acc, category) => [
        ...acc,
        ...props.categories[category].map(finance => ({ ...finance, category }))
      ],
      []
    )
    .reduce((acc, el) => {
      const { category, price } = el;
      const idx = acc.findIndex(a => a.category === category);
      if (idx !== -1) {
        acc[idx].price += parseInt(price);
      } else {
        acc.push({ category, price: parseInt(price) });
      }
      return acc;
    }, []);

  const COLORS = [
    "#003f5c",
    "#374c80",
    "#7a5195",
    "#bc5090",
    "#ef5675",
    "#ff764a",
    "#ffa600"
  ];
  const CustomTooltipLineChart = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`You spent ${
            payload[0].value
          } on ${getDateForChart(label)}`}</p>
        </div>
      );
    }

    return null;
  };
  const CustomTooltipPieChart = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`You spent ${payload[0].value} on ${payload[0].payload.payload.category}`}</p>
        </div>
      );
    }

    return null;
  };
  const renderPieChart = (
    <PieChart width={600} height={600}>
      <Pie
        data={dataForPieChart}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="price"
      >
        {dataForPieChart.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltipPieChart />} />
    </PieChart>
  );
  const renderLineChart = (
    <LineChart
      width={1000}
      height={300}
      data={sortedDataForChart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis
        dataKey="date"
        tickFormatter={(v, n, p) => getDateForChartShort(v)}
      />
      <YAxis />
      <Tooltip content={<CustomTooltipLineChart />} />
      <Line
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
  return (
    <div className="finance-list__wrapper">
      <div className="finance-list__chart-title">
        Your expenses for the last week
      </div>
      <div className="finance-list">{renderLineChart}</div>
      <div className="finance-list__pie-chart-wrapper">
        <div className="finance-list__pie-chart-title">
          Your greatest expenses
        </div>
        <div className="finance-list__pie-chart">{renderPieChart}</div>
      </div>
    </div>
  );
};

const mapStateToProps = store => ({
  categories: store.category.categories
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FinanceList);
