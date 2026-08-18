import { IoWallet } from "react-icons/io5";
import { TbBrightnessUp } from "react-icons/tb";
function Navbar() {
  return (
    <nav>
      <div className="bg-blue-950 h-8.5 flex items-center px-3 justify-between">
        <div className="flex items-center justify-center gap-1.5">
          <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center">
            <IoWallet className="text-white size-3" />
          </div>
          <span className="text-white text-[12px]">Expense Tracker</span>
        </div>
        <div className="border-[0.5px] border-gray-300 h-5 w-5 flex items-center justify-center bg-blue-900 rounded-[5px]">
          <TbBrightnessUp className="text-white size-3 " />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
