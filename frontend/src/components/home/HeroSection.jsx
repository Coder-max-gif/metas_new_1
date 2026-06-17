import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const features = [
    { id: 'mt5-indicator', name: 'MT5 Premium Indicator' },
    { id: 'mt5-algorithm', name: 'MT5 Premium Algorithm' },
    { id: 'order-flow', name: 'Order Flow Analysis' },
    { id: 'automation', name: 'Trading Automation' },
    { id: 'risk-mgmt', name: 'Risk Management' },
    { id: 'mt5-compatible', name: 'MetaTrader 5 Compatible' },
    { id: 'real-time', name: 'Real-Time Execution' }
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-transparent to-[#00D4FF]/20" />
      
      {/* Animated Floating Bars - Left Side with Parallax */}
      <motion.div 
        className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4 opacity-60"
        style={{ y }}
      >
        <motion.div
          className="h-16 bg-gradient-to-r from-[#7C3AED] to-transparent rounded-r-lg blur-sm"
          style={{ width: '200px' }}
          animate={{ 
            width: ['200px', '280px', '200px'],
            x: [0, 20, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-12 bg-gradient-to-r from-[#00D4FF] to-transparent rounded-r-lg blur-sm"
          style={{ width: '150px' }}
          animate={{ 
            width: ['150px', '220px', '150px'],
            x: [0, 30, 0]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="h-14 bg-gradient-to-r from-[#ec4899] to-transparent rounded-r-lg blur-sm"
          style={{ width: '180px' }}
          animate={{ 
            width: ['180px', '260px', '180px'],
            x: [0, 25, 0]
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="h-10 bg-gradient-to-r from-[#7C3AED] to-transparent rounded-r-lg blur-sm"
          style={{ width: '120px' }}
          animate={{ 
            width: ['120px', '200px', '120px'],
            x: [0, 15, 0]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
      </motion.div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Trade <span className="text-[#7C3AED]">Smarter</span>
              <br />
              Execute
              <br />
              Faster
            </motion.h1>
            <motion.p 
              className="text-xl text-[#E5E7EB] mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium Indicator & Algorithm Suite for MetaTrader 5
            </motion.p>
            
            <Link to="/login">
              <motion.button
                className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mb-12 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Start for Free <ArrowRight size={20} />
              </motion.button>
            </Link>

            {/* Vertical Feature List with Stagger Animation */}
            <div className="space-y-0 border-l-2 border-white/10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className={`pl-6 py-3 border-l-2 -ml-[2px] transition-all cursor-pointer ${
                    index === 2 ? 'border-[#7C3AED] bg-gradient-to-r from-[#7C3AED]/10 to-transparent' : 'border-transparent hover:border-white/30'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <span className={index === 2 ? 'text-white font-medium' : 'text-[#9CA3AF]'}>{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            style={{ perspective: '1500px' }}
          >
            {/* Video Container */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-[#7C3AED]/30 bg-white"
              whileHover={{ 
                rotateY: 3, 
                rotateX: -3,
                scale: 1.02,
                transition: { duration: 0.5 }
              }}
              style={{ 
                boxShadow: '0 30px 60px -12px rgba(124, 58, 237, 0.6), 0 0 100px rgba(0, 212, 255, 0.3)'
              }}
            >
              {/* Video */}
              <video 
                src="/intro.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </motion.div>

            {/* Info Card Below with Enhanced Animation */}
            <motion.div
              className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ 
                scale: 1.03, 
                translateY: -8,
                rotateX: 2,
                boxShadow: '0 25px 50px rgba(124, 58, 237, 0.5)',
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(0, 212, 255, 0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(124, 58, 237, 0.4) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-white">Wide range of markets</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Connect to over 25 top exchanges within a single volume analysis trading platform
                </p>
                <Link to="/features" className="text-[#00D4FF] flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </Link>
                <Link to="/login" className="block mt-4">
                  <motion.button
                    className="bg-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold w-full hover:shadow-lg hover:shadow-[#7C3AED]/50 transition-all relative overflow-hidden"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start for free <ArrowRight size={18} />
                    </span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
