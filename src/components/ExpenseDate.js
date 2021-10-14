function ExpenseDate(props) {
    const month = props.expenseDate.toLocaleString('es-US', { month: 'long' })
    const day = props.expenseDate.toLocaleString('es-US', { day: '2-digit' })
    const year = props.expenseDate.getFullYear()

    return (
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
    )
}

export default ExpenseDate