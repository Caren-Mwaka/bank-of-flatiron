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
  return (
    <div className="App">
      <h1 className="Bank">The Royal Bank of Flatiron</h1>
      {/* rendering the SearchBar component */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      {/* rendering the Form component */}
      <Form AddTransaction={handleAddTransaction} />
      {/* handleAddTransaction function is passed as a prop to Form component using AddTransaction. */}
      <div className="TableContainer">
        <Table transactions={filteredTransactions} />
      </div>
    </div>
  );
}

export default App;
