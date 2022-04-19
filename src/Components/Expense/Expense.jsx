import React from "react";
import { Card } from "../UI/Card";
import "./Expense.css";
import { ExpensesFilter } from "../NewExpense/ExpenseFilter";
import { ExpenseList } from "./ExpenseList";

function Expense(props) {
  const [filteredYear, setFilteredYear] = React.useState("2022");

  const filterChange = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={filteredYear}
            onChangeFilter={filterChange}
          />
        <ExpenseList items = {filteredExpenses}/> 
          
        </Card>
      </div>
    </>
  );
}

export { Expense };
