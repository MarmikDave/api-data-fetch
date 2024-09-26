import React, { useState, useEffect } from "react";
import axios from "axios";
import TransactionsTable from "./components/TransactionsTable";
import Statistics from "./components/Statistics";
import BarChart from "./components/BarChart";

import "./App.css";

const App = () => {
  const [month, setMonth] = useState("3");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCombinedData = async (selectedMonth) => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `http://localhost:5000/combined?month=${selectedMonth}`
      );
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError("Error fetching data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCombinedData(month);
  }, [month]);

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
  };

  return (
    <div>
      <h1>Product Transactions</h1>

      <div className="month-selector">
        <label htmlFor="month">Select Month: </label>
        <select id="month" value={month} onChange={handleMonthChange}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"].map(
            (m) => (
              <option key={m} value={m}>
                {new Date(2000, m - 1).toLocaleString("default", {
                  month: "long",
                })}
              </option>
            )
          )}
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : data ? (
        <>
          <Statistics stats={data.statistics} selectedMonth={month} />
          <TransactionsTable />
          <BarChart data={data.barChartData} selectedMonth={month} />
        </>
      ) : null}
    </div>
  );
};

export default App;
