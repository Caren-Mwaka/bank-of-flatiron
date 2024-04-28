import React from 'react'

const Table = ({ transactions }) => {
    return (
        <div className="table-container"> {/* Add a container with padding */}
        <table className="transaction-table"> {/* Apply a class name for styling */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>{transaction.amount}</td>
                {/* Render more transaction details here */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  export default Table;