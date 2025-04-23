import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectLink {
  demo?: string;
  github?: string;
}

interface Project {
  title: string;
  subtitle: string;
  description: string[];
  tags: string[];
  links: ProjectLink;
  year: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className }) => {
  return (
    <div className={`card ${className} h-full flex flex-col`}>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="text-sm text-slate-500 dark:text-slate-400">{project.year}</span>
        </div>
        <h4 className="text-lg text-cyan-600 dark:text-cyan-400 mb-4">{project.subtitle}</h4>
        
        <ul className="mb-4 space-y-2 flex-1">
          {project.description.map((point, index) => (
            <li key={index} className="text-sm text-slate-700 dark:text-slate-300">
              • {point}
            </li>
          ))}
        </ul>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
                aria-label={`GitHub repository for ${project.title}`}
              >
                <Github size={18} />
                <span className="text-sm">Code</span>
              </a>
            )}
            
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors flex items-center gap-1"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={18} />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;