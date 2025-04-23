export const setupScrollAnimations = (sectionRef: React.RefObject<HTMLElement>) => {
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
};