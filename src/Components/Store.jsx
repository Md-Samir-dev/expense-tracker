function Store({ transactions, setTransactions }) {
  const handleDelete = (id) => {
    setTransactions((prev) =>
      prev.filter((transaction) => transaction.id !== id),
    );
  };
  return (
    <div className="py-4 rounded-lg border-[1.5px] border-[#E2E8F0] p-4 w-249 ml-3">
      {/* Header */}
      <div className="mb-1 flex items-center justify-between border-b border-[#E2E8F0] w-full">
        <h2 className="text-[18px] font-bold text-[#10245C]">Transactions</h2>

        <select className="rounded-lg border-[1.5px] border-[#CBD5E1] bg-white px-4 py-1 text-sm text-[#334155] outline-none">
          <option>All Transactions</option>
          <option>Income</option>
          <option>Expense</option>
        </select>
      </div>

      {/* Transactions History */}
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between border-b border-[#E2E8F0] py-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#DCFCE7]">
              💰
            </div>

            <div>
              <h3 className="font-semibold text-[#334155]">
                {transaction.title}
              </h3>

              <p className="text-sm text-[#94A3B8]">
                {transaction.type} • Today
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
