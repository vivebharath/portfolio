import React from 'react';
import { aboutData } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">About Me</h2>
          <div className="w-8 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get to know me!</h3>
            <div className="text-gray-600 space-y-4 text-lg leading-relaxed mb-8">
              {aboutData.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
            <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition shadow-md inline-block uppercase tracking-wide">
              Contact
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-3">
              {aboutData.skills.map((skill, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 px-5 py-2.5 rounded-md font-semibold text-sm tracking-wide">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}