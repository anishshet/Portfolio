import React from 'react';
import { Code, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-5 w-5 text-cyan-400" />
          <span className="text-xl font-bold text-cyan-400">Anish Shet</span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">About</a>
          <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-colors">Experience</a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#resume" className="text-slate-300 hover:text-cyan-400 transition-colors">Resume</a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">Contact</a>
        </div>
        
        <div className="text-slate-400 flex items-center gap-1">
          <span>© {currentYear} Anish Shet. Built with</span>
          <Heart className="h-4 w-4 text-red-500 inline" />
          <span>using React & Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;