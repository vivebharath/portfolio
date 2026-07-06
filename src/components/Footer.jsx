// import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo, socialLinks } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center md:items-start border-b border-gray-800 pb-12 mb-8">
        
        {/* Left Column: Profile & Bio */}
        <div className="mb-8 md:mb-0 max-w-md text-center md:text-left">
          <h4 className="text-xl font-bold mb-3 uppercase tracking-wider">{personalInfo.name}</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {personalInfo.footerBio}
          </p>
        </div>

        {/* Center/Right Column: Direct Connect & Info */}
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Connect Directly</h4>
          <div className="space-y-3 text-sm text-gray-400 flex flex-col items-center md:items-start">
            <a 
              href={`mailto:${personalInfo.email || 'vivebharath@gmail.com'}`} 
              className="flex items-center gap-2 hover:text-blue-500 transition duration-200"
            >
              <Mail size={16} className="text-gray-500" />
              <span>{personalInfo.email || 'vivebharath@gmail.com'}</span>
            </a>
            <a 
              href="tel:8248476834" 
              className="flex items-center gap-2 hover:text-blue-500 transition duration-200"
            >
              <Phone size={16} className="text-gray-500" />
              <span>+91 8248476834</span>
            </a>
          </div>
        </div>

        {/* Right Column: Social Profiles */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mb-4 uppercase tracking-wider">Social</h4>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition text-gray-400">
              <FiLinkedin size={22} />
            </a>
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="hover:text-blue-500 transition text-gray-400">
              <FiGithub size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright Information */}
      <div className="text-center text-gray-600 text-xs">
        © Copyright {new Date().getFullYear()}. Made by {personalInfo.name}
      </div>
    </footer>
  );
}