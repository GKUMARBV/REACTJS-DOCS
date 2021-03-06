import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

function App() {
  let data = [
    {
      date: "2021-04-23T18:25:43.511Z",
      description: "Car Insurence",
      amount: "$200",
    },
    {
      date: "2021-04-23T18:25:43.511Z",
      description: "Bike Loan",
      amount: "$200",
    },
    {
      date: "2021-04-23T18:25:43.511Z",
      description: "Home Rent",
      amount: "$200",
    },
  ];

  const [currentData, setData] = useState(data);

  const addExpenseHandler = (addExpense) => {
    let newExpense = [];
    newExpense.push(addExpense);
    setData((preExpenses) => [...preExpenses, ...newExpense]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      {currentData.map((val, index) => (
        <ExpenseItem key={index} data={val}></ExpenseItem>
      ))}
    </div>
  );
}

export default App;
