import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
function Income({ totalIncome, totalExpense }) {
  return (
    // income
    <div className="flex gap-3  justify-center items-center mt-2.5 ml-3">
      <div className="flex items-center gap-5 border border-[#068256] w-123 h-15 px-10 rounded-lg bg-[#e1fcf3]">
        <div className=" h-10 w-10 flex justify-center items-center rounded-full bg-green-200">
          <FaArrowTrendUp className="text-green-800 size-6" />
        </div>
        <div className="flex flex-col text-[8px]">
          <span className="text-green-700 font-medium">T0TAL INCOME</span>
          <span className="text-[1rem] text-green-700 font-bold">
            ₹{totalIncome}
          </span>
          <span>All time income</span>
        </div>
      </div>
      {/*expense*/}
      <div className="flex items-center gap-5 border border-[#f4859d] w-123 h-15 px-10 rounded-lg bg-[#fbe2e7]">
        <div className=" h-10 w-10 flex justify-center items-center rounded-full bg-red-200">
          <FaArrowTrendDown className="text-red-800 size-6" />
        </div>
        <div className="flex flex-col text-[8px]">
          <span className="text-red-700 font-medium">TOTAL EXPENSE</span>
          <span className="text-[1rem]  text-red-700 font-bold">
            ₹{totalExpense}
          </span>
          <span>All time expense</span>
        </div>
      </div>
    </div>
  );
}
export default Income;
