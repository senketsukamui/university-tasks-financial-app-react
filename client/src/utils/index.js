import { format, toDate } from "date-fns";

export const getDateForChart = date => {
  if (date) {
    const newDate = date.split("-");
    const options = { year: "numeric", month: "long", day: "numeric" };
    return toDate(
      new Date(newDate[0], newDate[1] - 1, newDate[2])
    ).toLocaleString("en-US", options);
  } else {
    console.warn("date is empty, ", date);
    return "";
  }
};

export const getDateForChartShort = date => {
  if (date) {
    const newDate = date.split("-");
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return toDate(
      new Date(newDate[0], newDate[1] - 1, newDate[2])
    ).toLocaleString("en-US", options);
  } else {
    console.warn("date is empty, ", date);
    return "";
  }
};
