import React from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from './components/NexExpense/NewExpenses';

// dfdfdsg
const App = () => {

  console.log("Hello world");
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 4),
    },
    { id: 'e2', 
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 15) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = expense => {
    expenses.push(expense)
    console.log("in App.js")
    console.log(expense)
    console.log("in App.js: expenses")
    console.log(expenses)
  }

  // return React.createElement(
  //   'div',
  //   {}, 
  //   React.createElement('h2', {}, "Let's get starteddd!"),
  //   React.createElement(Expenses, {expenses: expenses})
  //   );
  return (
    <div>
      <h2>Let's get starteddd!</h2>
      <NewExpenses onCreateData={addExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
