import { useState } from "react";
function Store({ transactions, setTransactions }) {
  const [filter, setFilter] = useState("All");
  const handleDelete = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id),
    );
  };
  const filteredTransactions =
    filter === "All"
      ? transactions
      : transactions.filter((transaction) => transaction.type === filter);
  return (
    <div className="py-4 rounded-lg border-[1.5px] border-[#E2E8F0] p-4 w-full ml-3 flex flex-col gap-2">
      {/* Header */}
      <div className=" flex items-center justify-between border-b border-[#E2E8F0] w-full h-10  ">
        <h2 className="text-[18px] font-bold text-[#10245C]">Transactions</h2>

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="rounded-lg border-[1.5px] border-[#CBD5E1] bg-white  text-sm text-[#334155] outline-none w-40 h-6"
        >
          <option value="All">All Transactions</option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
      </div>

      {/* Transactions History */}
      {filteredTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between border-b border-[#E2E8F0]  h-15"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#DCFCE7]">
              💰
            </div>

            <div>
              <h4 className="font-semibold text-[#334155]">
                {transaction.title}
              </h4>

              <p className="text-[10px] text-[#94A3B8]">
                {new Date(transaction.dateTime).toLocaleDateString("en-GB")}
                <br />
                {new Date(transaction.dateTime).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>

          <p
            className={`font-semibold ${
              transaction.type === "Income"
                ? "text-[#16A34A]"
                : "text-[#DC2626]"
            }`}
          >
            {transaction.type === "Income" ? "+" : "-"} ₹{transaction.amount}
          </p>
          <button
            onClick={() => handleDelete(transaction.id)}
            className="text-sm font-semibold text-red-500 hover:text-red-700"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Store;
