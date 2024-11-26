import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navigation = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 text-white shadow-md">
      <div className="container mx-auto xl:max-w-8xl lg:max-w-7xl flex items-center justify-between p-4">
        {/* Section 1: Expandable Menu and Logo */}
        <div className="flex items-center justify-start w-1/3 space-x-4">
          {/* Expandable Icon */}
          <div
            className="cursor-pointer md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </div>

          {/* Logo */}
          <Link to="/" className="text-2xl font-extrabold tracking-widest straightGradient inline-block text-transparent bg-clip-text">
            SEDUXY
          </Link>
        </div>

        {/* Section 2: Search Bar */}
        <div className="hidden md:flex justify-center w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-lg px-6 py-2 rounded-full bg-neutral-800 text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Section 3: Profile Icon or Sign In Button */}
        <div className="flex items-center justify-end w-1/3">
          {isLoggedIn ? (
            <FontAwesomeIcon
              icon={faUserCircle}
              size="2x"
              className="cursor-pointer hover:opacity-75"
            />
          ) : (
            <button className="px-4 py-2 rounded-full straightGradient text-white font-medium">
              Sign In
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-gray-700 text-white space-y-4 p-4">
          <li className="hover:text-gray-400 cursor-pointer">Home</li>
          <li className="hover:text-gray-400 cursor-pointer">About</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
