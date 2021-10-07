import React, { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    console.log("title change handler : " + JSON.stringify(event.target.value));
    setEnteredTitle(event.target.value);
  };

  return (
    <div>
      <form action="">
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}
