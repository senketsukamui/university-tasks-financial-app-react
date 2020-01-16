import { format, toDate } from "date-fns";

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//       </div>
//     );
//   }

//   return null;
// };

export const getDateForChart = date => {
  const newDate = date.split("-");
  const options = { year: "numeric", month: "long", day: "numeric" };
  return toDate(
    new Date(newDate[0], newDate[1] - 1, newDate[2])
  ).toLocaleString("en-US", options);
};
