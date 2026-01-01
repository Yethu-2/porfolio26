
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';

// Scroll to top on route change component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="relative selection:bg-blue-500/30 min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Persistent Floating AI Assistant */}
        <AIAssistant />

        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-purple-600/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
