import React, { useState } from 'react';
import { Activity, ShieldAlert, Files, Home, Calendar, Briefcase, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { projectsData } from '../data/content';

// Dynamic icon mapper matching your unique enterprise project IDs
const getProjectIcon = (id) => {
  switch (id) {
    case 1: return <Activity size={40} className="text-blue-600" />;       // WINGS (Warranty analysis)
    case 2: return <ShieldAlert size={40} className="text-blue-600" />; // VIM-HSE (Incident Management)
    case 3: return <Files size={40} className="text-blue-600" />;       // SCM (Document System)
    case 4: return <Home size={40} className="text-blue-600" />;        // Homehub (Smart Locks)
    default: return <Files size={40} className="text-blue-600" />;
  }
};

export default function Projects() {
  // Simple state dictionary to manage individual project breakdown toggles
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (id) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-28 px-6 bg-gray-50 text-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-24">
          <h2 className="text-4xl font-extrabold mb-4 uppercase tracking-wider text-slate-900">
            Featured Projects
          </h2>
          <div className="w-12 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive look at the production-ready enterprise architectures, frontend systems, and solutions I have built throughout my engineering career.
          </p>
        </div>
        
        {/* Projects Timeline/Stack Container */}
        <div className="space-y-16">
          {projectsData.map((project) => {
            const isExpanded = !!expandedProjects[project.id];
            
            return (
              <div 
                key={project.id} 
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Primary Card Header Grid */}
                <div className="p-8 grid lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Context Branding Box */}
                  <div className="lg:col-span-4 flex flex-row lg:flex-col gap-5 items-center lg:items-start lg:border-r lg:border-gray-100 lg:pr-8">
                    <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      {getProjectIcon(project.id)}
                    </div>
                    <div>
                      <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50/60 px-2.5 py-1 rounded mb-2">
                        {project.company}
                      </span>
                      <h4 className="text-xl font-bold text-slate-800 leading-tight">
                        {project.title}
                      </h4>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Info Summary Block */}
                  <div className="lg:col-span-8 flex flex-col justify-between h-full">
                    <div>
                      {/* Sub-Header Employment Metrics Meta Row */}
                      <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-gray-500 font-medium mb-4">
                        <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                          <Briefcase size={16} className="text-blue-500" />
                          {project.role}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={16} />
                          {project.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={16} />
                          {project.location}
                        </span>
                      </div>

                      {/* Main Summary Description */}
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    {/* Styled Stack Environment Badges */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-50">
                      {project.environment.map((techItem, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gray-100 hover:bg-gray-200 transition text-gray-700 text-xs font-semibold px-3 py-1.5 rounded-md"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interactive Expandable Segment: Core Corporate Contributions */}
                <div className="border-t border-gray-100 bg-slate-50/50">
                  <button 
                    onClick={() => toggleProject(project.id)}
                    className="w-full px-8 py-4 flex items-center justify-between text-slate-700 hover:text-blue-600 hover:bg-blue-50/30 transition font-bold text-sm tracking-wide"
                  >
                    <span>{isExpanded ? "HIDE RESPONSIBILITIES" : "VIEW CONTRIBUTIONS & RESPONSIBILITIES"}</span>
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>

                  {isExpanded && (
                    <div className="px-8 pb-8 pt-2 animate-fadeIn">
                      <ul className="space-y-3.5">
                        {project.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}