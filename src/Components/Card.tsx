import React from "react";
import data from "../data.json";

const Card = () => {
  return (
    <div>
      <div className="w-full h-[5rem]  text-[50px] text-center ">
        Explore inspiring designs
      </div>
      <div className="w-full h-[100rem]  flex items-center justify-center ">
        <div className="w-[95%] h-full  grid grid-cols-3 justify-items-center items-center ">
          {data.map((el: any, i: any) => (
            <div className="bg-black opacity">
              <div className="w-[360px] border rounded-md h-[280px] bg-[green]">
                <img
                  className="w-[100%] h-[85%] border rounded-md outline-none border-none"
                  src={el.img}
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
