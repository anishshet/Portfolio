import React, { useEffect, useRef } from 'react';
import { FileDown } from 'lucide-react';

const Resume: React.FC = () => {
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
  
  // Replace with your actual resume link
  const resumeLink = "https://drive.google.com/file/d/1GxgNxrLJmT0Qq1KZxwsmoXJ6KWQKBZdK/view?usp=sharing";

  return (
    <section id="resume" ref={sectionRef} className="section bg-white dark:bg-slate-800">
      <h2 className="section-title fade-in">📄 Resume</h2>
      
      <div className="fade-in delay-100 text-center max-w-3xl mx-auto">
        <p className="text-lg mb-8">
          Want to see my complete professional background? Download my resume for a comprehensive overview of my education, experience, skills, and achievements.
        </p>
        
        <a 
          href={resumeLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-primary inline-flex items-center gap-2"
          aria-label="Download Resume PDF"
        >
          <FileDown size={20} />
          Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;