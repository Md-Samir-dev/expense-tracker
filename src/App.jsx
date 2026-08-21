import Navbar from "./Components/Navbar";
import TotalBalance from "./Components/TotalBalance";
import Income from "./Components/Income";
import Transaction from "./Components/Transaction";
import Store from "./Components/Store";
import { useState, useEffect } from "react";
function App() {
  const [transactions, setTransactions] = useState(() => {
    const savedTransactions = localStorage.getItem("transactions");

    return savedTransactions ? JSON.parse(savedTransactions) : [];
  });
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  //Total income
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "Income")
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Total Expense
  const totalExpense = transactions
    .filter((transaction) => transaction.type === "Expense")
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Total Balance
  const totalBalance = totalIncome - totalExpense;

  return (
    <div>
      <Navbar />
      <TotalBalance totalBalance={totalBalance} />
      <Income totalIncome={totalIncome} totalExpense={totalExpense} />
      <Transaction setTransactions={setTransactions} />
      <Store transactions={transactions} setTransactions={setTransactions} />
    </div>
  );
}

export default App;
