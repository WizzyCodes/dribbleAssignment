// src/Footer.tsx
import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import SVG from "./svg";

const navs = [
  "For designers",
  "Hire talent",
  "Inspiration",
  "Advertising",
  "Blog",
  "About",
  "Careers",
  "Support",
];

const navs1 = [
  "Jobs",
  "Designers",
  "Freelancers",
  "Tags",
  "Places",
  "Resources",
];

const Footer: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="overflow-hidden">
      {/* Main Section */}
      <section className="flex flex-col items-center text-center bg-yellow-200 py-16 px-5 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-60 mt-10 w-full">
        <div className="w-full lg:w-[55%]">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 font-serif text-[rgb(13,12,34)]">
            Find your next designer today
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:max-w-xl mx-auto mb-8 text-[rgb(13,12,34)]">
            The world’s leading brands use Dribbble to hire creative talent.
            Browse millions of top-rated portfolios to find your perfect
            creative match.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 ml-14">
            <button className="bg-gray-900 text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-700 transition">
              Get started now
            </button>
            <button className="bg-white border border-gray-900 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition">
              Learn about hiring
            </button>
          </div>

          <a
            href="#"
            className="text-sm md:text-base text-gray-900 hover:underline"
          >
            Are you a designer?{" "}
            <span className="font-semibold">Join Dribbble</span>
          </a>
        </div>
      </section>

      {/* Navbar and Social Icons */}
      <div className="flex flex-col items-center justify-center w-full text-gray-700">
        <nav className="w-full py-4 border-gray-300 flex justify-between items-center px-4 lg:px-20 mb-5 mt-5">
          <div className="text-gray-900 mr-5">
            <SVG />
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-6 font-semibold">
            {navs.map((el) => (
              <li className="text-black cursor-pointer">{el}</li>
            ))}
          </ul>
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Social Icons */}
          <div className="hidden md:flex space-x-4 text-black">
            <FaTwitter className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaPinterestP className="cursor-pointer" />
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center w-full pb-4">
            <ul className="space-y-4 font-semibold text-center">
              {navs.map((el) => (
                <li className="text-black cursor-pointer">{el}</li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-4">
              <FaTwitter className="text-gray-700 hover:text-gray-900 cursor-pointer" />
              <FaFacebookF className="text-gray-700 hover:text-gray-900 cursor-pointer" />
              <FaInstagram className="text-gray-700 hover:text-gray-900 cursor-pointer" />
              <FaPinterestP className="text-gray-700 hover:text-gray-900 cursor-pointer" />
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="w-full py-6 text-center text-sm px-4 lg:px-20 flex flex-col lg:flex-row justify-between items-center font-semibold">
          <p className="text-gray-500 mb-4 lg:mb-0">
            © 2024 Dribbble&nbsp;&nbsp;
            <span className="hover:text-gray-900 cursor-pointer">Terms</span>
            &nbsp;•&nbsp;
            <span className="hover:text-gray-900 cursor-pointer">Privacy</span>
            &nbsp;•&nbsp;
            <span className="hover:text-gray-900 cursor-pointer">Cookies</span>
          </p>
          <ul className="flex flex-wrap justify-center space-x-4 text-gray-500">
            {navs1.map((el) => (
              <li className="hover:text-gray-900 cursor-pointer">{el}</li>
            ))}
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
