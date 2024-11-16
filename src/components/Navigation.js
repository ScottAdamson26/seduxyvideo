import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-neutral-950 text-white shadow-md">
      <div className="container mx-auto xl:max-w-8xl lg:max-w-7xl flex items-center justify-between py-8 px-4">
        {/* Section 1: Expandable Menu and Logo */}
        <div className="flex items-center justify-start w-1/3 space-x-4">
          {/* Expandable Icon */}
          <div className="cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </div>

          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-widest bg-gradient-to-br from-customBlue-light via-customBlue to-customBlue-dark inline-block text-transparent bg-clip-text">
            SEDUXY
          </div>
        </div>

        {/* Section 2: Search Bar */}
        <div className="hidden md:flex justify-center w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-lg px-6 py-3 rounded-full bg-neutral-800 text-white placeholder-white focus:outline-none"
          />
        </div>

        {/* Section 3: Profile Icon */}
        <div className="flex items-center justify-end w-1/3 opacity-40">
          <FontAwesomeIcon icon={faUserCircle} size="2x" className="cursor-pointer" />
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
