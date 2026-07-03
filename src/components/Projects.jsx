import React from 'react';
import { Activity, ShieldAlert, Files, Home } from 'lucide-react';
import { projectsData } from '../data/content';

// A simple helper function to map the string from data to the actual icon component
const getIcon = (iconName) => {
  switch (iconName) {
    case 'Activity': return <Activity size={80} className="text-blue-600" />;
    case 'ShieldAlert': return <ShieldAlert size={80} className="text-blue-600" />;
    case 'Files': return <Files size={80} className="text-blue-600" />;
    case 'Home': return <Home size={80} className="text-blue-600" />;
    default: return <Files size={80} className="text-blue-600" />;
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wider">Projects</h2>
          <div className="w-8 h-1 bg-blue-600 mx-auto rounded mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg font-medium">
            Here you will find a selection of enterprise applications and solutions I have developed throughout my career.
          </p>
        </div>
        
        <div className="space-y-20">
          {projectsData.map((project, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Updated Thematic Icon Box */}
              <div className="bg-blue-50 border border-blue-100 w-full aspect-video rounded shadow-sm overflow-hidden flex flex-col items-center justify-center transition hover:bg-blue-100">
                {getIcon(project.iconName)}
              </div>
              
              <div className="md:pl-10">
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-sm font-bold text-gray-500 mb-8 uppercase tracking-wider">
                  Stack: {project.tech}
                </p>
                {/* Notice: You can link this button to an expanded case study page later if you want */}
                <a href="#contact" className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 transition shadow-md inline-block uppercase tracking-wide">
                  Discuss Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}