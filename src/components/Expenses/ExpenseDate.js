import React from 'react';
import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleString('es-US', { month: 'long' })
    const day = props.expenseDate.getDay()
    const year = props.expenseDate.getFullYear()

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    )
}

export default ExpenseDate