
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-white">Featured Work</h2>
            <p className="text-gray-400">Selection of academic and personal projects from RMIT.</p>
          </div>
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2 font-medium">
            View Github <i className="fas fa-arrow-right text-sm"></i>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative glass rounded-3xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all transform hover:-translate-y-2">
              <Link to={`/projects/${project.id}`} className="block aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </Link>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-gray-800 text-gray-400 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <Link to={`/projects/${project.id}`} className="block">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <Link 
                    to={`/projects/${project.id}`} 
                    className="text-sm font-bold text-blue-400 flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    View Case Study <i className="fas fa-chevron-right text-[10px]"></i>
                  </Link>
                  <div className="flex items-center gap-4">
                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors" title="Live Link">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors" title="Source Code">
                      <i className="fab fa-github text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
