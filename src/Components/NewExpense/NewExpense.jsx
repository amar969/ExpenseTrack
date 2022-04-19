import React from "react";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setEditing] = React.useState(false);

  const onSaveExpenseDataHandler = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  const newExpenseHandler = () => {
    setEditing(true);
  };

  return (
    <>
      <div className="new-expense">
        {!isEditing ? (
          <button type="submit" onClick={newExpenseHandler}>
            Add Expense
          </button>
        ) : (
          <ExpenseForm
            onSaveExpenseData={onSaveExpenseDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </>
  );
}

export { NewExpense };
