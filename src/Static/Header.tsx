import {
  MdCancel,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdMenu,
} from "react-icons/md";
import SVG from "./svg";

// jsx
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import Buttom, { Buttom1 } from "../Components/Buttom";
// import { HiMenu, HiX } from "react-icons/hi";

const Header: React.FC = () => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [shotsOpen, setShotsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const exploreDropdown = [
    "Product design",
    "Web design",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Typography",
    "Print",
  ];
  const HireDropdown = ["Browse designers", "Post a job", "Hiring on dribbble"];
  return (
    <header className="fixed w-full bg-white shadow-lg z-50 flex  items-center  px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-8 py-4 font-semibold justify-between lg:w-full">
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-gray-700 p-2 rounded-md focus:outline-none"
      >
        {menuOpen ? <MdCancel size={30} /> : <MdMenu size={30} />}
      </button>
      <div className="flex items-center  lg:px-4 font-semibold sm:px-1">
        {/* Logo */}
        <div className="text-gray-900 mr-5">
          <SVG />
        </div>

        {/* Mobile Menu Toggle Button */}

        {/* Search Bar */}
        <div className="flex items-center rounded-full h-12 lg:h-14 bg-slate-200 hover:bg-white border-2 border-slate-200 w-full md:w-[600px] lg:w-[280px] xl:w-[500px] 2xl:w-[650px] max-lg:w-[100px] max-xl:w-[100px] sm:w-[100px] max-sm:w-[70px]">
          <input
            type="text"
            className="w-3/4 h-full rounded-l-full py-2 px-4 outline-none bg-transparent font-normal"
            placeholder="What are you looking for?"
          />
          <div className="relative z-50">
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
        <div className="hidden lg:flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-gray-700 ml-8 sm:hidden md:hidden">
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
                {exploreDropdown.map((el) => (
                  <ul>
                    <li>
                      <a
                        href=""
                        className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                      >
                        {el}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative lg:flex sm:hidden md:hidden">
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
            {HireDropdown.map((el) => (
              <a
                href=""
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                {el}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="lg:flex  sm:hidden md:hidden">
        <a
          href="#"
          className="text-black hover:text-gray-800 lg:mr-4 md:mr-3 sm:mr-2"
        >
          Find Jobs
        </a>
        <a
          href="#"
          className="text-black hover:text-gray-800 lg:mr-4 md:mr-3 sm:mr-2"
        >
          Blog
        </a>
      </div>
      <div className="flex items-center">
        {" "}
        <Buttom1 title="Sign Up" />
        <Buttom title="Log In" color />
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden fixed top-[90px] left-0  w-full bg-white shadow-lg transition-all duration-300  z-0${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="p-4 flex flex-col space-y-4">
            <div className="relative z-[100]">
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
                  {exploreDropdown.map((el) => (
                    <ul>
                      <li>
                        <a
                          href=""
                          className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                        >
                          {el}
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>

            <div className="relative z-50">
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
                  {HireDropdown.map((el) => (
                    <a
                      href=""
                      className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
                    >
                      {el}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#"
              className="text-black hover:text-gray-800 lg:mr-4 md:mr-3 sm:mr-2"
            >
              Find Jobs
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-800 lg:mr-4 md:mr-3 sm:mr-2"
            >
              Blog
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
