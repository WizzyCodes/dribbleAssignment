import { useEffect, useState } from "react";

const Heroscreen = () => {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = [
    "bg-pink-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-blue-300",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [setColorIndex]);

  return (
    <div className="w-full max-h-[90vh] flex justify-center items-center bg-[#fafafa]">
      <section
        className="text-center bg-transparent px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 pt-[120px] sm:pt-[250px] md:pt-[250px] lg:pt-[12
      0px] xl:pt-[150px] max-w-full "
      >
        <button
          className={`inline-block ${colors[colorIndex]} text-black font-medium py-2 px-4 sm:px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-lg 2xl:text-xl mb-6 sm:mb-8 md:mb-10 lg:mb-12 outline-none  sm:w-[300px] md:w-[350px] lg:w-[350px] xl:w-[400px] transition-all leading-tight duration-300`}
        >
          Over 3 million ready-to-work creatives!
        </button>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[85px] 2xl:text-[100px] font-medium text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-serif mx-auto max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px]">
          The world's destination for design
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 font-semibold max-w-[300px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] 2xl:max-w-[900px]">
          Get inspired by the work of millions of top-rated designers & agencies
          around the world.
        </p>

        <button className="bg-gray-900 text-white font-semibold py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-full text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl hover:bg-gray-700 transition-all duration-300 mb-12">
          Get started
        </button>
      </section>
    </div>
  );
};

export default Heroscreen;
