import React from "react";

const NetBalance = ({ entries }) => {
  const totalIncome = entries
    .filter((entry) => entry.type === "Income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpenses = entries
    .filter((entry) => entry.type === "Expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  return (
    <div>
      <h2>Net Balance: ${netBalance.toFixed(2)}</h2>
      <p>Total Income: ${totalIncome.toFixed(2)}</p>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default NetBalance;
