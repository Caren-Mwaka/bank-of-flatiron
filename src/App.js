import Form from "./Form";
import Table from "./Table";
import "./App.css";
import { useState } from "react";
import SearchBar from "./SearchBar";
import TransactionList from "./TransactionsList";

//App() is the parent functional component that represents the entire application
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  //handleSearch function updates the searchTerm state variable whenever the user types something into the search input field.
  //it is called whenever the input value changes (onChange event).
  const [transactions, setTransactions] = useState(TransactionList);
  //Initializing the transactions state variable with an array list
  //The transactions state variable will hold the list of transactions
  //The setTransactions function is used to update the transactions state.

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
  //The spread operator ... is used to create a copy of the existing transactions array.
  //The new transaction is added to the end of the copied array.

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  //filter method is used on the transactions array to create a new array called filteredTransactions
  //This array contains only the transactions whose description matches wholly or partially the search term entered by the user.
  //This allows the user to filter transactions based on their description.

  // Initializing sortBy state
  const [sortBy, setSortBy] = useState(null);
  //handleSort function takes one argument, criteria, which represents the sorting criteria (either 'category' or 'description').
  const handleSort = (criteria) => {
    if (sortBy === criteria) {
      // Togglimg between ascending and descending order if already sorted by the same criteria
      if (sortBy === "category") {
        // Sorting by category in descending order
        const sorted = [...transactions].sort((a, b) =>
          b.category.toLowerCase() < a.category.toLowerCase() ? -1 : 1
        );
        //Creating a new sorted array using the spread operator (...transactions).
        setTransactions(sorted);
      } else if (sortBy === "description") {
        // Sorting by description in descending order
        const sorted = [...transactions].sort((a, b) =>
          b.description.toLowerCase() < a.description.toLowerCase() ? -1 : 1
        );
        setTransactions(sorted);
      }
      setSortBy(null); // Resetting the sort order
    } else {
      // Setting sort order to the selected criteria
      setSortBy(criteria);
      if (criteria === "category") {
        // Sorting by category in ascending order
        const sorted = [...transactions].sort((a, b) =>
          a.category.toLowerCase() < b.category.toLowerCase() ? -1 : 1
        );
        setTransactions(sorted);
      } else if (criteria === "description") {
        // Sorting by description in ascending order
        const sorted = [...transactions].sort((a, b) =>
          a.description.toLowerCase() < b.description.toLowerCase() ? -1 : 1
        );
        setTransactions(sorted);
      }
    }
  };

  return (
    <div className="App">
      <h1 className="Bank">The Royal Bank of Flatiron</h1>
      {/* rendering the SearchBar component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      {/* rendering the Form component */}
      <Form AddTransaction={handleAddTransaction} />
      {/* handleAddTransaction function is passed as a prop to Form component using AddTransaction. */}
      <div className="TableContainer">
        <Table transactions={filteredTransactions} sorting={handleSort} />
      </div>
    </div>
  );
}

export default App;
