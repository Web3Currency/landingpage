import React from 'react';
import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import SectionTitle from './SectionTitle';

const WhatsAppBubble: React.FC<{ name: string; message: string; time: string; theme?: 'dark' | 'light' }> = ({ name, message, time, theme = 'dark' }) => {
  const bubbleClasses = theme === 'dark'
    ? 'bg-[#1f2c33] border-white/5'
    : 'bg-[#d9fdd3] border-zinc-200 shadow-md';

  const tailClasses = theme === 'dark'
    ? 'bg-[#1f2c33]'
    : 'bg-[#d9fdd3]';

  const textClasses = theme === 'dark'
    ? 'text-[#e9edef]'
    : 'text-zinc-800';

  const footerBorderClasses = theme === 'dark'
    ? 'border-white/5'
    : 'border-black/5';

  return (
    <div className={`relative flex flex-col p-6 rounded-2xl shadow-xl border h-full ${bubbleClasses}`}>
      {/* Bubble Tail - Top Left */}
      <div className={`absolute top-0 -left-2 w-4 h-4 clip-path-bubble-tail ${tailClasses}`} />

      <div className="mb-6">
        <p className={`text-sm md:text-base font-medium leading-relaxed whitespace-normal ${textClasses}`}>
          {message}
        </p>
      </div>

      <div className={`flex justify-between items-center mt-auto pt-4 border-t ${footerBorderClasses}`}>
        <div className="flex items-center gap-2.5 opacity-70">
          <div className={`${theme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'} w-5 h-5`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          <span className={`${theme === 'dark' ? 'text-zinc-300' : 'text-zinc-600'} text-[11px] font-bold tracking-wider uppercase`}>{name}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-400'} text-[10px] font-medium lowercase`}>{time}</span>
        </div>
      </div>
    </div>
  );
};

const CommunityTestimonials: React.FC<{ theme?: 'dark' | 'light' }> = ({ theme = 'dark' }) => {
  return (
    <section id="testimonials" className={`py-24 md:py-40 relative ${theme === 'light' ? 'bg-white' : ''}`}>
      {/* Section Divider */}
      {theme === 'dark' && (
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      )}

      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left mb-16 md:mb-28"
        >
          <SectionTitle theme={theme}>Community Voice</SectionTitle>
          <p className={`${theme === 'dark' ? 'text-zinc-500' : 'text-zinc-600'} text-base md:text-xl max-w-2xl font-medium leading-relaxed`}>
            Feedback from members navigating the Web3 ecosystem through our structured framework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <WhatsAppBubble
                name={testimonial.name}
                message={testimonial.message}
                time={testimonial.time}
                theme={theme}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityTestimonials;
