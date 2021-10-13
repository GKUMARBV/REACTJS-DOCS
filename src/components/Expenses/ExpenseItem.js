import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.data.description);

  const data = props.data;

  function changeTitle() {
    setTitle("Update Title");
  }

  return (
    <div className="expense-item">
      <div>
        <ExpenseDate date={data.date} />
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{data.amount}</div>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </div>
  );
}
