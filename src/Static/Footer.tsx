const Footer = () => {
  return (
    <div className="h-[180vh]">
      <div className="w-full  bg-yellow-500 h-[90vh] flex justify-center">
        <div className="w-[42%] bg-red-600 h-full flex flex-col  text-center items-center mt-10 pt-10">
          <h2 className="text-[64px] font-serif text-[rgb(13,12,34)] text-center leading-tight mb-3">
            Find your next designer today
          </h2>
          <div className="text-[20px] text-[rgb(13,12,34)] font-sans mb-10">
            The world's leading brand use Dribbble to hire creative talent.
            Browse millions of top-rated portfolios to find your perfect
            creative match
          </div>
          <div className="w-[70%] h-[100px] bg-blue-900"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
