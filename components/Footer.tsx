
import React from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-4 border-t border-gray-800 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-6">Let's connect.</h2>
          <p className="text-gray-400 mb-8">
            Always open to new opportunities, collaborations, or just talking about IT stuff at RMIT.
          </p>
          <div className="flex gap-6">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all">
              <i className="fas fa-envelope text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 transition-all">
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>

        <div className="w-full md:w-auto grid grid-cols-2 gap-x-12 gap-y-4">
          <div>
            <h4 className="font-bold text-blue-400 mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/skills" className="hover:text-white transition-colors">Skills</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-400 mb-4 uppercase text-xs tracking-widest">Location</h4>
            <p className="text-sm text-gray-400">{PERSONAL_INFO.location}</p>
            <p className="text-sm text-gray-500 mt-2">{PERSONAL_INFO.university}</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
        <p>© 2024 Built with React & Gemini AI.</p>
        <div className="flex gap-4">
          <span>RMIT Vietnam IT Student Portfolio</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
