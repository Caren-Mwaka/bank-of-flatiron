import React from "react";
import { useState } from "react";
import SubmitButton from "./Submit";

const Form = ({ AddTransaction }) => {
  const [date, setDate] = useState("");
  // Initialize date state with current date

  const [description, setDescription] = useState("");
  //created a state variable called description to track the description and hold the current value of the description.
  // a function called setDescription to change/update the state and set the initial value to an empty string.

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = { date, description, category, amount };
    //creating a new transaction object using the current values of the date, description, category and amount state variables.
    AddTransaction(newTransaction);
    //  Calls the AddTransaction function, which is passed down to the Form component as a prop.
    //  It passes the newTransaction object as an argument to this function
    //  This adds the new transaction to the list of transactions in the parent component.

    // resetting the form state after the transaction has been added
    setDate("");
    setDescription("");
    setCategory("");
    setAmount("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          // allows a change by triggering the setDescription function and updates it with whatever the user is trying to change it to.
          // the update occurs by accessing the event object, through the target which is the input element and the value which the user types into it.
        />
        {/* value is equal to a dynamic value which is the description state*/}
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div>
          {/* Render the SubmitButton component and pass handleSubmit as onClick prop */}
          <SubmitButton onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
};

export default Form;
