
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 text-center h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate('/projects')} className="text-blue-400 hover:underline">
          Go back to projects
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 sm:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/projects" className="inline-flex items-center gap-2 text-blue-400 mb-4 hover:gap-3 transition-all">
              <i className="fas fa-arrow-left"></i> Back to Gallery
            </Link>
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-3">
              {project.tech.map(t => (
                <span key={t} className="px-3 py-1 glass border border-gray-700 rounded-full text-xs font-semibold text-blue-400">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-16 mt-12 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <i className="fas fa-info-circle text-blue-500"></i> Project Overview
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </section>

          {project.features && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="glass p-6 rounded-2xl border border-gray-800 flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 text-xs font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-8">
          <div className="glass p-8 rounded-3xl border border-gray-800 shadow-xl">
            <h3 className="text-xl font-bold mb-6 border-b border-gray-700 pb-4">Project Metadata</h3>
            <div className="space-y-6">
              <div>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">My Role</span>
                <span className="text-white font-medium">{project.role || 'Developer'}</span>
              </div>
              <div>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1">Year</span>
                <span className="text-white font-medium">{project.year || '2024'}</span>
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <a 
                  href={project.link} 
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-colors"
                >
                  <i className="fas fa-external-link-alt text-sm"></i> Live Demo
                </a>
                <a 
                  href={project.github} 
                  className="flex items-center justify-center gap-2 w-full py-3 glass hover:bg-white/5 rounded-xl font-bold transition-colors border border-gray-700"
                >
                  <i className="fab fa-github text-lg"></i> Source Code
                </a>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-gray-800 bg-gradient-to-br from-blue-900/10 to-indigo-900/10">
            <h3 className="font-bold mb-3 text-lg">Interested in this project?</h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              I'm available to discuss technical implementations, system design, or potential adaptations for your needs.
            </p>
            <Link to="/contact" className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Contact Me <i className="fas fa-chevron-right text-[10px]"></i>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
