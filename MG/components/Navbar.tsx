import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, FileText, Briefcase, Award, User, Sun, Moon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Sync local state with document class
    setIsDark(document.documentElement.classList.contains('dark'));

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navItems = [
    { name: 'About', href: '#about', icon: <User size={16} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={16} /> },
    { name: 'Achievements', href: '#achievements', icon: <Award size={16} /> },
    { name: 'Contact', href: '#contact', icon: <FileText size={16} /> },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div 
        className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] pointer-events-none 
        ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
        ${scrolled ? 'pt-4' : 'pt-6'}`}
      >
        
        <nav className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] 
          ${scrolled 
            ? 'w-[90%] md:w-auto px-6 py-3 bg-white/80 dark:bg-slate-900/80 border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-black/5 dark:shadow-black/20' 
            : 'w-[95%] md:w-auto px-8 py-5 bg-transparent border-transparent shadow-none'
          } 
          backdrop-blur-xl border rounded-full flex items-center justify-between gap-6 md:gap-12 relative overflow-hidden group`}
        >
          {/* Subtle shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

          {/* Logo */}
          <div className="flex-shrink-0 cursor-default">
            <span className={`font-serif font-bold tracking-wider transition-all duration-300 ${scrolled ? 'text-lg' : 'text-xl'} text-slate-900 dark:text-white`}>
              MG<span className="text-gold-500">.</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors group/item overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </span>
                <span className="absolute inset-0 bg-slate-900/5 dark:bg-white/10 rounded-full scale-0 group-hover/item:scale-100 transition-transform duration-300"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             {/* Theme Toggle */}
             <button 
               onClick={toggleTheme}
               className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
               aria-label="Toggle Theme"
             >
               {isDark ? <Sun size={20} /> : <Moon size={20} />}
             </button>

            {/* Contact Action */}
            <div className="hidden md:block">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gold-500 dark:hover:bg-gold-500 hover:text-white dark:hover:text-white transition-colors duration-300"
              >
                Hire Me
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none transition-colors"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl transition-opacity duration-300 md:hidden flex flex-col items-center justify-center space-y-8 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className="flex flex-col items-center gap-2 text-2xl font-serif text-slate-600 dark:text-slate-300 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
          >
            <span className="p-3 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">{item.icon}</span>
            {item.name}
          </a>
        ))}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-8 right-8 text-slate-500 hover:text-slate-900 dark:hover:text-white"
        >
          <X size={32} />
        </button>
      </div>
    </>
  );
};

export default Navbar;