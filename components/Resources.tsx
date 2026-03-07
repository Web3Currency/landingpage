import React, { useEffect } from 'react';
import { motion } from 'motion/react';

const Resources: React.FC = () => {
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

  const pdfGuides = [
    {
      title: "Understanding Crypto Trading Basics",
      description: "A simple guide to candlestick patterns and key levels.",
      link: "/resources/Understanding-Crypto-Trading-Basics-W3C.pdf",
      thumbnail: "https://images.unsplash.com/photo-1611974260368-63bcdd336e4d?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  const videoTutorials = [
    {
      title: "Web3 Currency Community Intro",
      description: "Master crypto & Web3 with trusted community support. Safe P2P trading, beginner-friendly education, and verified opportunities.",
      link: "https://youtu.be/Lp_nRTHX654?si=IpttpLTdYfHcGqRW",
      thumbnail: "https://images.unsplash.com/photo-1579016863193-94520b7cae42?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="mb-20 md:mb-32 text-left"
        >
          <div className="inline-flex items-center px-4 py-1.5 glass rounded-full text-green-500 font-bold uppercase tracking-[0.3em] text-[10px] border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            Knowledge Hub
          </div>
          <h1 className="font-sora text-4xl md:text-7xl font-black text-white tracking-tighter mb-8 max-w-4xl leading-[1.1]">Educational Resources</h1>
          <p className="text-zinc-500 text-lg md:text-2xl font-medium leading-relaxed max-w-2xl">
            Empowering our community with the knowledge needed to navigate the Web3 landscape safely and effectively.
          </p>
        </motion.div>

        {/* PDF Section */}
        <section className="mb-24 md:mb-40">
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="w-1.5 h-8 bg-green-500 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.3)]" />
            <h2 className="font-sora text-2xl md:text-4xl font-bold text-white tracking-tight">Downloadable Guides</h2>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {pdfGuides.map((guide, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl flex flex-col h-full border-white/5 hover:border-white/20 transition-all group overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden relative">
                  <img 
                    src={guide.thumbnail}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 glass rounded-xl flex items-center justify-center text-zinc-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-sora font-bold text-xl mb-4 text-white/90 group-hover:text-white transition-colors leading-tight">{guide.title}</h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10 flex-grow">{guide.description}</p>
                  <div className="space-y-3">
                    <a
                      href={guide.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-green-500/80 hover:text-green-500 hover:bg-green-500/5 transition-all text-center border border-green-500/10 hover:border-green-500/30 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Open Guide
                    </a>
                    <p className="text-[9px] text-zinc-600 text-center font-medium uppercase tracking-[0.2em]">Free PDF Guide • Opens in Browser</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Video Section */}
        <section className="mb-24 md:mb-40">
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="w-1.5 h-8 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
            <h2 className="font-sora text-2xl md:text-4xl font-bold text-white tracking-tight">Video Tutorials</h2>
          </div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {videoTutorials.map((video, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="glass-card rounded-3xl flex flex-col h-full border-white/5 hover:border-white/20 transition-all group overflow-hidden"
              >
                <div className="aspect-video w-full overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] transition-all">
                  <img 
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-sora font-bold text-xl mb-4 text-white/90 group-hover:text-white transition-colors leading-tight">{video.title}</h3>
                  <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-10 flex-grow">{video.description}</p>
                  <a
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] text-red-500/80 hover:text-red-500 hover:bg-red-500/5 transition-all text-center border border-red-500/10 hover:border-red-500/30"
                  >
                    Watch on YouTube
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2.5rem] bg-zinc-950/50 border border-white/5 text-center"
        >
          <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed max-w-3xl mx-auto italic">
            Disclaimer: All resources provided on this page are for educational and awareness purposes only. They do not constitute financial, investment, or legal advice. Web3 Currency is not responsible for any actions taken based on these materials. Always conduct your own research.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;
