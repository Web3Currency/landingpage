import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "", theme = 'dark' }) => {
  const themeClasses = theme === 'dark' 
    ? 'glass border-white/10' 
    : 'bg-zinc-100 border-zinc-200';

  return (
    <div className={`inline-flex items-center px-6 py-2.5 rounded-full text-purple-500 font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 md:mb-8 border ${themeClasses} ${className}`}>
      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-3 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
      {children}
    </div>
  );
};

export default SectionTitle;
