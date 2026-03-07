import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'ecosystem', label: 'Framework' },
  { id: 'impact', label: 'Impact' },
  { id: 'liquidity', label: 'W3C P2P DESK' },
  { id: 'pi-vision', label: 'Pi App' },
  { id: 'process', label: 'Onboarding' },
];

const SectionNavigator: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll > 500);

      const currentSection = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = window.innerHeight * 0.3;
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (currentScroll < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6 items-end p-4 rounded-3xl bg-black/10 backdrop-blur-sm border border-white/5"
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group flex items-center gap-4 focus:outline-none"
            >
              <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 drop-shadow-md ${
                activeSection === section.id ? 'text-white opacity-100' : 'text-zinc-400 opacity-0 group-hover:opacity-100'
              }`}>
                {section.label}
              </span>
              <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                activeSection === section.id 
                  ? 'bg-green-500 scale-150 shadow-[0_0_10px_rgba(34,197,94,0.5)]' 
                  : 'bg-zinc-500 group-hover:bg-zinc-300'
              }`} />
            </button>
          ))}
          
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 w-10 h-10 glass rounded-xl flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/20 transition-all group"
          >
            <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionNavigator;
