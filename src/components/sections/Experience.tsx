import React, { useEffect, useRef } from 'react';
import { Calendar, CheckSquare } from 'lucide-react';

const Experience: React.FC = () => {
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
    <section id="experience" ref={sectionRef} className="section bg-slate-50 dark:bg-slate-900">
      <h2 className="section-title fade-in">💼 Experience</h2>
      
      <div className="fade-in delay-100 card p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          <h3 className="text-xl font-bold">Software Engineering Intern</h3>
          <div className="md:ml-auto flex items-center text-sm text-slate-600 dark:text-slate-400">
            <Calendar size={16} className="mr-1" />
            Jan 2025 – Present
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <h4 className="text-lg font-semibold text-cyan-600 dark:text-cyan-400">Clarovate</h4>
        </div>
        
        <ul className="space-y-4">
          {[
            "Built and maintained scalable full-stack features for the internal data platform.",
            "Implemented CSV upload functionality with dynamic field mapping, task creation, and validation logic.",
            "Worked on both frontend (React, Tailwind) and backend (Node.js, MongoDB) of portal.clarovate.io.",
            "Integrated task tracking systems and optimized API interactions using REST principles."
          ].map((item, index) => (
            <li key={index} className="flex gap-3">
              <CheckSquare size={20} className="flex-shrink-0 text-cyan-500 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        <div className="mt-6 flex flex-wrap gap-2">
          <span className="tag">React</span>
          <span className="tag">Tailwind CSS</span>
          <span className="tag">Node.js</span>
          <span className="tag">MongoDB</span>
          <span className="tag">RESTful APIs</span>
          <span className="tag">TypeScript</span>
        </div>
      </div>
    </section>
  );
};

export default Experience;