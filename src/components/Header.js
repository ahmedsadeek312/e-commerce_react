import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            to={"/"}
            className="flex cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-green-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Lamazon</span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to={"/home"} className="mr-5 hover:text-gray-900">
              Home
            </Link>
            <Link to={"/allProducts"} className="mr-5 hover:text-gray-900">
              Products
            </Link>
            <Link to={"/feature"} className="mr-5 hover:text-gray-900">
              Feature
            </Link>
            <Link to={"static"} className="mr-5 hover:text-gray-900">
              Statics
            </Link>
          </nav>
          <Link to="/cart">
            <button className="inline-flex items-center bg-indigo-600 border-0 py-2 text-white px-4 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">
              Cart
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
