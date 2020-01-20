import { toDate } from "date-fns";

export const getDateForChart = date => {
  if (!date) {
    console.warn("date is empty, ", date);
    return "";
  }

  if (typeof date === "string" || date instanceof String) {
    const newDate = date.split("-");
    const options = { month: "long", day: "numeric" };
    return toDate(
      new Date(newDate[0], newDate[1] - 1, newDate[2])
    ).toLocaleString("en-GB", options);
  }
  return date;
};

export const getDateForChartShort = date => {
  if (!date) {
    console.warn("date is empty, ", date);
    return "";
  }

  if (typeof date === "string" || date instanceof String) {
    const newDate = date.split("-");
    const options = { month: "numeric", day: "numeric" };
    return toDate(
      new Date(newDate[0], newDate[1] - 1, newDate[2])
    ).toLocaleString("en-GB", options);
  }
  return date;
};
