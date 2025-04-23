import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Terminal, Database, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = sectionRef.current?.querySelectorAll('.fade-in');
    animatedElements?.forEach((el) => observer.observe(el));

    return () => {
      animatedElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center"
      style={{ paddingTop: '80px' }}
    >
      <div className="section text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 flex items-center justify-center animate-float">
              <Code className="h-12 w-12 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <Database className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
              <Cpu className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        <h1 className="fade-in font-bold mb-4">
          Anish Shet
        </h1>
        <h2 className="fade-in delay-100 text-2xl md:text-3xl mb-6 text-cyan-600 dark:text-cyan-400">
          Software Engineer & Full-Stack Developer
        </h2>
        <p className="fade-in delay-200 max-w-2xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10">
          I build full-stack applications with React, Node.js, and TypeScript, 
          with a growing passion for AI, LLMs, and Agentic RAG.
        </p>
        <div className="fade-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-500 dark:text-slate-500 dark:hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll down to About section"
      >
        <ChevronDown size={32} />
      </a>
      
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-24 -left-48 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-400/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default Hero;