import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BarChartComponent = ({ data, selectedMonth }) => {
  const monthName = monthNames[selectedMonth - 1];
  const formattedData = data.map((item) => ({
    priceRange: item._id,
    count: item.count,
  }));

  return (
    <div className="bar-chart">
      <h2>Bar Chart Stats - {monthName}</h2>
      <BarChart width={600} height={300} data={formattedData}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />{" "}
        <XAxis
          dataKey="priceRange"
          tick={{ angle: -30, textAnchor: "end", fontSize: 12 }}
        />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="count"
          fill="#00bcd4"
          radius={[5, 5, 0, 0]}
          barSize={30}
        />{" "}
      </BarChart>
    </div>
  );
};

export default BarChartComponent;
