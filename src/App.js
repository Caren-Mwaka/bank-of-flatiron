import Form from './Form';
import Table from './Table'
import './App.css';
import { useState } from 'react';
import SearchBar from './SearchBar';

//App() is the parent functional component that represents the entire application
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  //handleSearch function updates the searchTerm state variable whenever the user types something into the search input field.
  //it is called whenever the input value changes (onChange event).
  const [transactions, setTransactions] = useState([
  { id: 1, date: '2019-12-01', description: "Paycheck from Bob's Burgers", category: 'Income', amount: 1000 },
  { id: 2, date: '2019-12-01', description: 'South by Southwest Quinoa Bowl at Fresh & Co', category: 'Food', amount: -10.55 },
  { id: 3, date: '2019-12-02', description: 'South by Southwest Quinoa Bowl at Fresh & Co', category: 'Food', amount: -10.55 },
  { id: 4, date: '2019-12-04', description: 'Sunglasses, Urban Outfitters', category: 'Fashion', amount: -24.99 },
  { id: 5, date: '2019-12-06', description: 'Venmo, Alice Pays you for Burrito', category: 'Food', amount: 8.75},
  { id: 6, date: '2019-12-06', description: 'Chipotle', category: 'Food', amount: -17.59 },
  { id: 7, date: '2020-01-08', description: 'Movies', category: 'Entertainment', amount: 25 },
    
]);
//Initializing the transactions state variable with an array list
//The transactions state variable will hold the list of transactions
//The setTransactions function is used to update the transactions state.

  function handleAddTransaction(newTransaction) {
    setTransactions([...transactions, newTransaction]);
  }
//The spread operator ... is used to create a copy of the existing transactions array. 
//The new transaction is added to the end of the copied array.

const filteredTransactions = transactions.filter((transaction) =>
  transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
);
//filter method is used on the transactions array to create a new array called filteredTransactions
//This array contains only the transactions whose description matches wholly or partially the search term entered by the user. 
//This allows the user to filter transactions based on their description.
  return (
    <div className='App'>
      <h1 className='Bank'>The Royal Bank of Flatiron</h1>
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
