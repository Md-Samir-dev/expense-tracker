import { IoWallet } from "react-icons/io5";
function TotalBalance({ totalBalance }) {
  return (
    <div className=" bg-[#dbe0ff] border border-gray-300 w-full ml-3 mt-2.5 h-16 rounded-lg flex  items-center justify-center relative">
      <div className="text-[8px] flex flex-col items-center justify-center ">
        <span className="text-blue-950 font-medium">TOTAL BALANCE</span>
        <h2 className="text-[1rem] font-bold text-blue-700">₹{totalBalance}</h2>
        <span>Your current balance</span>
      </div>
      <div className=" flex items-center absolute right-3">
        <IoWallet className="text-blue-800 text-3xl" />
      </div>
    </div>
  );
}
export default TotalBalance;
