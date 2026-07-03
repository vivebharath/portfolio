import React from 'react';
import { Menu } from 'lucide-react';
import { personalInfo } from '../data/content';

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-bold uppercase tracking-wider flex items-center hover:text-blue-600 transition cursor-pointer">
          <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3 text-sm">
            {personalInfo.initials}
          </span>
          {personalInfo.name}
        </div>
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-600">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
          <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
        </nav>
        <Menu className="md:hidden cursor-pointer text-gray-800" size={28} />
      </div>
    </header>
  );
}