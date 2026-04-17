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
    { id: 'footprint', name: 'Footprint Order Flow Charts' },
    { id: 'indicators', name: 'Indicators' },
    { id: 'exchanges', name: 'Exchanges and Connections' },
    { id: 'interface', name: 'Interface for Trading' },
    { id: 'smart-tape', name: 'Smart Tape' },
    { id: 'smart-dom', name: 'Smart DOM' },
    { id: 'market-replay', name: 'Market Replay' }
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
              New <span className="text-[#7C3AED]">level</span>
              <br />
              of market
              <br />
              transparency
            </motion.h1>
            <motion.p 
              className="text-xl text-[#E5E7EB] mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Professional Order Flow & Volume Analysis Software for Active Traders
            </motion.p>
            
            <motion.button
              className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mb-12 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Start for free <ArrowRight size={20} />
            </motion.button>

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

          {/* Right Content - 3D Rotating Trading UI Card */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            style={{ perspective: '1000px' }}
          >
            {/* 3D Trading UI Visual with Video */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1"
              whileHover={{ 
                rotateY: 5, 
                rotateX: -5,
                scale: 1.02,
                transition: { duration: 0.5 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.5)'
              }}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1094325471?autoplay=1&loop=1&muted=1&background=1&controls=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                  title="Trading Interface Preview"
                ></iframe>
              </div>
            </motion.div>

            {/* Floating Particles Around Card */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF]"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}

            {/* Info Card Below with 3D Effect */}
            <motion.div
              className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ 
                scale: 1.03, 
                translateY: -8,
                rotateX: 2,
                boxShadow: '0 20px 40px rgba(124, 58, 237, 0.4)',
                transition: { duration: 0.3 }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-2xl font-bold mb-2 text-white">Wide range of markets</h3>
              <p className="text-[#9CA3AF] mb-4">
                Connect to over 25 top exchanges within a single volume analysis trading platform
              </p>
              <Link to="/features" className="text-[#00D4FF] flex items-center gap-2 hover:gap-3 transition-all">
                Learn more <ArrowRight size={18} />
              </Link>
              <motion.button
                className="mt-4 bg-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold w-full hover:shadow-lg hover:shadow-[#7C3AED]/50 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Start for free <ArrowRight className="inline ml-2" size={18} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
