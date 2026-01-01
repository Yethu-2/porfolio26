
import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="max-w-7xl mx-auto px-4 mt-10">
        <h1 className="text-5xl font-bold mb-4">Project <span className="text-gradient">Gallery</span></h1>
        <p className="text-gray-400 text-xl max-w-2xl mb-12">
            A comprehensive list of my software development journey, ranging from university assignments to personal experiments.
        </p>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;
