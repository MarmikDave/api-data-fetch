import React from "react";
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

const Statistics = ({ stats, selectedMonth }) => {
  const monthName = monthNames[selectedMonth - 1];

  return (
    <div className="statistics">
      <h2>Statistics:- {monthName}</h2>
      <div className="statistics-content">
        <p>Total Sale Amount: ${stats.totalSaleAmount}</p>
        <p>Total Sold Items: {stats.totalSoldItems}</p>
        <p>Total Unsold Items: {stats.totalUnSoldItems}</p>
      </div>
    </div>
  );
};

export default Statistics;
