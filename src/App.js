import ExpenseItem from "./components/Expenses/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";

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

  return (
    <div className="App">
      <NewExpense />
      {data.map((val, index) => {
        return <ExpenseItem key={index} data={val}></ExpenseItem>;
      })}
    </div>
  );
}

export default App;
