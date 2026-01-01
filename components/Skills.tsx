
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

      <div className="space-y-16">
        {categories.map((category) => (
          <div key={category}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-xl font-bold text-white uppercase tracking-widest whitespace-nowrap">
                {category}
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-gray-700 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {SKILLS.filter(s => s.category === category).map((skill) => (
                <div 
                  key={skill.name} 
                  className="group relative glass p-6 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-1"
                >
                  {/* Skill Icon */}
                  <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                    <i 
                      className={`${skill.icon} text-4xl`}
                      style={{ color: skill.color }}
                    ></i>
                  </div>
                  
                  {/* Skill Name */}
                  <span className="text-sm font-semibold text-gray-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>

                  {/* Subtle Level Indicator (Hover Only) */}
                  <div className="mt-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full bg-gray-900 rounded-full h-1 overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${skill.level}%`, 
                          backgroundColor: skill.color || '#3b82f6' 
                        }}
                      ></div>
                    </div>
                    <span className="text-[10px] text-gray-500 mt-1 block uppercase font-bold tracking-tighter">
                      Level: {skill.level}%
                    </span>
                  </div>

                  {/* Decorative Glow */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                    style={{ backgroundColor: skill.color }}
                  ></div>
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
