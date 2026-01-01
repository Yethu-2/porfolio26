
import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-blue-400 font-medium tracking-widest uppercase mb-4 text-sm sm:text-base animate-pulse">
          Building Future-Ready Solutions
        </h2>
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
          Hello, I'm <span className="text-gradient">a Creative Developer</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Currently studying <span className="text-white font-semibold">IT at {PERSONAL_INFO.university}</span>. 
          Bridging the gap between design and technology.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/projects"
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl shadow-white/10"
          >
            Explore Projects
          </Link>
          <Link
            to="/contact"
            className="w-full sm:w-auto px-8 py-4 glass border border-gray-700 text-white font-bold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
