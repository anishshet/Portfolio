import React, { useEffect, useRef } from 'react';
import SkillCategory from '../ui/SkillCategory';

const Skills: React.FC = () => {
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

  const skillCategories = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "C++"]
    },
    {
      name: "Frontend",
      skills: ["React", "TailwindCSS", "HTML5", "CSS3"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "Docker", "Vercel", "Netlify", "PuTTY", "Caddy"]
    },
    {
      name: "AI/Cloud",
      skills: ["Agentic RAG", "OCR", "LLMs", "AWS Basics"]
    },
    {
      name: "Others",
      skills: ["Microservices", "Agile", "Postman"]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="section bg-slate-50 dark:bg-slate-900">
      <h2 className="section-title fade-in">🛠️ Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategory 
            key={index} 
            category={category}
            className={`fade-in delay-${(index % 3 + 1) * 100}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;