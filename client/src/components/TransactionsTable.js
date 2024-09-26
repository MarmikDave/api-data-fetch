import React, { useState, useEffect } from "react";
import axios from "axios";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/pagination?search=${search}&page=${page}`
        );
        setTransactions(response.data.products || []);
        setTotalPages(response.data.totalPages || 1);
      } catch (err) {
        setError("Error fetching transactions.");
        console.error(err);
      }
    };
    fetchTransactions();
  }, [search, page]);

  return (
    <div className="transactions-table">
      <h2 className="centered-heading">Transactions</h2>
      <input
        type="text"
        value={search}
        placeholder="Search transactions..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                {" "}
                <td>{transaction.id}</td>
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>${transaction.price}</td>
                <td>{transaction.category}</td>
                <td>{transaction.sold.toString()}</td>
                <td>
                  <img src={transaction.image} alt={transaction.title} />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No transactions found.</td>{" "}
            </tr>
          )}
        </tbody>
      </table>
      <div className="pagination">
        <span>Page: {page}</span>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        -
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
        <span>{totalPages}</span>
      </div>
    </div>
  );
};

export default TransactionsTable;
