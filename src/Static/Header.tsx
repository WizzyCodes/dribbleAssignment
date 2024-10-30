import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import SVG from "./svg";
// import { IoSearchOutline } from "react-icons/io5";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import Buttom from "../Components/Buttom";

// const Header: React.FC = () => {
//   const header = [
//     { id: 1, title: "Explore" },
//     { id: 2, title: "Hire a Designer" },
//     { id: 3, title: "Find Jobs" },
//     { id: 4, title: "Blog" },
//   ];
//   return (
//     <div>
//       <div className="justify-center">
//         <div className="  bg-slate-300 items-center px-5 py-5 ">
//           <div className="flex gap-12 h-10  px-5 py-1">
//             <div className=" ">
//
//             </div>
//
//             <div className="flex gap-2 justify-center ">
//               {header.map((el: any) => (
//                 <div>{el.title}</div>
//               ))}
//             </div>
//             <div className="font-semibold flex gap-2">
//               <Buttom title="Sign up" />
//               <Buttom title="Log in" color />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import Buttom, { Buttom1 } from "../Components/Buttom";

// const Header: React.FC = () => {
//   const [exploreOpen, setExploreOpen] = useState(false);
//   const [hireOpen, setHireOpen] = useState(false);
//   const [shotsOpen, setShotsOpen] = useState(false);

//   return (
//     <header className="flex items-center justify-between p-4 bg-white shadow-sm fixed z-50 px-5 w-full font-semibold">
//       <div className=" font-semibold text-gray-900">
//         <SVG />
//       </div>

//       <div className="flex  rounded-full h-[60px] items-center w-[550px]  py-2 bg-slate-200 hover:bg-white border-[3px] border-slate-200 mr-3">
//         <input
//           type="text"
//           className=" w-[400px] h-[60px] rounded-3xl py-3 pl-3 outline-none bg-transparent font-normal"
//           placeholder="What are you looking for?"
//         />
//         <div className="flex flex-[10%] items-center">
//           <button className="w-16 h-14 flex justify-center items-center font-semibold gap-1 flex-1">
//             <div className="relative">
//               <button className="flex items-center space-x-1 text-gray-700">
//                 <span>Shots</span>
//                 {shotsOpen ? (
//                   <MdKeyboardArrowUp
//                     onMouseEnter={() => setShotsOpen(true)}
//                     onMouseLeave={() => setShotsOpen(false)}
//                   />
//                 ) : (
//                   <MdKeyboardArrowDown
//                     onMouseEnter={() => setShotsOpen(true)}
//                     onMouseLeave={() => setShotsOpen(false)}
//                   />
//                 )}
//               </button>

//               {shotsOpen && (
//                 <div className="absolute top-10 left-0 min-w-10 bg-white border border-gray-200 rounded-md shadow-lg p-2 text-start">
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     Shots
//                   </a>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                   >
//                     Designers
//                   </a>
//                 </div>
//               )}
//             </div>
//           </button>
//           <button className="bg-[#ec5e95] p-3 rounded-full hover:bg-[#f5619a] mr-2">
//             <IoSearchOutline className="text-white" size={20} />
//           </button>
//         </div>
//       </div>

//       <div className="flex items-center space-x-6 text-gray-700">
//         <div className="relative">
//           <a
//             href=""
//             className="hover:text-slate-700 transition-all duration-200 flex items-center gap-1 text-black"
//           >
//             Explore
//             {exploreOpen ? (
//               <MdKeyboardArrowUp
//                 onMouseEnter={() => setExploreOpen(true)}
//                 onMouseLeave={() => setExploreOpen(false)}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 onMouseEnter={() => setExploreOpen(true)}
//                 onMouseLeave={() => setExploreOpen(false)}
//               />
//             )}
//           </a>

//           {exploreOpen && (
//             <div className="absolute top-8 left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg p-2 ">
//
//             </div>
//           )}
//         </div>

//         <div className="relative ">
//           <a
//             href="#"
//             className="hover:text-slate-700 transition-all duration-200 flex items-center text-black gap-1"
//           >
//             Hire a Designer
//             {hireOpen ? (
//               <MdKeyboardArrowUp
//                 onMouseEnter={() => setHireOpen(true)}
//                 onMouseLeave={() => setHireOpen(false)}
//               />
//             ) : (
//               <MdKeyboardArrowDown
//                 onMouseEnter={() => setHireOpen(true)}
//                 onMouseLeave={() => setHireOpen(false)}
//               />
//             )}
//           </a>
//           {hireOpen && (
//             <div className="absolute top-8 left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg p-2">
//               <ul>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     Browse Designers
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     Post Job
//                   </a>
//                 </li>
//                 <li>
//                   {" "}
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                   >
//                     Hiring on dribbble
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </div>

//         <a
//           href=""
//           className="hover:text-slate-700 transition-all duration-200 text-black"
//         >
//           Find Jobs
//         </a>
//         <a
//           href=""
//           className="hover:text-slate-700 transition-all duration-200 text-black"
//         >
//           Blog
//         </a>
//       </div>
//       <Buttom1 title="Sign Up" />
//       <Buttom title="Log In" color />
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from "react";
// import { IoSearchOutline } from "react-icons/io5";
// import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
// import Buttom, { Buttom1 } from "../Components/Buttom";

// const Header: React.FC = () => {
//   const [exploreOpen, setExploreOpen] = useState(false);
//   const [hireOpen, setHireOpen] = useState(false);
//   const [shotsOpen, setShotsOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false); // New state for mobile menu

//   return (
//     <header className="fixed w-full bg-white shadow-sm z-50">
//       <div className="flex items-center justify-between p-4 lg:px-8 font-semibold">
//         {/* Logo */}
//         <div className="text-gray-900">
//           <SVG />
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="lg:hidden text-gray-700 p-2 rounded-md focus:outline-none"
//         >
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   fill="none"
//   viewBox="0 0 24 24"
//   stroke="currentColor"
//   className="w-6 h-6"
// >
//   <path
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     strokeWidth="2"
//     d="M4 6h16M4 12h16M4 18h16"
//   />
// </svg>
//         </button>

//         {/* Desktop Search Bar */}
//         <div className="hidden lg:flex items-center rounded-full h-14 bg-slate-200 hover:bg-white border-2 border-slate-200 w-96 lg:w-[550px]">
//           <input
//             type="text"
//             className="w-3/4 h-full rounded-l-full py-2 px-4 outline-none bg-transparent font-normal"
//             placeholder="What are you looking for?"
//           />
//           <div className="relative">
//             <button
//               className="flex items-center text-gray-700 px-4"
//               onMouseEnter={() => setShotsOpen(true)}
//               onMouseLeave={() => setShotsOpen(false)}
//             >
//               <span>Shots</span>
//               {shotsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//             </button>
//             {/* Shots Dropdown */}
//             {shotsOpen && (
//               <div className="absolute top-12 left-0 w-32 bg-white border rounded-md shadow-lg p-2">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Shots
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
//                 >
//                   Designers
//                 </a>
//               </div>
//             )}
//           </div>
//           <button className="bg-pink-500 p-2 rounded-full text-white">
//             <IoSearchOutline size={20} />
//           </button>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-6 text-gray-700">
//           <div className="relative">
//             <a
//               href="#"
//               className="flex items-center gap-1 text-black hover:text-gray-800"
//               onMouseEnter={() => setExploreOpen(true)}
//               onMouseLeave={() => setExploreOpen(false)}
//             >
//               Explore
//               {exploreOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//             </a>
//             {/* Explore Dropdown */}
//             {exploreOpen && (
//               <div className="absolute top-8 left-0 w-48 bg-white border rounded-md shadow-lg p-2">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   Product Design
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   Web Design
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   Animation
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   Branding
//                 </a>
//                 {/* Add more links as needed */}
//               </div>
//             )}
//           </div>

//           <div className="relative">
//             <a
//               href="#"
//               className="flex items-center gap-1 text-black hover:text-gray-800"
//               onMouseEnter={() => setHireOpen(true)}
//               onMouseLeave={() => setHireOpen(false)}
//             >
//               Hire a Designer
//               {hireOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
//             </a>
//             {/* Hire Dropdown */}
//             {hireOpen && (
//               <div className="absolute top-8 left-0 w-48 bg-white border rounded-md shadow-lg p-2">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   Browse Designers
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   Post Job
//                 </a>
//               </div>
//             )}
//           </div>

//           <a href="#" className="text-black hover:text-gray-800">
//             Find Jobs
//           </a>
//           <a href="#" className="text-black hover:text-gray-800">
//             Blog
//           </a>
//           <Buttom1 title="Sign Up" />
//           <Buttom title="Log In" color />
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="lg:hidden bg-white w-full shadow-lg">
//           <div className="p-4">
//             <div className="mb-2">
//               <a href="#" className="block text-black hover:text-gray-800">
//                 Explore
//               </a>
//             </div>
//             <div className="mb-2">
//               <a href="#" className="block text-black hover:text-gray-800">
//                 Hire a Designer
//               </a>
//             </div>
//             <div className="mb-2">
//               <a href="#" className="block text-black hover:text-gray-800">
//                 Find Jobs
//               </a>
//             </div>
//             <div className="mb-2">
//               <a href="#" className="block text-black hover:text-gray-800">
//                 Blog
//               </a>
//             </div>
//             <Buttom1 title="Sign Up" />
//             <Buttom title="Log In" color />
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
// To make this code responsive for all screen sizes, including xl, 2xl, lg, md, and sm, you can use CSS media queries and Tailwind CSS utility classes. Here's an updated version of the code:

// jsx
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Buttom, { Buttom1 } from "../Components/Buttom";

const Header: React.FC = () => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [shotsOpen, setShotsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-lg z-50 flex flex-wrap items-center  px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-4 font-semibold justify-between">
      <div className="flex items-center  lg:px-4 font-semibold">
        {/* Logo */}
        <div className="text-gray-900 mr-5">
          <SVG />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-gray-700 p-2 rounded-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Search Bar */}
        <div className="flex items-center rounded-full h-12 lg:h-14 bg-slate-200 hover:bg-white border-2 border-slate-200 w-full md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]">
          <input
            type="text"
            className="w-3/4 h-full rounded-l-full py-2 px-4 outline-none bg-transparent font-normal"
            placeholder="What are you looking for?"
          />
          <div className="relative">
            <button
              className="flex items-center text-gray-700 px-4"
              onMouseEnter={() => setShotsOpen(true)}
              onMouseLeave={() => setShotsOpen(false)}
            >
              <span>Shots</span>
              {shotsOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
            {/* Shots Dropdown */}
            {shotsOpen && (
              <div className="absolute top-12 left-0 w-32 bg-white border rounded-md shadow-lg p-2  sm:p-3 md:p-4">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Shots
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Designers
                </a>
              </div>
            )}
          </div>
          <button className="bg-pink-500 p-2 rounded-full text-white hidden sm:block">
            <IoSearchOutline size={20} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-gray-700 ml-8">
          <div className="relative">
            <a
              href="#"
              className="flex items-center gap-1 text-black hover:text-gray-800"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              Explore
              {exploreOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </a>
            {/* Explore Dropdown */}
            {exploreOpen && (
              <div className="absolute top-8 left-0 w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-56 bg-white border rounded-md shadow-lg p-22 p-2 sm:p-3 md:p-4">
                <ul>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100 "
                    >
                      Product Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Web Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Animation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Branding
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Illustration
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Mobile
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Typography
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
                    >
                      Print
                    </a>
                  </li>
                </ul>
                {/* Add more links as needed */}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative">
        <a
          href="#"
          className="flex items-center gap-1 text-black hover:text-gray-800"
          onMouseEnter={() => setHireOpen(true)}
          onMouseLeave={() => setHireOpen(false)}
        >
          Hire a Designer
          {hireOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </a>
        {/* Hire Dropdown */}
        {hireOpen && (
          <div className="absolute top-8 left-0 w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-56 bg-white border rounded-md shadow-lg p-2  sm:p-3 md:p-4">
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Browse Designers
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
            >
              Post Job
            </a>
          </div>
        )}
      </div>

      <a
        href="#"
        className="text-black hover:text-gray-800 lg:mr-4 md:mr-3 sm:mr-2 xs:mr-1"
      >
        Find Jobs
      </a>
      <a
        href="#"
        className="text-black hover:text-gray-800 lg:mr-4 md:mr-3 sm:mr-2 xs:mr-1"
      >
        Blog
      </a>
      <div className="flex items-center">
        {" "}
        <Buttom1 title="Sign Up" />
        <Buttom title="Log In" color />
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="className={`lg:hidden fixed top-[60px] left-0 w-full bg-white shadow-lg transition-all duration-300 ${
  menuOpen ? 'translate-y-0' : '-translate-y-full'
}`}>"
        >
          <div className="p-4 flex flex-col space-y-4">
            <div className="mb-2">
              <a href="#" className="block text-black hover:text-gray-800">
                Explore
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="block text-black hover:text-gray-800">
                Hire a Designer
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="block text-black hover:text-gray-800">
                Find Jobs
              </a>
            </div>
            <div className="mb-2">
              <a href="#" className="block text-black hover:text-gray-800">
                Blog
              </a>
            </div>
            <Buttom1 title="Sign Up" />
            <Buttom title="Log In" color />
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;

{
  /* <div className="hidden md:flex items-center rounded-full h-12 lg:h-14 bg-slate-200 hover:bg-white border-2 border-slate-200 w-full md:w-[350px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px]">

// Update desktop menu container  
<div className="hidden lg:flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-gray-700">

// Update dropdown widths
<div className="absolute top-8 left-0 w-36 sm:w-40 md:w-44 lg:w-48 xl:w-52 2xl:w-56 bg-white border rounded-md shadow-lg p-2">

// Update mobile menu
<div className={`lg:hidden fixed top-[60px] left-0 w-full bg-white shadow-lg transition-all duration-300 ${
  menuOpen ? 'translate-y-0' : '-translate-y-full'
}`}>
  <div className="p-4 flex flex-col space-y-4">
    // Mobile menu items...
  </div>
</div>

// Add responsive text sizes
<a className="text-sm sm:text-base lg:text-lg">

// Add responsive padding/margins
<div className="p-2 sm:p-3 md:p-4"></div> */
}
