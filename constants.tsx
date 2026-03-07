import React from 'react';

export const COLORS = {
  primary: '#ffffff',
  secondary: '#a1a1aa',
  background: '#000000',
  surface: 'rgba(255, 255, 255, 0.05)',
  border: 'rgba(255, 255, 255, 0.1)'
};

export const SOCIAL_LINKS = {
  whatsapp: "https://chat.whatsapp.com/EUEkJYcfSYB3aJuBSERi5N",
  telegram: "https://t.me/+G97jt_KKAtJiZWI0",
  x: "https://x.com/Web3CurrencyNG",
  email: "web3currency.info@gmail.com",
  whatsapp_number: "+2347032754611",
  testnet_group: "https://chat.whatsapp.com/CVOdqsDd9aCKVIXeHH3jCD?mode=gi_t",
  p2p_buy: "https://wa.me/2347032754611?text=I%20want%20to%20buy%20crypto",
  p2p_sell: "https://wa.me/2347032754611?text=I%20want%20to%20sell%20crypto"
};

export const BRAND = {
  name: "WEB3 CURRENCY",
  logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%284%29-ie2R59jxk6ypBF6z9h8b2PGAo71RHQ.png", // W3C Brand Logo
  tagline: "Learn • Explore • Earn",
  founder: "Jibola Adeyemo (JAKE)",
  founder_link: "https://linktr.ee/0xjake8",
  positioning: "Web3 Currency is focused on making Web3 easy, safe, and educational, especially for beginners.",
  principles: [
    "Learn before you earn",
    "Safety over hype",
    "Community over centralization",
    "Utility over speculation"
  ]
};

// --- IMAGE ASSETS ---
// All images are centralized here for easy replacement with Imgur or other CDN URLs.
// Recommended sizes are provided for optimal display.

export const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832", // Hero 1: 2832x1500+ (16:9 or 21:9)
  "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=2832", // Hero 2: 2832x1500+ (16:9 or 21:9)
  "https://images.unsplash.com/photo-1621761191319-c6fb62004009?auto=format&fit=crop&q=80&w=2832"  // Hero 3: 2832x1500+ (16:9 or 21:9)
];

export const SUPPORT_REPRESENTATIVE_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20%2812%29-tlrEyjKAXffuGhzbgPAf2xmQXLPpyv.png"; // Support Rep: 200x200 (1:1 Square)

export const ABOUT_IMAGES = {
  mission: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Download%20Modern%20stock%20exchange%20statistic%20chart%20diagram%20scene%20show%20in%20laptop%20and%20smartphone%20screen%2C%20forex%20trading%20market%20analysis%20monitor%20display%20background%20for%20free-EklGaC7QbVI81MrXGRGjP30lCS3DAL.jpeg",    // Mission Banner: Trading Charts (21:9 Wide)
  principles: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-4-exlEO6LBWM0NjUMdQjdgo4Km36CoX4.jpg", // Principles: Community Learning (1:1 Square)
  onboarding: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=2832", // Onboarding: 2832x1200 (21:9 Wide)
  alignment: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2832"   // Alignment: 1920x1080 (16:9 Video)
};

// Interface for project details

export const SERVICES = [
  {
    title: "Free Learning Community",
    description: "A structured WhatsApp space providing curated Web3 news, real-time updates, and education. No hype, no financial advice, just real Web3 knowledge.",
    tag: "Education",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "User Support",
    description: "Direct human assistance for technical queries, wallet setup, and safe navigation through the Web3 ecosystem.",
    tag: "Support",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 18v-6a9 9 0 0118 0v6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
      </svg>
    )
  },
  {
    title: "W3C P2P DESK",
    description: "Simplified P2P desk for converting digital assets to local currency, managed directly within our trusted community environment.",
    tag: "Utility",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  },
  {
    title: "Pi Utility Application",
    description: "A dedicated utility app on the Pi Network featuring a project explorer and quest hub for community engagement.",
    tag: "Development",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  }
];

export const TRUST_PILLARS = [
  {
    title: "Learn Before You Earn",
    description: "We prioritize education above all else. Understanding the 'why' and 'how' of Web3 is the only way to navigate the space safely and effectively.",
    icon: "LE"
  },
  {
    title: "Safety Over Hype",
    description: "Our community is a noise-free zone. We deliberately avoid hype-driven projects and focus on verified, risk-mitigated opportunities.",
    icon: "SH"
  },
  {
    title: "Community Over Centralization",
    description: "We believe in the power of a structured, helpful community. Operations are coordinated directly via WhatsApp to maintain a personal, trusted environment.",
    icon: "CC"
  },
  {
    title: "Utility Over Speculation",
    description: "Whether it's our Pi Network app or airdrop participation, we focus on functional utility and long-term value rather than short-term speculation.",
    icon: "US"
  }
];

export const PI_VISION_POINTS = [
  {
    title: "Web3Currency App",
    description: "A comprehensive utility platform featuring the W3C Explorer for project discovery and the W3C Quest for community engagement. Navigate the Pi ecosystem safely while earning XP through gamified learning."
  },
  {
    title: "W3CAI",
    description: "Your intelligent companion for navigating the Web3 Currency ecosystem. Get instant support, community guidance, and technical assistance to help you move through our apps and learning channels effectively."
  },
  {
    title: "W3C Token",
    description: "Our in-app utility token is designed for ecosystem interaction and gamification, not as an investment or speculative product."
  }
];

export const MEMBERSHIP_CRITERIA = {
  isFor: [
    "Beginners wanting clear, structured Web3 explanations without the noise.",
    "Pi Network users exploring tokens and projects in a safe environment.",
    "Learners who prefer structured guidance over unvetted public hype.",
    "People seeking a helpful, education-first community on WhatsApp."
  ],
  isNotFor: [
    "Those seeking speculative 'signals' or guaranteed financial returns.",
    "Individuals looking for high-frequency trading advice or emotional hype.",
    "Users who view the Pi App or community as an investment product.",
    "Participants who prefer unvetted public channels over structured learning."
  ]
};

export const P2P_BENEFITS = [
  {
    title: "Direct Access",
    description: "Transact directly within our private network without navigating external platforms.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Efficient Turnaround",
    description: "Experience rapid transaction settlement designed to value your time.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Structured Oversight",
    description: "Every exchange is coordinated within a professional framework to ensure clarity and precision.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A3.323 3.323 0 0010.605 2.02a3.323 3.323 0 00-4.589 4.589 3.323 3.323 0 00-4.016 5.618 3.323 3.323 0 004.589 4.59 3.323 3.323 0 005.617 4.015 3.323 3.323 0 004.59-4.59 3.323 3.323 0 004.015-5.617z" />
      </svg>
    )
  },
  {
    title: "Network Security",
    description: "All transactions occur within a verified peer-to-peer environment built on long-term community trust.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Join WhatsApp Community",
    description: "Access our free learning space where all education, updates, and P2P desk operations happen directly."
  },
  {
    number: "02",
    title: "Explore the Pi App",
    description: "Visit the Web3Currency app on Pi Network testnet to use the W3C Explorer and participate in the W3C Quest."
  },
  {
    number: "03",
    title: "Learn Consistently",
    description: "Engage with structured guidance and community research to build your Web3 knowledge base safely."
  },
  {
    number: "04",
    title: "Participate Responsibly",
    description: "Apply your learning to ecosystem projects with a long-term mindset."
  }
];

export const TRUST_SIGNALS = [
  "Verified Community",
  "W3C P2P DESK",
  "Institutional Analysis",
  "Long-term Utility Focus"
];

export const FAQ_ITEMS = [
  {
    question: "What is Web3 Currency (W3C)?",
    answer: "Web3 Currency (W3C) is a community where people learn about crypto and explore Web3 opportunities together. Members share research, ask questions, and learn how different blockchain projects work step by step."
  },
  {
    question: "Do I need crypto experience to join?",
    answer: "No. Beginners are welcome. You don’t need any experience. Many people in the community started with zero knowledge and learned gradually by following discussions and asking questions."
  },
  {
    question: "Is the W3C P2P desk an exchange?",
    answer: "No. The W3C P2P desk is not an exchange. It simply connects you directly with a verified merchant through WhatsApp if you want to buy or sell any publicly tradable crypto. All trades are coordinated manually."
  },
  {
    question: "What currency is used for transactions?",
    answer: "The P2P desk mainly works with Nigerian Naira (NGN). This means you can buy crypto with Naira or sell crypto and receive payment in Naira."
  },
  {
    question: "How do I start a trade?",
    answer: "Just tap the Buy or Sell button on the page. It will open a WhatsApp chat so you can message the desk directly and continue the transaction."
  },
  {
    question: "How do I know I am chatting with the correct desk number?",
    answer: "The official W3C desk WhatsApp number is +2347032754611. Always confirm that you are chatting with this number before starting any transaction."
  },
  {
    question: "Who runs the P2P desk?",
    answer: "The desk is coordinated directly by the W3C team. When you tap the Buy or Sell button, you are connected to the desk on WhatsApp to continue the transaction."
  },
  {
    question: "Do I have to trade or buy crypto to be part of W3C?",
    answer: "No. Many people are just here to learn and explore Web3. Trading or using the P2P desk is optional. The main goal of the community is learning and understanding the space."
  },
  {
    question: "Is joining the W3C community free?",
    answer: "Yes. Joining the W3C community is free. The goal is to help people learn about Web3, understand crypto better, and explore opportunities together."
  },
  {
    question: "Does W3C guarantee profit?",
    answer: "No. W3C does not promise or guarantee profits. Everything shared in the community is for learning, research, and discussion. Members are encouraged to always make their own decisions."
  },
  {
    question: "Who is the founder?",
    answer: "Web3 Currency was founded by Jibola Adeyemo (JAKE), an educator based in Nigeria dedicated to making Web3 accessible and safe for everyone."
  }
];

export const TESTIMONIALS = [
  {
    name: "Chidi",
    message: "The structured education here is top-notch. I finally understand the 'why' behind Web3 protocols before even thinking about earning.🚀",
    time: "10:24 AM"
  },
  {
    name: "Joy",
    message: "The W3C P2P DESK is incredibly efficient. Transacting within the community feels much safer than using unvetted public platforms.",
    time: "02:15 PM"
  },
  {
    name: "Tunde",
    message: "The research provided helps me navigate the ecosystem safely.",
    time: "09:40 AM"
  },
  {
    name: "Debby",
    message: "Exploring the Pi Network testnet through the W3C App is so intuitive. The W3C Explorer makes project discovery very simple.",
    time: "11:05 AM"
  },
  {
    name: "David",
    message: "Jake's education-first approach is exactly what beginners need. No hype, just real knowledge and structured guidance.🙌",
    time: "04:30 PM"
  },
  {
    name: "Blessing",
    message: "Safety is clearly the priority here. I've learned how to identify and avoid common Web3 scams thanks to the community research.",
    time: "01:20 PM"
  }
];
