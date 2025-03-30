import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/KaunLogo.jpeg";
import logo2 from "../assets/nculogo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen:[17vh] antialiased bg-gray-900">
      <div className="w-full text-gray-200 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl px-6 mx-auto md:px-8 py-4">
          {/* Left Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logo1}
              alt="Logo 1"
              className="h-16 w-16 md:h-20 rounded-full md:w-20 hover:scale-105 transition-transform"
            />
          </Link>

          {/* Navbar Links */}
          <nav className="hidden md:flex space-x-8 text-lg font-bold tracking-wide">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8 hover:scale-110"
            >
              Home
            </Link>
            <Link
              to="/faq"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8 hover:scale-110"
            >
              FAQ
            </Link>
            <Link
              to="/team"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8 hover:scale-110"
            >
              Meet the Team
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline hover:underline-offset-8 hover:scale-110"
            >
              About Us
            </Link>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            >
              Register Now
            </a>
          </nav>

          {/* Right Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-lg">
              <img
                 src={logo2}
                alt="Logo 2"
                className="h-16 w-16 md:h-20 md:w-20 hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!open)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0-1h12a1 1 0 110 2H4a1 1 0-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col space-y-4 px-4 pt-4 pb-8 bg-gray-800">
            <Link
              to="/"
              className="text-gray-300 hover:text-white text-lg tracking-wide"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/faq"
              className="text-gray-300 hover:text-white text-lg tracking-wide"
              onClick={() => setOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/team"
              className="text-gray-300 hover:text-white text-lg tracking-wide"
              onClick={() => setOpen(false)}
            >
              Meet the Team
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white text-lg tracking-wide"
              onClick={() => setOpen(false)}
            >
              About Us
            </Link>
            <a
              href="https://forms.gle/your-google-form-link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-lg tracking-wide"
              onClick={() => setOpen(false)}
            >
              Register Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
