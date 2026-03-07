import React, { useState, useEffect, useRef } from 'react';
import { SUPPORT_REPRESENTATIVE_IMAGE } from '../constants';

const SupportWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Drag state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      // Show widget only when scrolled away from Hero section (approx 300px)
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialPos.current = { ...position };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition({
      x: initialPos.current.x + dx,
      y: initialPos.current.y + dy,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    // If it didn't move much, treat as click
    const dx = Math.abs(e.clientX - dragStart.current.x);
    const dy = Math.abs(e.clientY - dragStart.current.y);
    if (dx < 5 && dy < 5) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <style>{`
        .support-tooltip {
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s, visibility 0.3s;
        }
        .group:hover .support-tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      {/* Floating Button */}
      <div 
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translateY(-50%)`,
          touchAction: 'none'
        }}
      >
        <div className="relative group">
          {/* Tooltip */}
          <div className="support-tooltip absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl whitespace-nowrap pointer-events-none">
            <span className="text-white text-xs font-bold tracking-wide">Get Human Assistance</span>
            {/* Tooltip Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black/90" />
          </div>

          {/* Active Green Dot - Outside */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full z-10 border-2 border-black" />
          
          <button
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`glass-button relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full border-purple-500/20 hover:border-purple-500/50 hover:scale-110 active:scale-95 transition-transform bg-black/90 backdrop-blur-2xl overflow-hidden ${isDragging ? 'cursor-grabbing scale-110' : 'cursor-grab'}`}
            aria-label="Get Human Assistance"
          >
            <img 
              src={SUPPORT_REPRESENTATIVE_IMAGE} 
              alt="Support Representative" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass-card w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[2rem] border-white/10 bg-zinc-950/95 shadow-2xl relative animate-in zoom-in-95 duration-300">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="pt-8 px-8 pb-0 md:pt-12 md:px-12 md:pb-0">
              {/* Title */}
              <div className="inline-flex items-center px-6 py-2.5 rounded-full text-purple-500 font-bold uppercase tracking-[0.4em] text-xs md:text-sm mb-6 md:mb-8 border glass border-white/10">
                <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-3 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                Human Support
              </div>

              {/* 1. Security Notice Section */}
              <div className="mb-12">
                <h2 className="font-sora text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">Security Notice</h2>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  For your protection, our support team will never request wallet secrets or private credentials. Please review these guidelines before contacting support.
                </p>
              </div>

              <div className="space-y-10">
                {/* 2. Main Content Section - Two Boxes Side-by-Side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* LEFT BOX - Red Theme (Never Share) */}
                  <div className="p-8 rounded-2xl bg-red-500/5 border border-red-500/15 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-red-500 font-black text-base uppercase tracking-[0.15em] mb-2">Never Share These</h3>
                      <h3 className="text-red-500 font-bold text-[11px] uppercase tracking-[0.2em] mb-6 text-zinc-400">With Support</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed mb-6">These are private security credentials. Support will never request them.</p>
                      <ul className="space-y-3">
                        {['Seed / Recovery Phrase', 'Private Keys', 'Wallet Passwords', '2FA / OTP Codes', 'Remote access to your device'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-300 text-xs font-medium">
                            <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M13.477 14.89A6 6 0 0 1 5.11 2.524a6 6 0 0 1 8.367 8.366l-3.5 3.5a.75.75 0 1 1-1.06-1.06l3.5-3.5a4.5 4.5 0 1 0-6.364 6.364l1.414-1.414a.75.75 0 0 1 1.06 1.06l-1.414 1.414zm0-6.364l1.414-1.414a.75.75 0 1 0-1.06-1.06l-1.415 1.414a4.5 4.5 0 1 0 6.364 6.364l-3.5-3.5a.75.75 0 1 1 1.06-1.06l3.5 3.5a6 6 0 1 1-8.367-8.366z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RIGHT BOX - Green Theme (Safe Information) */}
                  <div className="p-8 rounded-2xl bg-green-500/5 border border-green-500/15 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-green-500 font-black text-base uppercase tracking-[0.15em] mb-2">Safe Information</h3>
                      <h3 className="text-green-500 font-bold text-[11px] uppercase tracking-[0.2em] mb-6 text-zinc-400">You Can Share</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed mb-6">To help resolve your issue, you may share the following information.</p>
                      <ul className="space-y-3">
                        {['Screenshots (hide sensitive details)', 'App or platform name', 'Network or token involved', 'Short explanation of the issue'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-300 text-xs font-medium">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3. Official Support Section - Full Width */}
                <div className="border-t border-white/5 pt-10">
                  <h3 className="text-white font-black text-base uppercase tracking-[0.15em] mb-4">Official Support Line</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-2xl">
                    All support is handled through our verified WhatsApp support line. You will receive direct assistance through chat, and in some cases a live voice call walkthrough if your issue requires step-by-step guidance.
                  </p>
                  <div className="space-y-3 ml-4">
                    <div className="flex items-center gap-3 text-zinc-300 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Verified WhatsApp Support (Direct Message)
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300 text-xs font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      Community Assistance via WhatsApp Channel
                    </div>
                  </div>
                </div>

                {/* 4. Security Warning Section - Bottom Alert Box */}
                <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/20 relative overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-red-500 font-black text-sm uppercase tracking-[0.1em] mb-2">Security Warning</h4>
                      <p className="text-red-200/70 text-xs leading-relaxed">If anyone claiming to be support asks for wallet secrets or sensitive credentials, terminate the conversation immediately and report the account.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Bottom Action Buttons */}
              <div className="mt-12 pt-10 border-t border-white/5">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-8 py-4 rounded-xl font-bold text-[10px] text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-all uppercase tracking-[0.2em] border border-white/10"
                  >
                    Cancel Support Request
                  </button>
                  <a 
                    href="https://wa.me/2347032754611?text=Hello%20I%20need%20crypto%20support"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-[1.5] px-8 py-4 rounded-xl font-bold text-[10px] text-white bg-green-600 hover:bg-green-500 active:scale-95 transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2 shadow-lg shadow-green-600/30"
                  >
                    Accept & Continue to Support
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportWidget;
