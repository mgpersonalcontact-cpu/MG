import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  // Initialize theme based on preference
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-200 selection:bg-gold-500 selection:text-white transition-colors duration-300">
      
      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Achievements />
        </main>
        <Contact />
      </div>
    </div>
  );
}

export default App;