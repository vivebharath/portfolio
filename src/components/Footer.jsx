import React from 'react';
import { Mail } from 'lucide-react';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-800 pb-12 mb-8">
        <div className="mb-8 md:mb-0 max-w-md text-center md:text-left">
          <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">{personalInfo.name}</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {personalInfo.footerBio}
          </p>
        </div>
        <div>
          <h4 className="text-xl font-bold mb-4 uppercase tracking-wider text-center md:text-left">Social</h4>
          <div className="flex space-x-4">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FiLinkedin size={22} /></a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition"><FiGithub size={22} /></a>
            {/* <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-500 transition"><Mail size={22} /></a> */}
          </div>
        </div>
      </div>
      <div className="text-center text-gray-600 text-xs">
        © Copyright {new Date().getFullYear()}. Made by {personalInfo.name}
      </div>
    </footer>
  );
}