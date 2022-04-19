import React from "react";
import {Expense} from "./Components/Expense/Expense";
import { NewExpense } from "./Components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Car Insurance",
    date: new Date(2022, 2, 23),
    amount: 294.67,
  },
  { id: "2", title: "Groceries", date: new Date(2022, 2, 10), amount: 300 },
  {
    id: "3",
    title: "WiFi & Mobile Recharges",
    date: new Date(2022, 2, 8),
    amount: 100,
  },
  { id: "4", title: "Movie", date: new Date(2022, 3, 16), amount: 50 },
];


function App() {
  
  const[expenses, setExpenses] = React.useState(DUMMY_DATA);



  const AddExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense = {AddExpenseHandler}/> 
      <Expense item={expenses}/>
     </div>
  );
}

export default App;
