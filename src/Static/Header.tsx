import SVG from "./svg";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Buttom from "../Components/Buttom";

const Header: React.FC = () => {
  const header = [
    { id: 1, title: "Explore" },
    { id: 2, title: "Hire a Designer" },
    { id: 3, title: "Find Jobs" },
    { id: 4, title: "Blog" },
  ];
  return (
    <div>
      <div className="justify-center itc">
        <div className="  bg-slate-300 items-center px-5 py-5">
          <div className="flex gap-12 h-10  px-5 py-1">
            <div className=" ">
              <SVG />
            </div>
            <div className="flex  rounded-full h-[60%] items-center w-[500px]  py-2 bg-slate-200 hover:bg-white">
              <input
                type="text"
                className=" w-[370px] h-[60px] rounded-3xl py-3 pl-3 outline-none bg-transparent "
                placeholder="What are you looking for?"
              />
              <button className="w-16 h-14 flex justify-center items-center font-semibold gap-1">
                Shots <MdKeyboardArrowDown className="justify-center " />
              </button>
              <button className="bg-[#ec5e95] p-3 rounded-full hover:bg-[#f5619a]">
                <IoSearchOutline className="text-white" size={20} />
              </button>
            </div>
            <div className="flex gap-2 justify-center ">
              {header.map((el: any) => (
                <div>{el.title}</div>
              ))}
            </div>
            <div className="font-semibold flex gap-2">
              <Buttom title="Sign up" />
              <Buttom title="Log in" color />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
