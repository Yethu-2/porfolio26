
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20 px-4 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h1 className="text-5xl font-bold mb-8">About <span className="text-gradient">Me</span></h1>
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              I am a driven IT student at <strong>{PERSONAL_INFO.university}</strong> with a deep fascination for how software can simplify complex human experiences. 
              Growing up in Vietnam's fast-paced tech environment, I've always been inspired to contribute to the digital transformation of my community.
            </p>
            <p>
              My academic journey in the <strong>{PERSONAL_INFO.major}</strong> program has equipped me with a solid foundation in software engineering principles, 
              database management, and system architecture. I specialize in building full-stack web applications with a focus on performance and clean UI/UX.
            </p>
            <p>
              Outside of coding, I participate in RMIT's tech clubs and hackathons, where I enjoy collaborating with diverse teams to solve real-world problems. 
              I believe that technology is a tool for empowerment, and I'm constantly exploring new frontiers like Generative AI and Cloud Computing.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8">
            <div className="glass p-6 rounded-2xl border border-gray-800">
                <h3 className="text-white font-bold mb-2">University</h3>
                <p className="text-gray-400 text-sm">{PERSONAL_INFO.university}</p>
            </div>
            <div className="glass p-6 rounded-2xl border border-gray-800">
                <h3 className="text-white font-bold mb-2">Major</h3>
                <p className="text-gray-400 text-sm">{PERSONAL_INFO.major}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="aspect-square glass rounded-3xl overflow-hidden border border-gray-700 shadow-2xl">
            <img src="https://picsum.photos/seed/portrait/600/600" alt="Portrait" className="w-full h-full object-cover" />
          </div>
          
          <div className="glass p-8 rounded-3xl border border-gray-800">
            <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
            <ul className="space-y-4 text-sm">
                <li className="flex justify-between">
                    <span className="text-gray-500">Location</span>
                    <span className="text-gray-300">Ho Chi Minh City</span>
                </li>
                <li className="flex justify-between">
                    <span className="text-gray-500">Language</span>
                    <span className="text-gray-300">Vietnamese, English</span>
                </li>
                <li className="flex justify-between">
                    <span className="text-gray-500">Experience</span>
                    <span className="text-gray-300">2+ Years (Academic)</span>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
