import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can replace with your icon system

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navlinks = [
    { href: "#equipments", label: "Equipments" },
    { href: "#about-us", label: "About Us" },
    { href: "#blog", label: "Blog" },
  ];

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-3xl font-bold text-gray-800">MNTN</h2>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center gap-10">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Account */}
        <div className="hidden md:block">
          <a className="text-gray-700 font-medium hover:text-blue-600 transition" href="#account">Account</a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-4 px-6 pb-4 bg-white shadow-md rounded-lg">
          {navlinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-700 font-medium hover:text-blue-600 transition w-full"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#account"
            className="text-gray-700 font-medium hover:text-blue-600 transition w-full"
            onClick={() => setIsOpen(false)}
          >
            Account
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
