import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEntertedTitle] = useState("");
  const [enteredAmount, setEntertedAmount] = useState("");
  const [enteredDate, setEntertedDate] = useState("");

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEntertedTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEntertedAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEntertedDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    console.log(expenseData);
    setEntertedTitle("");
    setEntertedAmount("");
    setEntertedDate("");

    addNewExpenseHandler();
  };

  const [addFlag, setAddFlag] = useState(false);

  const addNewExpenseHandler = () => {
    setAddFlag((prevFlag) => {
      return !prevFlag;
    });
  };

  if (addFlag === false) {
    return (
      <div>
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={addNewExpenseHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
