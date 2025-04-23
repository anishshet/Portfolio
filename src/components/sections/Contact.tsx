import React, { useEffect, useRef } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-cyan-500" />,
      label: "Email",
      value: "anishshet5@gmail.com",
      link: "mailto:anishshet5@gmail.com"
    },
    {
      icon: <Linkedin className="h-6 w-6 text-cyan-500" />,
      label: "LinkedIn",
      value: "linkedin.com/in/anishshet",
      link: "https://linkedin.com/in/anishshet"
    },
    {
      icon: <Github className="h-6 w-6 text-cyan-500" />,
      label: "GitHub",
      value: "github.com/anishshet",
      link: "https://github.com/anishshet"
    },
    {
      icon: <MapPin className="h-6 w-6 text-cyan-500" />,
      label: "Location",
      value: "Pune, Maharashtra",
      link: null
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="section bg-slate-50 dark:bg-slate-900">
      <h2 className="section-title fade-in">📬 Contact Info</h2>
      
      <div className="fade-in delay-100 max-w-3xl mx-auto">
        <p className="text-lg text-center mb-12">
          Interested in working together or have questions? Feel free to reach out!
        </p>
        
        <div className="grid sm:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <div 
              key={index} 
              className="card p-6 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-medium mb-1">{item.label}</h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-600 dark:text-cyan-400 hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;