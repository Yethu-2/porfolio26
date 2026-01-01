
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Proficiency</h2>
        <p className="text-gray-400">Continuous learning and growth at RMIT Vietnam</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category} className="glass p-8 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-bold mb-6 text-blue-400 border-b border-gray-700 pb-2">
              {category}
            </h3>
            <div className="space-y-6">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="bg-gradient-to-right from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%`, background: 'linear-gradient(90deg, #3b82f6, #a855f7)' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
