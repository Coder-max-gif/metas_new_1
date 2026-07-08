import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TradingPartner = () => {
  return (
    <div className="min-h-screen pt-24 bg-[#0B0F1A] text-white">
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Trading Partner</h1>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-10">
              Explore our trading partner collaboration with Merit Capital Markets.
            </p>

            <div className="flex justify-center mb-10">
              <img
                src="/trading_patner.png"
                alt="Trading Partner"
                className="w-full max-w-[420px] rounded-2xl border border-white/10 shadow-2xl shadow-[#7C3AED]/20"
              />
            </div>

            <a
              href="https://meritcapitalmarkets.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/40 transition-all"
            >
              Visit Merit Capital Markets <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TradingPartner;
