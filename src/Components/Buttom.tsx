import { FC, ReactNode } from "react";

interface iProps {
  title?: string;
  color?: boolean;
  icon?: ReactNode;
}

const Buttom: FC<iProps> = ({ title, color, icon }) => {
  return (
    <div>
      <button
        className={`flex items-center gap-2 px-8 py-2  rounded-full font-semibold ${
          color &&
          "bg-black text-white hover:bg-slate-200 transition-all duration-500"
        } `}
      >
        {icon}
        {title}
      </button>
    </div>
  );
};

export default Buttom;
