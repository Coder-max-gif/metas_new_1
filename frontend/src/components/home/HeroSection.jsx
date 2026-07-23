import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#080b14]">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] to-[#080b14]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55%] h-[70%] bg-[#7C3AED]/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              New{' '}
              <span className="bg-gradient-to-r from-[#7C3AED] via-[#c026d3] to-[#00D4FF] bg-clip-text text-transparent">
                level
              </span>
              <br />
              of market
              <br />
              transparency
            </motion.h1>

            <motion.p
              className="text-lg text-[#9CA3AF] mb-10 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Professional Order Flow &amp; Volume Analysis Software for Active Traders
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <Link to="/login">
                <motion.button
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#7C3AED] to-[#5B4FE9] text-white font-semibold px-6 py-4 rounded-lg shadow-lg shadow-[#7C3AED]/30 hover:shadow-xl hover:shadow-[#7C3AED]/50 transition-shadow"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start for free
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 group-hover:bg-white/25 transition-colors">
                    <ArrowRight size={16} />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Monitor Visual */}
          <motion.div
            className="relative lg:w-[130%]"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="/monitor.jpeg"
                alt="Trading monitor display"
                className="w-full h-auto select-none pointer-events-none"
              />

              {/* Chart overlay positioned on the monitor screen */}
              <div className="absolute left-[5.5%] right-[11%] top-[17%] bottom-[33%] overflow-hidden rounded-sm">
                <img
                  src="/indicators-Photoroom.png"
                  alt="Order flow and volume chart"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00D4FF]/10 via-transparent to-[#7C3AED]/20" />

                {/* Floating stat badges */}
                <motion.div
                  className="absolute left-[8%] top-[10%] flex flex-col items-start gap-1"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <span className="text-[10px] font-semibold text-[#00D4FF]">+15%</span>
                  <span className="w-6 h-[2px] bg-[#00D4FF]" />
                </motion.div>
                <motion.div
                  className="absolute left-[45%] top-[6%] flex flex-col items-start gap-1"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                >
                  <span className="text-[10px] font-semibold text-[#00D4FF]">-27%</span>
                  <span className="w-6 h-[2px] bg-[#00D4FF]" />
                </motion.div>
                <motion.div
                  className="absolute right-[6%] top-[2%] flex flex-col items-start gap-1"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                >
                  <span className="text-[10px] font-semibold text-[#00D4FF]">+500</span>
                  <span className="w-6 h-[2px] bg-[#00D4FF]" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
