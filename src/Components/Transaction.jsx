import { FiPlus, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

function Transaction({ setTransactions }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "Income",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      id: Date.now(),
      title: form.title,
      amount: Number(form.amount),
      type: form.type,
      dateTime: Date.now(),
    };
    setTransactions((prev) => [...prev, transaction]);
  };
  return (
    <div className="ml-3 w-full py-4">
      {/* Add Transaction */}
      <section className="rounded-lg border-[1.5px] border-[#E2E8F0] p-5">
        {/* Heading */}
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#315BEA]">
            <FiPlus className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-[15px] font-bold text-[#10245C]">
            Add Transaction
          </h2>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* Title */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#334155]">
              Title
            </label>

            <input
              type="text"
              placeholder="Enter title (e.g. Food, Salary)"
              className="w-full rounded-lg border-[1.5px] border-[#CBD5E1] px-4 py-2  outline-none placeholder:text-[#94A3B8] focus:border-[#315BEA]"
              name="title"
              value={form.title}
              onChange={handleChange}
            />
          </div>

          {/* Amount */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#334155]">
              Amount
            </label>

            <div className="relative">
              <input
                type="number"
                placeholder="Enter amount"
                className="w-full rounded-lg border-[1.5px] border-[#CBD5E1] px-4 py-2 pr-10 outline-none placeholder:text-[#94A3B8] focus:border-[#315BEA]"
                name="amount"
                value={form.amount}
                onChange={handleChange}
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-lg font-semibold text-[#64748B]">
                ₹
              </span>
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="mb-1 block text-sm font-semibold text-[#334155]">
              Type
            </label>

            <div className="relative">
              <select
                className="w-full appearance-none rounded-lg border-[1.5px] border-[#CBD5E1] bg-white px-4 py-2 outline-none focus:border-[#315BEA]"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </select>

              <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
            </div>
          </div>
        </div>

        {/* Add Button */}
        <button
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#315BEA] py-2 text-base font-semibold text-white transition hover:bg-[#2548C7]"
          onClick={handleSubmit}
        >
          <FiPlus className="h-5 w-5" />
          Add Transaction
        </button>
      </section>
    </div>
  );
}

export default Transaction;
