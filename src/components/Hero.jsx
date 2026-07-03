import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/content';

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4 relative bg-gray-50">
      <div className="hidden md:flex flex-col space-y-4 absolute left-0 top-1/3 bg-white p-3 shadow-md rounded-r-lg border border-gray-100">
        <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition">
          <FiLinkedin size={26} />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noreferrer" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition">
          <FiGithub size={26} />
        </a>
        {/* <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded transition">
          <FiTwitter size={26} />
        </a> */}
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 uppercase">
        {personalInfo.heroHeading}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-10 leading-relaxed font-medium">
        {personalInfo.heroBio}
      </p>
      <a href="#projects" className="bg-blue-600 text-white px-12 py-4 rounded font-bold text-lg hover:bg-blue-700 transition shadow-lg tracking-wide uppercase">
        Projects
      </a>
    </section>
  );
}