import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const saveExpenseDataHandler = (newExpense) => {
    props.onAddExpense(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveForm={saveExpenseDataHandler} />
    </div>
  );
}
