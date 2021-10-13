import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredTitle: event.target.value }); can't maintain previous state
    setUserInput((preState) => {
      return {
        ...preState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setUserInput((preState) => {
      return {
        ...preState,
        enteredAmount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setUserInput((preState) => {
      return {
        ...preState,
        enteredDate: event.target.value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      description: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: userInput.enteredDate,
    };
    props.onSaveForm(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input
              type="text"
              value={userInput.enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              value={userInput.enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              value={userInput.enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
