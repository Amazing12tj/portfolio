import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Services", to: "/services" },
    { name: "Projects", to: "/projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-60 text-white backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Samuel A. Olabunmi</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="hover:text-blue-400 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-blue-500 transition-all"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer - NOW wrapped in md:hidden */}
      <div className="md:hidden">
        {isOpen && (
          <div className="bg-black bg-opacity-90 px-6 pb-4 pt-2 flex flex-col gap-4">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-lg border-b border-gray-700 pb-2"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 mt-2 px-4 py-2 text-center rounded-full font-semibold hover:bg-blue-500 transition-all"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
