"use client";
import React from "react";
import { useState, useEffect} from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(false);

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  return (
<>
  <nav className={`text-white font-pregular fixed w-full z-50 backdrop-blur-sm ${header ? "bg-black/70" : "bg-[#232323]"} px-4 sm:px-6 lg:px-8 top-0`}>
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center h-16 container justify-around lg:ps-32">
        {/* Header with Hamburger Menu Icon */}
        <div className="flex items-center w-full">
          <h1 className="text-xl font-lobster text-white md:flex-1">
            Atlas Innovations<span className="text-[#00ffcc]">&</span>Meta Solutions
          </h1>
          <div className="flex md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gold/40 focus:outline-none focus:bg-gold focus:text-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  className={isOpen ? "inline-flex" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 ">
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#00ffcc] duration-300"
          >
            Services
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#00ffcc] duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="px-3 py-2 rounded-md text-sm font-medium hover:text-[#00ffcc] duration-300"
          >
            About
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gold/40"
          >
            Home
          </a>
          <a
            href="/events"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gold/40"
          >
            Events
          </a>
          <a
            href="/nominees"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gold/40"
          >
            Nominees
          </a>
          <a
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gold/40"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </nav>
</>

  );
};

export default Navbar;
