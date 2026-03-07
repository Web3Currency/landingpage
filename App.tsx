import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import SupportWidget from './components/SupportWidget';
import CommunityImpact from './components/CommunityImpact';
import NetworkMarquee from './components/NetworkMarquee';
import CommunityTestimonials from './components/CommunityTestimonials';
import SectionNavigator from './components/SectionNavigator';
import SectionTitle from './components/SectionTitle';
import PrivacyPolicy from './components/PrivacyPolicy';
import Resources from './components/Resources';
import AboutUs from './components/AboutUs';
import { SERVICES, STEPS, P2P_BENEFITS, PI_VISION_POINTS, TRUST_PILLARS, MEMBERSHIP_CRITERIA, SOCIAL_LINKS, FAQ_ITEMS, BRAND, HERO_IMAGES } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'resources' | 'about'>('home');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingType, setConnectingType] = useState<'buy' | 'sell' | null>(null);
  const [countdown, setCountdown] = useState(3);
  const WHATSAPP_LINK = SOCIAL_LINKS.whatsapp;

  const handleTradeClick = (e: React.MouseEvent, type: 'buy' | 'sell', url: string) => {
    e.preventDefault();
    if (isConnecting) return;

    setIsConnecting(true);
    setConnectingType(type);
    setCountdown(3);

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.open(url, '_blank', 'noopener,noreferrer');
          // Reset after a short delay so the user sees it's done
          setTimeout(() => {
            setIsConnecting(false);
            setConnectingType(null);
          }, 1000);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleFooterNav = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    if (currentView !== 'home') {
      setCurrentView('home');
      // Use a slightly longer delay to ensure the home view has mounted
      setTimeout(() => {
        const id = href.startsWith('#') ? href.substring(1) : href;
        const element = document.getElementById(id) || document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const id = href.startsWith('#') ? href.substring(1) : href;
      const element = document.getElementById(id) || document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Animation variants
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

  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const glowY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="min-h-screen selection:bg-purple-500/30 bg-black text-white relative">
      {/* Liquid Glass Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="liquid-orb top-[-10%] left-[-10%] opacity-40 will-change-transform" />
        <div className="liquid-orb bottom-[-20%] right-[-10%] opacity-30 will-change-transform" style={{ animationDelay: '-5s', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)' }} />
        <div className="liquid-orb top-[40%] left-[60%] opacity-20 will-change-transform" style={{ animationDelay: '-10s', width: '40vw', height: '40vw' }} />
      </div>

      <Navbar
        onLogoClick={() => setCurrentView('home')}
        onNavigate={(view) => setCurrentView(view)}
        currentView={currentView}
      />
      {currentView === 'home' && <SectionNavigator />}

      {currentView === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-24 pb-12 md:pt-48 md:pb-24 overflow-hidden border-b border-white/5 min-h-[80vh] flex items-center">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-40"
                poster="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Chart-EVd3zqX4CxBIDarHPrWzR6LlyOLh1P.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            </div>

            <motion.div
              style={{ y: glowY }}
              className="hero-glow top-0 left-1/2 -translate-x-1/2 opacity-60 pointer-events-none"
            />
            <motion.div
              style={{ opacity: heroOpacity, scale: heroScale }}
              className="max-w-7xl mx-auto px-4 text-center relative z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2.5 rounded-full glass glass-shine-effect border-white/20 mb-6 md:mb-10 animate-float"
              >
                <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                <span className="text-[9px] md:text-xs font-bold tracking-[0.3em] text-white uppercase">{BRAND.tagline}</span>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="space-y-4"
              >
                <motion.h1
                  variants={fadeInUp}
                  className="font-sora text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 md:mb-10 leading-[1.2] md:leading-[0.95]"
                >
                  The Standard for <br /> <span className="gradient-text">Web3 Navigation</span>
                </motion.h1>

                <motion.p
                  variants={fadeInUp}
                  className="max-w-3xl mx-auto text-zinc-500 text-base md:text-xl lg:text-2xl leading-relaxed mb-10 md:mb-16 font-medium px-2"
                >
                  <span className="text-white">{BRAND.name}</span> is a free WhatsApp-based learning community focused on making Web3 easy, safe, and educational, especially for beginners.
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-col items-center gap-6 md:gap-10"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-sm sm:max-w-none">
                    <motion.a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(34, 197, 94, 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto glass-button bg-green-600/10 border-green-500/30 text-green-500 px-6 py-4 md:px-14 md:py-6 rounded-xl md:rounded-3xl font-bold text-base md:text-xl active:scale-95 shadow-2xl flex items-center justify-center gap-3"
                    >
                      JOIN W3C COMMUNITY
                    </motion.a>
                    <motion.a
                      href="#ecosystem"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto glass-button bg-white/5 border-white/10 text-purple-400 px-6 py-4 md:px-14 md:py-6 rounded-xl md:rounded-3xl font-bold text-base md:text-xl active:scale-95 flex items-center justify-center"
                    >
                      Explore Ecosystem
                    </motion.a>
                  </div>

                  <div className="flex items-center gap-6 md:gap-8 py-3 px-8 md:py-4 md:px-10 glass rounded-full border-white/10">
                    <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 2-7 20-4-9-9-4Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2 11 13" />
                      </svg>
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2, y: -5 }} href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-500 hover:text-white transition-all">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </motion.a>
                  </div>

                  <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-[0.3em] mb-12">
                    Operations coordinated directly via WhatsApp
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </section>

          {/* Network Marquee */}
          <NetworkMarquee />

          {/* Grid Background Sections */}
          <div className="bg-grid">
            {/* Community Impact Section */}
            <div className="bg-white">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
              >
                <CommunityImpact theme="light" />
              </motion.div>
            </div>

            {/* Ecosystem Framework */}
            <section id="ecosystem" className="py-16 md:py-40 relative">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-12 text-left"
                >
                  <div className="max-w-2xl">
                    <SectionTitle>Framework</SectionTitle>
                    <motion.p variants={fadeInUp} className="text-zinc-500 text-base md:text-xl leading-relaxed font-medium">
                      We provide a structured environment for navigating the digital asset landscape, combining a free learning community with functional utility applications.
                    </motion.p>
                  </div>
                  <motion.a
                    variants={fadeInUp}
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.4)' }}
                    whileTap={{ scale: 0.95 }}
                    className="glass-button px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3 group text-green-500 border-green-500/20"
                  >
                    Join Community
                    <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left"
                >
                  {SERVICES.map((service, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                      className="group glass-card glass-shine-effect p-6 md:p-10 rounded-2xl md:rounded-[3rem] flex flex-col transition-colors"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 glass rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-white mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-inner border-white/30">
                        {service.icon}
                      </div>
                      <span className="inline-block px-3 py-1 glass rounded-full text-zinc-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 border-white/10">
                        {service.tag}
                      </span>
                      <h3 className="font-sora font-bold text-lg md:text-2xl mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
                      <p className="text-zinc-500 leading-relaxed text-xs md:text-sm font-medium opacity-80">
                        {service.description}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* W3C P2P DESK */}
            <section id="liquidity" className="py-24 md:py-40 relative bg-white">
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="text-left"
                  >
                    <SectionTitle theme="light">W3C P2P DESK</SectionTitle>
                    <p className="text-zinc-600 text-lg md:text-xl mb-10 md:mb-12 leading-relaxed font-medium">
                      A streamlined alternative to traditional exchanges, allowing members to convert digital assets to local currency securely. All coordination is handled directly via WhatsApp for maximum clarity and safety.
                    </p>

                    {/* Trade in 4 Simple Steps */}
                    <div className="bg-zinc-50 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border border-zinc-200">
                      <div className="space-y-6 mb-8">
                        {[
                          { step: "01", desc: "Send a direct message to buy or sell any publicly tradable cryptocurrency." },
                          { step: "02", desc: "Specify the cryptocurrency and the exact amount for the trade." },
                          { step: "03", desc: "The current exchange rate, inclusive of the service fee, will be provided." },
                          { step: "04", desc: "Upon agreement, the trade is processed promptly, typically within 10-15 minutes." }
                        ].map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex gap-4 group items-center"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center text-zinc-400 font-sora font-bold border border-zinc-200 group-hover:text-purple-600 group-hover:border-purple-200 transition-all">
                              {item.step}
                            </div>
                            <div>
                              <p className="text-zinc-500 text-sm md:text-base leading-relaxed group-hover:text-zinc-900 transition-colors">{item.desc}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* W3C P2P DESK Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group perspective-1000"
                  >
                    <div className="rounded-[3rem] p-10 md:p-14 relative z-10 metallic-texture tactical-shadow border-t border-l border-white/20 border-b-8 border-r-8 border-black/80 flex flex-col items-center hover:rotate-x-1 transition-all duration-700">

                      {/* Volumetric Lighting Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none rounded-[3rem]" />
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                      {/* Metallic Screws - Enhanced */}
                      <div className="absolute top-8 left-8 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-black/40" />
                      <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-black/40" />
                      <div className="absolute bottom-8 left-8 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-black/40" />
                      <div className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-gradient-to-br from-zinc-400 via-zinc-600 to-zinc-900 shadow-[0_2px_4px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-black/40" />

                      {/* Human-Centric CTA */}
                      <div className="w-full mb-8 text-center">
                        <p className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] leading-relaxed drop-shadow-[0_1px_0px_rgba(255,255,255,0.1)]">
                          Need to buy or sell crypto? <br />
                          <span className="text-zinc-400">Tap a button below to message the desk directly.</span>
                        </p>
                      </div>

                      {/* Tactical Display Screen */}
                      <div className="w-full mb-12 p-1 rounded-2xl bg-zinc-900 border-2 border-zinc-800 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)] relative overflow-hidden group/screen">
                        <div className="p-6 rounded-[14px] bg-[#1c1f18] shadow-[inset_0_4px_12px_rgba(0,0,0,0.9)] relative overflow-hidden min-h-[80px] flex items-center justify-center">
                          {/* Scanline & Reflection */}
                          <div className="absolute inset-0 scanline-effect opacity-30 pointer-events-none" />
                          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

                          <div className="flex flex-col items-center justify-center relative z-10 w-full">
                            {!isConnecting ? (
                              <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-black/60 border border-white/5 shadow-inner">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#22c55e]" />
                                <div className="flex overflow-hidden">
                                  {"W3C Desk Online".split("").map((char, i) => (
                                    <motion.span
                                      key={i}
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{
                                        delay: 0.5 + (i * 0.08),
                                        duration: 0.1,
                                        ease: "easeOut"
                                      }}
                                      className="text-lg md:text-xl font-bold text-green-500/90 uppercase tracking-widest"
                                      style={{ fontFamily: "'VT323', monospace" }}
                                    >
                                      {char === " " ? "\u00A0" : char}
                                    </motion.span>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <div className="flex flex-col items-center gap-1 text-center">
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-green-500 font-bold text-sm md:text-base tracking-widest uppercase"
                                  style={{ fontFamily: "'VT323', monospace" }}
                                >
                                  Connecting to W3C {connectingType === 'buy' ? 'Buy' : 'Sell'} Desk...
                                </motion.div>
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.3 }}
                                  className="text-green-500/70 text-[10px] md:text-xs tracking-widest uppercase"
                                  style={{ fontFamily: "'VT323', monospace" }}
                                >
                                  Preparing secure trade channel
                                </motion.div>
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.6 }}
                                  className="text-green-400 font-bold text-sm md:text-base tracking-widest mt-1"
                                  style={{ fontFamily: "'VT323', monospace" }}
                                >
                                  Redirecting to WhatsApp in {countdown}...
                                </motion.div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Mechanical Buttons */}
                      <div className="grid grid-cols-2 gap-8 w-full mb-12">
                        <motion.button
                          onClick={(e) => handleTradeClick(e, 'buy', SOCIAL_LINKS.p2p_buy)}
                          whileHover={{ scale: isConnecting ? 1 : 1.02 }}
                          whileTap={{ scale: isConnecting ? 1 : 0.98 }}
                          disabled={isConnecting}
                          className={`relative group/btn h-24 rounded-2xl button-3d-green flex flex-col items-center justify-center gap-1 ${isConnecting ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                        >
                          <span className="font-sora font-black text-2xl text-white tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">BUY</span>
                          <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Execute Trade</span>
                        </motion.button>
                        <motion.button
                          onClick={(e) => handleTradeClick(e, 'sell', SOCIAL_LINKS.p2p_sell)}
                          whileHover={{ scale: isConnecting ? 1 : 1.02 }}
                          whileTap={{ scale: isConnecting ? 1 : 0.98 }}
                          disabled={isConnecting}
                          className={`relative group/btn h-24 rounded-2xl button-3d-red flex flex-col items-center justify-center gap-1 ${isConnecting ? 'opacity-50 cursor-not-allowed grayscale' : ''}`}
                        >
                          <span className="font-sora font-black text-2xl text-white tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">SELL</span>
                          <span className="text-[8px] font-bold text-white/50 uppercase tracking-widest">Liquidate Asset</span>
                        </motion.button>
                      </div>

                      {/* P2P Feature Icons - Tactical Look */}
                      <div className="flex justify-between w-full mb-8 px-6 border-t border-white/10 pt-10">
                        <div className="flex flex-col items-center gap-3 group/feat">
                          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center text-white/60 group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:border-white/30 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/feat:text-zinc-300">Fast</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group/feat">
                          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center text-white/60 group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:border-white/30 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/feat:text-zinc-300">Fair Rate</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 group/feat">
                          <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center text-white/60 group-hover/feat:text-white group-hover/feat:scale-110 group-hover/feat:border-white/30 transition-all">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/feat:text-zinc-300">Verified</span>
                        </div>
                      </div>

                      <div className="w-full flex items-center justify-center gap-4">
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">Secure Desk for Beginners and Experts</p>
                        <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Pi Vision Section */}
            <section id="pi-vision" className="py-16 md:py-40 relative">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-left mb-12 md:mb-24"
                >
                  <SectionTitle>Pi Network App</SectionTitle>
                  <p className="text-zinc-500 text-base md:text-xl max-w-3xl font-medium leading-relaxed">
                    A dedicated utility application on the Pi Network designed for project discovery and community engagement. The ecosystem is evolving and in active development.
                  </p>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20"
                >
                  {/* Utility 1: Web3Currency App */}
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="glass-card p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] flex flex-col h-full text-left group hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 border-white/20">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <h4 className="font-sora font-bold text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-white transition-colors">Web3Currency App</h4>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10 flex-grow font-medium">
                      A utility app built on the Pi Network. It features a comprehensive W3C Explorer for discovering Pi tokens and a W3C Quest for community engagement. Must be accessed through the Pi Browser.
                    </p>
                    <motion.a
                      href="https://webcurrency3064.pinet.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-button w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3 text-purple-400 border-purple-500/20"
                    >
                      Open Web3Currency App
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Utility 2: W3C AI */}
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10 }}
                    className="glass-card p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] flex flex-col h-full text-left group hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 border-white/20">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-sora font-bold text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-white transition-colors">W3C AI</h4>
                    <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10 flex-grow font-medium">
                      A fully operational functional assistant inside the Pi ecosystem. Ask questions specific to the Web3 Currency community, the Web3Currency app, W3C token utility,our ecosystem structure, Pi Network, and Web3. Must be access through the Pi Browser.
                    </p>
                    <motion.a
                      href="https://wcaicbafeac5245.pinet.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.1)', borderColor: 'rgba(168, 85, 247, 0.4)' }}
                      whileTap={{ scale: 0.98 }}
                      className="glass-button w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3 text-purple-400 border-purple-500/20"
                    >
                      Open W3C AI
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Utility 3: W3C Token (Simple) */}
                  <motion.div
                    variants={fadeInUp}
                    whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.03)' }}
                    className="glass-card p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] text-left group hover:bg-white/[0.03] transition-colors flex flex-col h-full"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 border-white/10">
                      <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-sora font-bold text-xl md:text-2xl mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors">{PI_VISION_POINTS[2].title}</h3>
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">{PI_VISION_POINTS[2].description}</p>
                  </motion.div>
                </motion.div>

                {/* Standalone Development Progress Dashboard */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card p-6 md:p-16 rounded-2xl md:rounded-[3rem] text-left mb-24 md:mb-32 border-white/10 bg-gradient-to-br from-zinc-900/40 to-black relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -mr-32 -mt-32 rounded-full" />

                  <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center relative z-10">
                    <div className="lg:w-1/3">
                      <SectionTitle>Live Tracking</SectionTitle>
                      <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium mb-8">
                        Real-time tracking of our ecosystem components as they move through the standard project lifecycle from concept to mainnet.
                      </p>
                    </div>

                    <div className="lg:w-2/3 w-full space-y-8 md:space-y-10">
                      {[
                        { name: "W3C Token", stage: "Testnet", progress: 60, color: "from-purple-600 to-purple-400" },
                        { name: "Web3Currency App", stage: "Dev", progress: 40, color: "from-purple-800 to-purple-500" },
                        { name: "W3CAI Assistant", stage: "Dev", progress: 40, color: "from-purple-800 to-purple-500" }
                      ].map((item, i) => (
                        <div key={i} className="space-y-3 md:space-y-4 group/item">
                          <div className="flex justify-between items-end">
                            <div className="flex items-center gap-2 md:gap-3">
                              <div className="w-6 h-6 md:w-8 md:h-8 glass rounded-lg flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-500 border-white/10 group-hover/item:text-white transition-colors">
                                {i + 1}
                              </div>
                              <span className="text-white font-bold text-base md:text-lg tracking-tight">{item.name}</span>
                            </div>
                          </div>

                          <div className="relative h-2 md:h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px] md:p-[2px]">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 + (i * 0.1) }}
                              className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(168,85,247,0.3)]`}
                            />
                          </div>

                          <div className="flex justify-between px-1">
                            {["Concept", "Dev", "Testnet", "Mainnet"].map((stage, sIdx) => {
                              const stages = ["Concept", "Dev", "Testnet", "Mainnet"];
                              const currentIdx = stages.indexOf(item.stage);
                              const isActive = sIdx <= currentIdx;
                              return (
                                <div key={stage} className="flex flex-col items-center gap-1.5 md:gap-2">
                                  <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-purple-500 scale-125 shadow-[0_0_8px_rgba(168,85,247,0.5)]' : 'bg-zinc-800'}`} />
                                  <span className={`text-[7px] md:text-[9px] font-bold uppercase tracking-tighter transition-colors duration-500 ${isActive ? 'text-purple-300' : 'text-zinc-700'}`}>
                                    {stage}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-40 relative bg-white">
              <div className="max-w-4xl mx-auto px-4">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-left mb-12 md:mb-20"
                >
                  <SectionTitle theme="light">FAQ</SectionTitle>
                  <p className="text-zinc-600 text-base md:text-xl font-medium leading-relaxed">Common inquiries regarding community access and operational standards.</p>
                </motion.div>

                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-3 md:space-y-4"
                >
                  {FAQ_ITEMS.map((faq, idx) => (
                    <motion.div
                      key={idx}
                      variants={fadeInUp}
                      className="bg-zinc-50 rounded-2xl md:rounded-[2rem] border border-zinc-200 overflow-hidden transition-all duration-500"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-zinc-100 transition-colors group"
                      >
                        <span className="font-sora font-bold text-lg md:text-2xl tracking-tight text-zinc-900 group-hover:text-purple-600">{faq.question}</span>
                        <div className={`w-8 h-8 md:w-10 md:h-10 bg-white shadow-sm rounded-full flex items-center justify-center transition-transform duration-500 border border-zinc-200 ${openFaq === idx ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={openFaq === idx ? "M20 12H4" : "M12 4v16m8-8H4"} />
                          </svg>
                        </div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: openFaq === idx ? 'auto' : 0, opacity: openFaq === idx ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="py-6 px-6 md:py-8 md:px-8 border-t border-zinc-200 bg-white">
                          <p className="text-zinc-600 text-base md:text-lg leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Community Testimonials */}
            <CommunityTestimonials />

            {/* About W3C Informational Section */}
            <section className="py-24 md:py-40 relative border-t border-white/5 bg-zinc-950/30">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  className="text-left"
                >
                  <SectionTitle>SUMMARY</SectionTitle>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
                    <div className="space-y-6">
                      <h3 className="font-sora font-bold text-2xl md:text-4xl text-white tracking-tight leading-tight">
                        A WhatsApp-based Web3 learning and research community.
                      </h3>
                      <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                        Web3 Currency (W3C) is more than just a group; it's a structured framework for digital asset education. We focus on empowering everyday people to navigate the complex Web3 landscape with confidence and technical discipline.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Education Hub</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Members learn about blockchain fundamentals, secure wallet setup, testnet participation, and airdrop research through curated community guides.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">P2P Desk</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          The W3C P2P Desk connects users directly with the desk through WhatsApp, providing a secure and community-verified channel for asset conversion.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Pi Ecosystem</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          Explore the Pi Network safely through our dedicated utility app, featuring project discovery tools and community engagement quests.
                        </p>
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest">Safety First</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          We prioritize risk mitigation and research over hype, helping members identify and avoid common scams in the crypto space.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 md:py-40">
              <div className="max-w-7xl mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="glass-card glass-shine-effect rounded-[2rem] md:rounded-[4rem] p-10 md:p-32 text-left"
                >
                  <SectionTitle>Join Us</SectionTitle>
                  <p className="max-w-2xl text-zinc-500 text-base md:text-lg font-medium leading-relaxed mb-10 md:mb-12 relative z-10">
                    Join a free community designed for the future of Web3 navigation. Learn consistently, explore the Pi app, and participate responsibly.
                  </p>
                  <div className="flex flex-col items-start justify-start gap-6 md:gap-8 relative z-10">
                    <motion.a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.4)', boxShadow: '0 0 40px rgba(34, 197, 94, 0.2)' }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full sm:w-auto glass-button bg-green-600/10 text-green-500 border-green-500/30 px-10 py-5 md:px-16 md:py-7 rounded-2xl md:rounded-3xl font-bold text-lg md:text-2xl flex items-center justify-center gap-4"
                    >
                      Join Free Community
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
        </>
      ) : currentView === 'privacy' ? (
        <PrivacyPolicy />
      ) : currentView === 'resources' ? (
        <Resources />
      ) : (
        <AboutUs />
      )}

      {/* Footer */}
      <footer className="py-20 md:py-32 border-t border-white/5 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-24 text-left"
          >
            <motion.div variants={fadeInUp} className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-8 md:mb-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center font-sora font-black text-xs md:text-sm text-white shadow-2xl border border-white/10 overflow-hidden">
                  {BRAND.logo ? (
                    <img src={BRAND.logo} alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" />
                  ) : (
                    "W3C"
                  )}
                </div>
                <span className="font-sora font-bold text-2xl md:text-3xl tracking-tighter">{BRAND.name}</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-4 leading-relaxed text-base md:text-lg font-medium">{BRAND.positioning}</p>
              <p className="text-zinc-600 text-xs md:text-sm mb-8 md:mb-12 font-medium italic">
                Founded by <a href={BRAND.founder_link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800 hover:decoration-white">{BRAND.founder}</a>
              </p>

              <div className="flex items-center gap-5 md:gap-6 mt-8 md:mt-12">
                <motion.a whileHover={{ scale: 1.2, rotate: 10 }} href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></motion.a>
                <motion.a whileHover={{ scale: 1.2, rotate: -10 }} href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 2-7 20-4-9-9-4Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2 11 13" />
                  </svg>
                </motion.a>
                <motion.a whileHover={{ scale: 1.2, y: -5 }} href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="font-bold text-white mb-6 md:mb-8 tracking-widest uppercase text-[10px] md:text-xs">Navigation</h4>
              <ul className="space-y-4 md:space-y-6 text-zinc-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
                <li>
                  <button
                    onClick={() => {
                      setCurrentView('about');
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </button>
                </li>
                <li><a href="#liquidity" onClick={(e) => handleFooterNav(e, '#liquidity')} className="hover:text-white transition-colors">W3C P2P DESK</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Direct Access</a></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h4 className="font-bold text-white mb-6 md:mb-8 tracking-widest uppercase text-[10px] md:text-xs">Ecosystem</h4>
              <ul className="space-y-4 md:space-y-6 text-zinc-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
                <li><a href="#pi-vision" onClick={(e) => handleFooterNav(e, '#pi-vision')} className="hover:text-white transition-colors">Pi App</a></li>
                <li><a href="#ecosystem" onClick={(e) => handleFooterNav(e, '#ecosystem')} className="hover:text-white transition-colors">Framework</a></li>
                <li>
                  <button
                    onClick={() => {
                      setCurrentView('about');
                      window.scrollTo(0, 0);
                    }}
                    className="hover:text-white transition-colors"
                  >
                    Core Principles
                  </button>
                </li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-12 md:mb-16 py-8 md:py-10 border-t border-white/5 text-left text-zinc-600 text-xs md:text-sm leading-relaxed max-w-4xl font-medium"
          >
            <span className="text-zinc-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] block mb-3">Professional Disclaimer</span>
            Web3 Currency operates exclusively as an educational framework. All participation is at the member's discretion. We do not provide financial or investment advice.
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 text-zinc-600 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            <div className="text-center md:text-left">
              <p>© 2025 {BRAND.name}.</p>
              <p className="mt-2 text-zinc-700 normal-case font-medium tracking-normal">Built with love for the community</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-10">
              <button
                onClick={() => {
                  setCurrentView('about');
                  window.scrollTo(0, 0);
                }}
                className="hover:text-white transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setCurrentView('privacy');
                  window.scrollTo(0, 0);
                }}
                className="hover:text-white transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => {
                  setCurrentView('resources');
                  window.scrollTo(0, 0);
                }}
                className="hover:text-white transition-colors"
              >
                Resources
              </button>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
          scale: showBackToTop ? 1 : 0.8
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={scrollToTop}
        className={`fixed bottom-10 left-10 z-[100] w-14 h-14 bg-zinc-950/90 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center text-white shadow-2xl active:scale-90 hover:scale-110 transition-all duration-300 ${!showBackToTop && 'pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>

      {/* Support Widget */}
      <SupportWidget />
    </div>
  );
};

export default App;
