import React from "react";
import {
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  ResponsiveContainer
} from "recharts";
import { getDateForChart, getDateForChartShort } from "../../utils";
import { fetchCategories } from "../../redux/actions/category";
import { connect } from "react-redux";
import _ from "lodash";
import "./index.scss";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#b45cc3",
  "#9816f4",
  "#ff7844",
  "#c35c61"
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

const CustomTooltipPieChart = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`You spent ${payload[0].value} on ${payload[0].payload.payload.category}`}</p>
      </div>
    );
  }

  return null;
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const FinanceList = props => {
  React.useEffect(() => {
    props.fetchCategories();
  }, []);

  const dataForMainChart = React.useMemo(
    () =>
      Object.values(props.categories)
        .flat()
        .reduce((acc, el) => {
          const idx = acc.findIndex(a => a.date === el.date);
          if (idx !== -1) {
            acc[idx] = {
              ...acc[idx],
              price: acc[idx].price + parseInt(el.price)
            };
          } else {
            acc.push({ date: el.date, price: parseInt(el.price) });
          }
          return acc;
        }, []),
    [props.categories]
  );

  const sortedDataForChart = React.useMemo(
    () => dataForMainChart.sort((a, b) => new Date(a.date) - new Date(b.date)),
    [dataForMainChart]
  );

  const dataForPieChart = React.useMemo(
    () =>
      Object.keys(props.categories)
        .reduce(
          (acc, category) => [
            ...acc,
            ...props.categories[category].map(finance => ({
              ...finance,
              category
            }))
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
        }, []),
    [props.categories]
  );

  if (_.isEmpty(props.categories)) {
    return <div className="py-5 text-center">Loading..</div>;
  }

  const renderPieChart = (
    <PieChart>
      <Pie
        data={dataForPieChart}
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="price"
        label={renderCustomizedLabel}
      >
        {dataForPieChart.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomTooltipPieChart />} />
      <Legend
        align="right"
        verticalAlign="middle"
        layout="vertical"
        content={props => {
          const { payload } = props;
          return (
            <ul>
              {payload.map((entry, index) => (
                <li key={`item-${index}`}>{entry.payload.category}</li>
              ))}
            </ul>
          );
        }}
      />
    </PieChart>
  );

  const renderLineChart = (
    <LineChart
      data={sortedDataForChart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="5 5" />
      <XAxis dataKey="date" tickFormatter={v => getDateForChartShort(v)} />
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
    <div className="row px-4 py-4">
      <div className="col-12 col-xl-6">
        <div className="box">
          <div className="box__header">Expenses last week</div>
          <div className="box__body">
            <ResponsiveContainer width={"100%"} height={400}>
              {renderLineChart}
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="col-12 col-xl-6">
        <div className="box">
          <div className="box__header">Greatest expenses</div>
          <div className="box__body">
            <div>
              <ResponsiveContainer width={"100%"} height={400}>
                {renderPieChart}
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
  { fetchCategories }
)(FinanceList);
