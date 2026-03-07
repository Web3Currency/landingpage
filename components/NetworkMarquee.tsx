import React from 'react';
import { motion } from 'motion/react';

const NETWORKS = [
  { name: 'BITCOIN', color: 'text-[#F7931A]' },
  { name: 'ETHEREUM', color: 'text-[#627EEA]' },
  { name: 'TRON', color: 'text-[#FF0013]' },
  { name: 'BINANCE', color: 'text-[#F3BA2F]' },
  { name: 'SOLANA', color: 'bg-gradient-to-r from-[#9945FF] to-[#14F195] bg-clip-text text-transparent' },
  { name: 'TON', color: 'text-[#0088CC]' },
  { name: 'PI', color: 'text-[#F6931A]' },
  { name: 'NEAR', color: 'text-white' },
  { name: 'POLYGON', color: 'text-[#8247E5]' },
  { name: 'AVALANCHE', color: 'text-[#E84142]' },
  { name: 'ARBITRUM', color: 'text-[#627EEA]' },
  { name: 'SUI', color: 'text-[#6FB9D1]' },
  { name: 'XRP', color: 'text-[#23292F]' },
];

const NetworkMarquee: React.FC = () => {
  // Duplicate the list to create a seamless loop
  const marqueeItems = [...NETWORKS, ...NETWORKS];

  return (
    <div className="py-6 md:py-8 border-y border-white/5 bg-black/40 overflow-hidden relative group">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02] pointer-events-none" />

      {/* Gradient Overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-black to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap gap-16 md:gap-32 items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {marqueeItems.map((network, idx) => (
          <div key={idx} className="flex items-center gap-4 md:gap-6 group/item">
            <div className={`font-sora font-black text-2xl md:text-4xl tracking-tighter opacity-70 group-hover/item:opacity-100 transition-all duration-500 hover:scale-110 cursor-default ${network.color} group-hover/item:drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
              {network.name}
            </div>
            <div className="w-2 h-2 rounded-full bg-white/10 group-hover/item:bg-purple-500/40 transition-colors" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default NetworkMarquee;
