
import React from 'react';
import Skills from '../components/Skills';

const SkillsPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h1 className="text-5xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mb-12">
            My skill set is ever-evolving. Here is a breakdown of the technologies I've mastered and those I'm currently exploring.
        </p>
      </div>
      <Skills />
      
      {/* Additional Skills Details */}
      <section className="py-12 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
         <div className="glass p-10 rounded-3xl border border-gray-800">
            <i className="fas fa-terminal text-3xl text-blue-500 mb-6"></i>
            <h3 className="text-2xl font-bold mb-4">Development Workflow</h3>
            <p className="text-gray-400 leading-relaxed">
                I strongly believe in agile methodologies and CI/CD pipelines. My workflow involves rigorous testing, version control with Git, and containerization for consistent deployment environments.
            </p>
         </div>
         <div className="glass p-10 rounded-3xl border border-gray-800">
            <i className="fas fa-microchip text-3xl text-purple-500 mb-6"></i>
            <h3 className="text-2xl font-bold mb-4">Core Principles</h3>
            <p className="text-gray-400 leading-relaxed">
                Writing clean, maintainable, and self-documenting code is my priority. I follow SOLID principles and design patterns to ensure my solutions are scalable and robust.
            </p>
         </div>
      </section>
    </div>
  );
};

export default SkillsPage;
