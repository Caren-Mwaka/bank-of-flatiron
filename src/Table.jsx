import React from 'react';

function Table (props) {
    //Table function takes props as input
    //props in this case is the transcations properties passed to the Table component from the App component.
    

  return (
    <div className="table-container">
      <table className="transaction-table"> 
      {/* table header */}
        <thead>  
          <tr>
            <th>Date</th>
          {/* added onClick to the "Description" and "Category" headers to trigger sorting when clicked. */}
            <th onClick={()=> props.sorting("description")}>Description</th>
            <th onClick={()=> props.sorting("category")}>Category</th>
            {/* sorting function passed  as a prop from the App component */}
            <th>Amount</th>
          </tr>
        </thead>
        {/* table body */}
        <tbody>
          {props.transactions.map((transaction, index) => (
            // The key property is an attribute that helps React identify which items have changed, are added, or are removed from the list of Transactions.
            <tr key={index}>
                {/* table data */}
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
              {/* dynamically generating components based on the data in the list of Transactions array. */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
// the map method is to iterate over the props.transactions array 
// the array contains the transaction data passed from the parent (App) component. 
// so for each transaction object in the array, we create a table row
export default Table;
