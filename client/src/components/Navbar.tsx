import React from "react";
import "../styles/Navbar.css";

export interface INavbarProps {
  name: string;
}

const Navbar: React.FunctionComponent<INavbarProps> = ({ name }) => {
  return (
    <div>
      <nav className="">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
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
            <div className="flex flex-1 items-center justify-center text-center">
              <div className="hidden sm:ml-6 sm:block ">
                <div className="flex space-x-4 ">
                  <a
                    href="/Homepage"
                    className=" text-black hover:bg-bar  hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="Gallery"
                    className="text-black hover:bg-bar hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    Gallery
                  </a>
                  <a
                    href="About"
                    className="text-black hover:bg-bar hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-bar hover:text-white"
                        id="menu-button"
                        aria-expanded="true"
                        aria-haspopup="true"
                      >
                        Contact
                        <svg
                          className="-mr-1 h-5 w-5 text-gray-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    <div
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        <a
                          href="/Employment"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-0"
                        >
                          Employment
                        </a>
                        <a
                          href="/Estimate"
                          className="text-gray-700 block px-4 py-2 text-sm"
                          role="menuitem"
                          tabIndex={-1}
                          id="menu-item-1"
                        >
                          Estimate
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/homepage"
              className=" text-black  hover:bg-bar hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/Gallery"
              className="text-black   hover:bg-bar hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="/About"
              className="text-black  hover:bg-bar hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              About
            </a>
            <a
              href="/Contact"
              className="text-black  hover:bg-bar hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
