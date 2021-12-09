import React from "react"
import "./NewExpenses.css"

import ExpenseForm from "./ExpenseForm"

const NewExpenses = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onCreateData(expenseData)

    }

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseDate={saveExpenseDataHandler}/>
    </div>
}

export default NewExpenses