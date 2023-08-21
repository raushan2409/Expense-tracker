import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import React from 'react';

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.itemhai.map(
        expense => <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
        />
      )}
    </Card>
  );
}

export default Expenses;