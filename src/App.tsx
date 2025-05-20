import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Resume from './components/sections/Resume';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen text-purple-100">
      <div className="scanlines"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;