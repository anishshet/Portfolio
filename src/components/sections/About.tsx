import React, { useEffect, useRef } from 'react';
import { Brain, Dumbbell, Bike, Camera } from 'lucide-react';

const About: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="section bg-white dark:bg-slate-800">
      <h2 className="section-title fade-in">🧠 About Me</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-4">
          <p className="fade-in text-lg">
            I'm Anish Shet, A final-year Computer Engineering student at VIIT Pune and current Software Engineering Intern at Clarovate. I specialize in building full-stack applications using React, Node.js, and TypeScript, with a growing obsession for AI, LLMs, Agentic RAG, and OCR.
          </p>
          <p className="fade-in delay-100 text-lg">
            I like my code clean, my systems scalable, and my problems hard (DSA, not life). When I'm not coding, I'm probably at the gym, with the camera, or debugging the universe.
          </p>
          
          <div className="fade-in delay-200 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Brain className="text-cyan-500 mb-2" size={32} />
              <span className="text-center">Problem Solver</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Dumbbell className="text-cyan-500 mb-2" size={32} />
              <span className="text-center">Fitness Enthusiast</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Camera className="text-cyan-500 mb-2" size={32} />
              <span className="text-center">Photographer</span>
            </div>
          </div>
        </div>
        
        <div className="fade-in delay-300 col-span-1">
          <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Quick Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="font-medium w-24">Education:</span>
                <span>Computer Engineering, VIIT Pune</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Current:</span>
                <span>Software Engineering Intern @ Clarovate</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Interests:</span>
                <span>AI, LLMs, OCR, Full Stack Development</span>
              </li>
              <li className="flex items-start">
                <span className="font-medium w-24">Location:</span>
                <span>Pune, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;