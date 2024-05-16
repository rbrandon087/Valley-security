import React, { useState } from "react";

import "../styles/Navbar.css";

interface INavbarProps {
  name: string;
}

const Navbar: React.FC<INavbarProps> = ({ name }) => {
  // State to manage the dropdown visibility
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Function to toggle the menu's visibility
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg- p-1 overflow-hidden fixed w-full bg-opacity-50 top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Company Logo */}
            <div className="flex items-center justify-start text-center -ml-72">
              <a href="#">
                <img className="h-8 w-auto" src={""} alt="Your Company" />
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-1 items-center justify-end text-center ml-auto -mr-72">
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <a
                    href="/Homepage"
                    className="p-2 px-4 group font-medium text-sm text-white"
                    aria-current="page"
                  >
                    HOME
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                  <a
                    href="/About"
                    className="p-2 px-4 group font-medium text-sm text-white"
                  >
                    ABOUT
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                  <a
                    href="/Contact"
                    className="p-2 px-4 group font-medium text-sm text-white"
                  >
                    CONTACT
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                  <a
                    href="/Careers"
                    className="p-2 px-4 group font-medium text-sm text-white"
                  >
                    CAREERS
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>
        {/* Mobile Links */}
        <div
          className={`fixed inset-0 bg-gray-900 z-50 transition-opacity ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        ></div>
        <div
          className={`fixed inset-0 flex items-center justify-center z-50 bg-gray-900 ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/Homepage"
              className="p-4 px-4 group font-medium text-3xl text-white"
              aria-current="page"
              onClick={toggleMenu}
            >
              HOME
              <div className="bg-bar h-[2px] w-0  group-hover:w-full transition-all duration-500"></div>
            </a>
            <a
              href="/About"
              className="p-4 px-4 group font-medium text-3xl text-white"
            >
              ABOUT
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a
              href="/Contact"
              className="p-4 px-4 group font-medium text-3xl text-white"
            >
              CONTACT
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a
              href="/Careers"
              className="p-4 px-4 group font-medium text-3xl text-white"
            >
              CAREERS
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
