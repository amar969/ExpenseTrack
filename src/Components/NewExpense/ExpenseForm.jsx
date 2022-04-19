import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(props){

    const [enteredTitle, setEnteredTitle] = React.useState("");
    const [enteredAmount, setEnteredAmount] = React.useState("");
    const [enteredDate, setDate] = React.useState("");

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
    }       

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);    
    }

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setDate("");
    }   


    return(
        <>
            <form onSubmit={submitFormHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" value={enteredDate} min="2022-01-01" max="2024-12-31" onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions"> 
                <button type="button" onClick={props.onCancel}> Cancel</button>
                <button type="submit" > Add Expense</button>
                
                </div>
            </form>
        </>
    )
}

export {ExpenseForm}