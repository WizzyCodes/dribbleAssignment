import Buttom from "./Buttom";

const Heroscreen = () => {
  return (
    <div>
      <div className="w-full h-[500px] bg-slate-100">
        <div className="flex justify-center">
          <div>
            <button className="  mt-10 h-[40px] ml-[200px]">
              Over 3 million ready-to-work creative?
            </button>
            <h1 className="w-[%] text-[50px]">
              The world's destination for design
            </h1>
            <p className="mt-3 text-[20px]">
              Get inspired by the work of millions of top-rated designers &
              agencies around the world
            </p>
            <div className="flex justify-center mt-10">
              <Buttom title="Get started" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroscreen;
