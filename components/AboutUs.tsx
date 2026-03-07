import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import SectionTitle from './SectionTitle';
import { TRUST_PILLARS, MEMBERSHIP_CRITERIA, BRAND, ABOUT_IMAGES } from '../constants';

const AboutUs: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto px-4">
        {/* Introduction & Mission */}
        <motion.div 
          id="mission"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="mb-24 md:mb-40 text-left"
        >
          <motion.div variants={fadeInUp}>
            <SectionTitle theme="light">Our Mission</SectionTitle>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="font-sora text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-zinc-900 tracking-tighter mb-8 max-w-5xl leading-[1.1] md:leading-[1]"
          >
            Web3 Currency is a practical community built to help everyday people understand and use <span className="text-purple-600">crypto the right way.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-zinc-600 text-lg md:text-2xl font-medium leading-relaxed max-w-3xl mb-12"
          >
            We focus on breaking things down in simple terms, guiding members step by step, and creating a space where questions are welcome. Whether it’s setting up wallets, joining testnets, understanding crypto trading basics, or spotting opportunities, we help our members move with clarity and confidence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-24 rounded-[3rem] overflow-hidden aspect-[21/9] group shadow-2xl"
          >
            <img 
              src={ABOUT_IMAGES.mission} 
              alt="Our Mission" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-sm">
              <h3 className="font-sora font-bold text-2xl text-zinc-900 mb-6">Our Vision</h3>
              <p className="text-zinc-600 leading-relaxed font-medium">
                We believe blockchain should not feel complicated or out of reach. Our vision is to build a strong, informed community where people don’t just follow trends, but understand what they’re doing. Through our WhatsApp community, we’re helping members learn, participate, and position themselves early in real opportunities.
              </p>
            </div>
            <div className="bg-zinc-50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 shadow-sm">
              <h3 className="font-sora font-bold text-2xl text-zinc-900 mb-6">Our Commitment</h3>
              <p className="text-zinc-600 leading-relaxed font-medium">
                We value transparency and long-term growth. We document our trades, communicate clearly, and put community safety first. We are not here for hype. We are here to educate, support, and build something that lasts. Every update, every guide, and every P2P coordination is handled with responsibility and care.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Core Principles */}
        <section id="principles" className="py-24 md:py-40 relative border-t border-zinc-100">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="lg:col-span-1 text-left"
            >
              <SectionTitle theme="light">Core Principles</SectionTitle>
              <p className="text-zinc-600 text-lg md:text-xl leading-relaxed font-medium mb-8">
                Web3 Currency is established on the principle that digital asset navigation requires more than just information. It requires a vetted framework for execution and consistent education.
              </p>
              <div className="rounded-3xl overflow-hidden aspect-square border border-zinc-100 shadow-lg">
                <img 
                  src={ABOUT_IMAGES.principles} 
                  alt="Core Principles" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </motion.div>
            
            <div className="lg:col-span-2 space-y-4">
              {TRUST_PILLARS.map((pillar, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-center gap-6 p-6 md:p-8 bg-zinc-50 rounded-[2rem] border border-zinc-100 hover:bg-white hover:shadow-xl hover:border-purple-100 transition-all hover:scale-[1.02] duration-500 cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center font-sora font-black text-purple-600 group-hover:text-white group-hover:bg-purple-600 transition-all border border-purple-100">
                    0{idx + 1}
                  </div>
                  <h3 className="font-sora font-bold text-xl md:text-2xl tracking-tight text-zinc-400 group-hover:text-zinc-900 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Onboarding */}
        <section id="onboarding" className="py-24 md:py-40 relative border-t border-zinc-100">
          <div className="mb-12 md:mb-24">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-left"
            >
              <SectionTitle theme="light">Onboarding</SectionTitle>
              <p className="text-zinc-600 text-base md:text-xl max-w-2xl font-medium">How to get started inside Web3 Currency (W3C)</p>
            </motion.div>
          </div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {[
              { title: "Join the Community", desc: "Everything starts inside our WhatsApp group. That’s where discussions happen, updates are shared, opportunities are posted, and members interact directly. No complicated steps. Just join and observe first." },
              { title: "Introduce Yourself and Observe", desc: "New members are encouraged to introduce themselves and take time to understand how the group operates. We value respect, clarity, and active participation. Watching how things are done is part of the learning process." },
              { title: "Learn the Basics", desc: "We guide members on wallet setup, security, P2P principles, airdrop participation, and how to avoid common mistakes. Questions are allowed. No one is expected to know everything from day one." },
              { title: "Engage and Contribute", desc: "As you grow, you can participate in discussions, share insights, join research on new projects, and take part in verified P2P opportunities. The goal is steady growth, not rushing into hype." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-zinc-50 p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] h-full flex flex-col items-start text-left border border-zinc-100 hover:bg-white hover:shadow-xl transition-all"
              >
                <span className="text-4xl md:text-5xl font-sora font-black text-purple-100 mb-6 md:mb-8">0{i + 1}</span>
                <h3 className="font-sora font-bold text-lg md:text-xl mb-3 md:mb-4 tracking-tight text-zinc-900">{step.title}</h3>
                <span className="text-zinc-600 text-xs md:text-sm leading-relaxed font-medium">{step.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Alignment */}
        <section id="alignment" className="py-24 md:py-40 relative border-t border-zinc-100">
          <div className="mb-20">
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-left max-w-3xl"
            >
              <SectionTitle theme="light">Alignment</SectionTitle>
              <p className="text-zinc-600 text-base md:text-xl leading-relaxed font-medium">
                Web3 Currency is designed for individuals who value education, technical discipline, and long-term development.
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.01 }} className="bg-zinc-50 p-8 md:p-12 rounded-2xl md:rounded-[3.5rem] border border-green-100 shadow-sm">
              <h4 className="text-green-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8">This community is for</h4>
              <ul className="space-y-4 md:space-y-6">
                {MEMBERSHIP_CRITERIA.isFor.map((item, idx) => (
                  <li key={idx} className="flex gap-4 md:gap-5 text-zinc-600 font-medium leading-relaxed text-sm md:text-base">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-green-50 flex items-center justify-center border border-green-100 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp} whileHover={{ scale: 1.01 }} className="bg-zinc-50 p-8 md:p-12 rounded-2xl md:rounded-[3.5rem] border border-red-100 shadow-sm">
              <h4 className="text-red-600 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs mb-8">This community is not for</h4>
              <ul className="space-y-4 md:space-y-6">
                {MEMBERSHIP_CRITERIA.isNotFor.map((item, idx) => (
                  <li key={idx} className="flex gap-4 md:gap-5 text-zinc-500 font-medium leading-relaxed italic opacity-70 text-sm md:text-base">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-red-50 flex items-center justify-center border border-red-100 mt-0.5">
                      <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
