import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from '../ui/ProjectCard';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: "CLAROVATE",
      subtitle: "Lead Generation Campaigns",
      description: [
        "Developed a web application to automate lead generation campaigns with CI/CD pipelines using Git and GitLab.",
        "Built a robust solution with React (TypeScript) frontend and NestJS backend, employing JWT and bcrypt for secure authentication, plus email automation with NodeMailer and Email Blaster.",
        "Deployed the application with Docker and used Agentic RAG for AI-based query generation."
      ],
      tags: ["React", "TypeScript", "NestJS", "CI/CD", "Docker", "JWT", "NodeMailer"],
      links: { github: "#" },
      year: "2024-2025"
    },
    {
      title: "DATA SERVICE APPLICATION",
      subtitle: "Data Processing System",
      description: [
        "Built a scalable data service app in TypeScript and Node.js for bulk CSV ingestion of company and contact records.",
        "Implemented smart field mapping (mandatory, semi-mandatory, optional) with validation and task creation for incomplete entries.",
        "Integrated OpenRouter API to auto-fill missing fields via AI prompts, cutting manual data entry by 60%."
      ],
      tags: ["TypeScript", "Node.js", "MongoDB", "OpenRouter API", "CSV Processing"],
      links: { github: "#" },
      year: "2025"
    },
    {
      title: "MEDIA-X",
      subtitle: "Social Media Analytics & Management",
      description: [
        "Designed an intuitive UI for trending analysis and content uploads, improving user engagement by 20%.",
        "Built a dynamic analytics dashboard using Chart.js and integrated APIs from Google Trends, enabling trend tracking.",
        "Automated content posting across platforms like YouTube, Instagram, X, and Facebook, reducing manual effort by 50%."
      ],
      tags: ["React", "Tailwind CSS", "Node.js", "Flask", "Axios", "Chart.js", "API Integration"],
      links: {  github: "#" },
      year: "2023-2024"
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="section bg-white dark:bg-slate-800">
      <h2 className="section-title fade-in">🧪 Projects</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project}
            className={`fade-in delay-${(index + 1) * 100}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;