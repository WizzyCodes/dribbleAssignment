import { FC } from "react";

interface iProps {
  title?: string;
  color?: boolean;
}

const Buttom: FC<iProps> = ({ title, color }) => {
  return (
    <div>
      <button
        className={`flex items-center gap-2 px-7 py-3  rounded-full font-semibold  lg:mr-4 md:mr-3 sm:mr-2 xs:mr-1 ${
          color &&
          "bg-black text-white hover:bg-slate-700 transition-all duration-500"
        } `}
      >
        {title}
      </button>
    </div>
  );
};

export default Buttom;

export const Buttom1: FC<iProps> = ({ title }) => {
  return (
    <div>
      <button
        className={`flex items-center  font-semibold  lg:mr-4 md:mr-3 sm:mr-2 xs:mr-1`}
      >
        {title}
      </button>
    </div>
  );
};
