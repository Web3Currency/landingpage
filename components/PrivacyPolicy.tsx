import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { BRAND } from '../constants';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 glass rounded-full text-purple-500 font-bold uppercase tracking-[0.3em] text-[10px] border-white/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            Legal Framework
          </div>
          <h1 className="font-sora text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">Privacy Policy</h1>
          <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
            Last updated: March 2025. This policy outlines how Web3 Currency handles information across our landing page and community operations.
          </p>
        </motion.div>

        <div className="space-y-16 text-left">
          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">1. Introduction</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              Web3 Currency ("we", "our", or "the community") operates an informational landing page and a WhatsApp-based crypto education and P2P community. We are committed to protecting the privacy of our visitors and members while maintaining the transparency required for Web3 operations. This website serves as an introduction to our services; all primary operations occur within our WhatsApp-based ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">2. Information We Collect</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest mb-4">Website Level</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">
                  Our landing page is strictly informational. We do not actively collect personal data such as names or email addresses through this site. However, we may collect basic analytics data (e.g., IP address, browser type, device information) for performance monitoring and security purposes.
                </p>
              </div>
              <div>
                <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest mb-4">Community Level (WhatsApp)</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">
                  When you join our WhatsApp community, your phone number and profile name become visible to other members due to the inherent nature of WhatsApp group participation.
                </p>
              </div>
              <div>
                <h3 className="text-zinc-300 font-bold text-sm uppercase tracking-widest mb-4">P2P Desk Operations</h3>
                <p className="text-zinc-400 leading-relaxed font-medium">
                  Members who voluntarily engage with our P2P Desk may be required to provide:
                </p>
                <ul className="mt-4 space-y-2 text-zinc-400 font-medium">
                  <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Public blockchain wallet addresses</li>
                  <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Bank account name and number</li>
                  <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Bank name</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">3. How We Use Information</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              Information collected is used strictly for operational purposes:
            </p>
            <ul className="mt-4 space-y-2 text-zinc-400 font-medium">
              <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Processing and recording P2P crypto-to-fiat transactions.</li>
              <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Maintaining internal transaction records for community integrity.</li>
              <li className="flex items-center gap-3"><span className="text-purple-500">•</span> Facilitating communication within the WhatsApp group.</li>
            </ul>
            <p className="mt-6 text-zinc-400 leading-relaxed font-medium">
              We do not sell user data or share it with third parties for marketing purposes. KYC is only conducted to the extent required for secure transaction settlement.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">4. Data Storage and Security</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              We implement reasonable administrative and technical measures to protect your information. However, please be aware that no system is completely secure. We cannot guarantee absolute security of data transmitted over the internet or stored on third-party platforms.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">5. Blockchain Transparency Notice</h2>
            <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
              <p className="text-zinc-300 leading-relaxed font-medium italic">
                By participating in Web3 operations, you acknowledge that blockchain transactions are public, transparent, and irreversible. Once a transaction is broadcast to a network, it cannot be deleted or modified. Your public wallet address will be permanently associated with your transaction history on the public ledger.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">6. Third-Party Platforms</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              Our community primarily operates on WhatsApp. By joining, you are subject to WhatsApp's own Privacy Policy and Terms of Service. We are not responsible for the data practices of WhatsApp or any other third-party platforms you may use to interact with our community.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">7. Data Retention</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              We retain transaction records and communication logs for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">8. User Rights</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              You have the right to request access to the information you have provided to us or to request its deletion from our internal records (excluding public blockchain data). To exercise these rights, please contact us via the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">9. Changes to This Policy</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify the community of any significant changes via our official WhatsApp channels.
            </p>
          </section>

          <section>
            <h2 className="text-white text-xl font-bold mb-6 tracking-tight">10. Contact Information</h2>
            <p className="text-zinc-400 leading-relaxed font-medium">
              For any questions or concerns regarding this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4 text-white font-bold tracking-wider">
              web3currency.info@gmail.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
