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
      <nav className="bg-white p-1  overflow-hidden fixed w-full bg-opacity-50 top-0 z-50  ">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8" />
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
              <div className="flex flex-shrink-0 items-center">
                <a href="#">
                  <img className="h-8 w-auto" src={""} alt="Your Company" />
                </a>
              </div>
            </div>
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
          {/* Company  Logo */}
          <div className="flex flex-1 items-center justify-center text-center ">
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex md:absolute left-6">
                <div className="flex flex-shrink- items-center">
                  <a href="/Homepage">
                    <img className="h-8 w-auto " src={""} alt="Your Company" />
                  </a>
                </div>
              </div>
              {/* Call Button*/}

              <div className="flex space-x-4 ">
                {/* Links */}
                <div className="flex lg:flex-1  items-left">
                  <a
                    href="/Homepage"
                    className="p-2 px-4 group font-medium text-sm"
                    aria-current="page"
                  >
                    Home
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>

                  <a
                    href="/About"
                    className="p-2 px-4 group font-medium text-sm"
                  >
                    About
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                  <a
                    href="/Contact"
                    className="p-2 px-4 group font-medium text-sm"
                  >
                    Contact
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                  <a
                    href="/Careers"
                    className="p-2 px-4 group font-medium text-sm"
                  >
                    Careers
                    <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <div
          className={`sm:hidden ${isMenuOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/Homepage"
              className="p-2 px-4 group font-medium text-sm"
              aria-current="page"
              onClick={toggleMenu}
            >
              Home
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>

            <a href="/Gallery" className="p-2 px-4 group font-medium text-sm">
              Gallery
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a href="/About" className="p-2 px-4 group font-medium text-sm">
              About
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a href="/Contact" className="p-2 px-4 group font-medium text-sm">
              Contact
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
            <a href="/Careers" className="p-2 px-4 group font-medium text-sm">
              Careers
              <div className="bg-bar h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
