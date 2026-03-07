import React, { useEffect, useRef, useState } from 'react';
import SectionTitle from './SectionTitle';

interface MetricProps {
  target: number;
  label: string;
  suffix?: string;
  theme?: 'dark' | 'light';
}

const AnimatedCounter: React.FC<MetricProps> = ({ target, label, suffix = "+", theme = 'dark' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target]);

  const valueClasses = theme === 'dark'
    ? 'text-white'
    : 'text-zinc-900';

  return (
    <div ref={elementRef} className="flex flex-col items-center">
      <div className={`font-sora font-bold text-4xl md:text-6xl mb-3 md:mb-4 tracking-tighter ${valueClasses}`}>
        {count}{suffix}
      </div>
      <div className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'} text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-center`}>
        {label}
      </div>
    </div>
  );
};

const CommunityImpact: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  return (
    <section id="impact" className={`py-16 md:py-40 relative border-y ${theme === 'dark' ? 'border-white/5' : 'border-zinc-100'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-left mb-12 md:mb-24">
          <SectionTitle theme={theme}>Impact</SectionTitle>
          <p className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'} text-base md:text-xl max-w-2xl font-medium leading-relaxed`}>
            Building confidence and navigating Web3 together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <AnimatedCounter 
            target={200} 
            label="Community Members" 
            theme={theme}
          />
          <AnimatedCounter 
            target={50} 
            label="TESTNET EXPLORED" 
            theme={theme}
          />
          <AnimatedCounter 
            target={100} 
            label="Users Supported" 
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
