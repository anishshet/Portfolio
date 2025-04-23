import React from 'react';

interface SkillCategoryProps {
  category: {
    name: string;
    skills: string[];
  };
  className?: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-600 dark:text-cyan-400">{category.name}</h3>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => (
            <span 
              key={index} 
              className="inline-block px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-sm font-medium m-1"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;