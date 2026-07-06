import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Navbar() {
  // State hook to handle whether the mobile drawer layout is visible
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        
        {/* Logo Initials Badge */}
        <div className="text-xl font-bold uppercase tracking-wider flex items-center hover:text-blue-600 transition cursor-pointer">
          <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-sm">
            {personalInfo.initials}
          </span>
          {personalInfo.name}
        </div>

        {/* Desktop Navigation Link Cluster (Hidden on Mobile viewports) */}
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-600">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>

        {/* Mobile Action Toggle Controller Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden cursor-pointer text-gray-800 p-1 hover:text-blue-600 transition focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Dynamic Mobile Dropdown Draw Overlay Container */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-100 py-4 px-8 flex flex-col space-y-4 font-semibold text-gray-600 shadow-inner animate-fadeIn">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-600 transition py-1"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-600 transition py-1"
          >
            About
          </a>
          <a 
            href="#projects" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-600 transition py-1"
          >
            Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="hover:text-blue-600 transition py-1"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}