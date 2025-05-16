import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 relative z-[100]">
      <div className="max-w-screen-xl flex flex-nowrap items-center justify-between mx-auto p-4 gap-x-2">
        
        <Link to="/" className="flex items-center space-x-2 shrink-0">
          <img src="logo.png" className="h-8 w-auto" alt="Pulmonary AI Logo" />
          <span className="self-center text-lg sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
            Pulmonary AI
          </span>
        </Link>

        
        <div className="flex items-center space-x-1 sm:space-x-2 md:order-2 shrink-0">
          <Link
            to="/check"
            className="text-white bg-lime-500 hover:bg-lime-600 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-md text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 text-center dark:bg-lime-600 dark:hover:bg-lime-700 dark:focus:ring-lime-800"
          >
            Check Disease
          </Link>

          <button
            type="button"
            className="inline-flex items-center p-2 w-9 h-9 sm:w-10 sm:h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        
        <div
          className={`absolute left-0 top-[60px] w-full bg-gray-50 dark:bg-gray-800 rounded-md md:static md:block md:w-auto md:bg-transparent dark:md:bg-gray-900 transition-all duration-300 z-[100] ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:opacity-100 md:visible`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:border-0 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dataset"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                Dataset
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 md:p-0 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;