import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { SOCIAL_LINKS, BRAND } from '../constants';

interface NavbarProps {
  onLogoClick?: () => void;
  onNavigate?: (view: 'home' | 'privacy' | 'resources' | 'about') => void;
  currentView?: 'home' | 'privacy' | 'resources' | 'about';
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const { scrollY, scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Apple-style smooth transitions
  const height = useTransform(scrollY, [0, 100], [80, 64]);
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    [currentView === 'home' ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.95)', 'rgba(0, 0, 0, 0.95)']
  );
  const backdropBlur = useTransform(
    scrollY, 
    [0, 100], 
    [currentView === 'home' ? 'blur(0px)' : 'blur(24px)', 'blur(24px)']
  );

  const WHATSAPP_LINK = SOCIAL_LINKS.whatsapp;

  const navItems = [
    { label: 'Home', href: '#home', type: 'home' },
    { 
      label: 'About Us', 
      href: '#about', 
      type: 'view', 
      view: 'about',
      children: [
        { label: 'Our Mission', href: '#mission', type: 'view', view: 'about' },
        { label: 'Core Principles', href: '#principles', type: 'view', view: 'about' },
        { label: 'Onboarding', href: '#onboarding', type: 'view', view: 'about' },
        { label: 'Alignment', href: '#alignment', type: 'view', view: 'about' },
        { label: 'Privacy', href: '#privacy', type: 'view', view: 'privacy' },
      ]
    },
    { label: 'Framework', href: '#ecosystem', type: 'section' },
    { label: 'W3C P2P DESK', href: '#liquidity', type: 'section' },
    { label: 'Pi App', href: '#pi-vision', type: 'section' },
  ];

  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleNavClick = (e: React.MouseEvent, item: any) => {
    if (item.type === 'home') {
      e.preventDefault();
      if (onNavigate) onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    if (item.type === 'view') {
      e.preventDefault();
      if (onNavigate) onNavigate(item.view);
      
      if (item.href.startsWith('#') && item.href.length > 1) {
        const id = item.href.substring(1);
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 200);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      setIsOpen(false);
      setHoveredItem(null);
      return;
    }

    if (currentView !== 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('home');
      // Small delay to allow home to render before scrolling
      setTimeout(() => {
        const id = item.href.startsWith('#') ? item.href.substring(1) : item.href;
        const element = document.getElementById(id) || document.querySelector(item.href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else if (item.href.startsWith('#')) {
      e.preventDefault();
      const id = item.href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsOpen(false);
    setHoveredItem(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.type === 'section')
        .map(item => item.href.substring(1));
      
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(`#${currentSection}`);
      } else if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      style={{ height, backgroundColor, backdropBlur }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 will-change-[height,background-color,backdrop-filter]"
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-green-500 origin-left z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => {
              if (onLogoClick) {
                onLogoClick();
              } else if (onNavigate) {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "anticipate" }}
              className="w-10 h-10 md:w-11 md:h-11 bg-black rounded-xl flex items-center justify-center font-sora font-black text-xs md:text-sm text-white shadow-2xl border border-white/10 group-hover:border-green-500/50 transition-colors overflow-hidden"
            >
              {BRAND.logo ? (
                <img src={BRAND.logo} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
              ) : (
                "W3C"
              )}
            </motion.div>
            <div className="flex flex-col">
              <span className="font-sora font-bold text-lg md:text-xl tracking-tight leading-none">{BRAND.name}</span>
              <span className="text-[8px] font-bold text-zinc-500 uppercase tracking-[0.3em] mt-1 hidden sm:block">Web3 Currency Community</span>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-1">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-1 mr-6 border-r border-white/10 pr-6"
            >
              {navItems.map((item, idx) => (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={() => item.children && setHoveredItem(item.label)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.a 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                    className={`px-4 py-2 rounded-lg transition-all text-[10px] font-bold tracking-[0.15em] uppercase relative group flex items-center gap-1.5 ${
                      (currentView === 'home' && activeSection === item.href) || 
                      (item.type === 'home' && currentView === 'home' && activeSection === '') ||
                      (item.type === 'view' && currentView === item.view)
                        ? 'text-white' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <svg className={`w-3 h-3 transition-transform duration-300 ${hoveredItem === item.label ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    {((currentView === 'home' && activeSection === item.href) || 
                      (item.type === 'home' && currentView === 'home' && activeSection === '') ||
                      (item.type === 'view' && currentView === item.view)) && (
                      <motion.div 
                        layoutId="activeNav"
                        className="absolute bottom-1 left-4 right-4 h-[1px] bg-green-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && hoveredItem === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-0 mt-2 w-48 glass border border-white/10 rounded-xl overflow-hidden shadow-2xl py-2"
                      >
                        {item.children.map((child: any) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child)}
                            className="block px-4 py-3 text-[10px] font-bold tracking-widest uppercase text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4"
            >
              <motion.a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(34, 197, 94, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-2.5 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all shadow-lg shadow-green-900/20"
              >
                Join Community
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-[9px] font-bold tracking-widest uppercase"
            >
              Join
            </a>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-zinc-400 p-2 glass rounded-lg border-white/10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "circOut" }}
            className="lg:hidden absolute top-full left-0 right-0 glass border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="px-4 pt-4 pb-12 space-y-1 bg-black/95 backdrop-blur-3xl max-h-[80vh] overflow-y-auto">
              {navItems.map((item, idx) => (
                <React.Fragment key={item.label}>
                  <motion.a 
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`block px-6 py-5 rounded-2xl text-sm font-bold tracking-[0.2em] uppercase transition-all border border-transparent ${
                      (currentView === 'home' && activeSection === item.href) || 
                      (item.type === 'home' && currentView === 'home' && activeSection === '') ||
                      (item.type === 'view' && currentView === item.view)
                        ? 'bg-white/5 text-white border-white/10' 
                        : 'text-zinc-500 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {((currentView === 'home' && activeSection === item.href) || 
                        (item.type === 'home' && currentView === 'home' && activeSection === '') ||
                        (item.type === 'view' && currentView === item.view)) && (
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                      )}
                    </div>
                  </motion.a>
                  {item.children && (
                    <div className="pl-8 space-y-1 mt-1 mb-4">
                      {item.children.map((child: any) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={(e) => handleNavClick(e, child)}
                          className={`block px-6 py-4 rounded-xl text-[10px] font-bold tracking-widest uppercase transition-all ${
                            currentView === child.view ? 'text-white bg-white/5' : 'text-zinc-600 hover:text-zinc-400'
                          }`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </React.Fragment>
              ))}
              
              <div className="pt-8 px-2">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-sm tracking-[0.3em] uppercase text-center shadow-lg shadow-green-900/20"
                >
                  Join Community
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
