
import React from 'react';
import Hero from '../components/Hero';
import { PROJECTS } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Short Preview Sections */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-white">Selected Works</h2>
            <p className="text-gray-400">A glimpse into my recent development projects at RMIT.</p>
          </div>
          <Link to="/projects" className="text-blue-400 hover:underline hidden sm:block">View all projects</Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.slice(0, 2).map((project) => (
            <div key={project.id} className="glass rounded-3xl overflow-hidden group border border-gray-800 hover:border-blue-500/30 transition-all">
                <Link to={`/projects/${project.id}`} className="aspect-video relative block overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-60"></div>
                </Link>
                <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map(t => (
                        <span key={t} className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">{t}</span>
                      ))}
                    </div>
                    <Link to={`/projects/${project.id}`}>
                      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    </Link>
                    <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>
                    <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:translate-x-1 transition-transform">
                        Case Study <i className="fas fa-arrow-right text-xs"></i>
                    </Link>
                </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
