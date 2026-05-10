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

          {/* Right Content - 3D Trading Terminal with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            style={{ perspective: '1500px' }}
          >
            {/* 3D Trading Terminal */}
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-[#1a1147] via-[#0B0F1A] to-[#1a1147] p-6"
              whileHover={{ 
                rotateY: 3, 
                rotateX: -3,
                scale: 1.02,
                transition: { duration: 0.5 }
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: '0 30px 60px -12px rgba(124, 58, 237, 0.6), 0 0 100px rgba(0, 212, 255, 0.3)'
              }}
            >
              <div className="aspect-[4/3] relative">
                {/* Trading Terminal Header */}
                <motion.div 
                  className="flex items-center justify-between mb-4 pb-3 border-b border-white/10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#00D4FF] animate-pulse" />
                    <span className="text-sm font-semibold text-white">LIVE TRADING</span>
                  </div>
                  <div className="flex gap-2">
                    {['BTC', 'ETH', 'ES'].map((symbol, i) => (
                      <motion.div
                        key={symbol}
                        className="px-3 py-1 rounded bg-white/5 text-xs font-bold text-[#00D4FF]"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        {symbol}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* 3D Rotating Price Cards */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: 'BTC/USD', price: '43,250', change: '+2.4%', color: '#00D4FF' },
                    { label: 'ETH/USD', price: '2,890', change: '+1.8%', color: '#7C3AED' },
                    { label: 'ES', price: '4,520', change: '-0.3%', color: '#ec4899' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="relative bg-white/5 backdrop-blur-lg rounded-lg p-3 border border-white/10"
                      initial={{ opacity: 0, rotateX: 90, z: -100 }}
                      animate={{ opacity: 1, rotateX: 0, z: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.6 + index * 0.2,
                        type: 'spring'
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotateY: 10,
                        z: 50,
                        boxShadow: `0 10px 30px ${item.color}60`
                      }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      <div className="text-[10px] text-[#9CA3AF] mb-1">{item.label}</div>
                      <motion.div 
                        className="text-lg font-bold text-white mb-1"
                        animate={{
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ${item.price}
                      </motion.div>
                      <div className={`text-xs font-semibold ${item.change.startsWith('+') ? 'text-[#00D4FF]' : 'text-[#ec4899]'}`}>
                        {item.change}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 3D Animated Candlestick Chart */}
                <div className="relative h-32 bg-white/5 rounded-lg p-2 mb-3 overflow-hidden">
                  <div className="absolute inset-0 flex items-end justify-around px-4 pb-4">
                    {[65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95, 65].map((height, index) => (
                      <motion.div
                        key={`candle-${index}`}
                        className="relative w-2"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: `${height}%`, 
                          opacity: 1,
                          y: [0, -5, 0]
                        }}
                        transition={{ 
                          height: { duration: 0.8, delay: 1 + index * 0.1 },
                          opacity: { duration: 0.5, delay: 1 + index * 0.1 },
                          y: { duration: 2, repeat: Infinity, delay: index * 0.2 }
                        }}
                        whileHover={{ 
                          scale: 1.2,
                          zIndex: 10,
                          filter: 'brightness(1.5)'
                        }}
                        style={{
                          background: index % 2 === 0 
                            ? 'linear-gradient(180deg, #00D4FF 0%, #7C3AED 100%)'
                            : 'linear-gradient(180deg, #ec4899 0%, #7C3AED 100%)',
                          boxShadow: index % 2 === 0 
                            ? '0 0 15px rgba(0, 212, 255, 0.6)'
                            : '0 0 15px rgba(236, 72, 153, 0.6)',
                          borderRadius: '2px',
                          transformStyle: 'preserve-3d'
                        }}
                      />
                    ))}
                  </div>

                  {/* Animated Price Line */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                    <motion.path
                      d="M 10 80 Q 50 60, 90 70 T 170 65 T 250 75 T 330 60 T 410 70"
                      stroke="url(#priceGradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="priceGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="50%" stopColor="#ec4899" />
                        <stop offset="100%" stopColor="#00D4FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Order Flow Indicators */}
                <div className="grid grid-cols-2 gap-2">
                  <motion.div
                    className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-lg p-2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#9CA3AF]">BUY ORDERS</span>
                      <motion.span 
                        className="text-sm font-bold text-[#00D4FF]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        12.5K
                      </motion.span>
                    </div>
                    <motion.div 
                      className="mt-1 h-1 bg-[#00D4FF]/20 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="h-full bg-[#00D4FF]"
                        initial={{ width: '0%' }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 2.2 }}
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="bg-[#ec4899]/10 border border-[#ec4899]/30 rounded-lg p-2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#9CA3AF]">SELL ORDERS</span>
                      <motion.span 
                        className="text-sm font-bold text-[#ec4899]"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                      >
                        8.2K
                      </motion.span>
                    </div>
                    <motion.div 
                      className="mt-1 h-1 bg-[#ec4899]/20 rounded-full overflow-hidden"
                    >
                      <motion.div
                        className="h-full bg-[#ec4899]"
                        initial={{ width: '0%' }}
                        animate={{ width: '45%' }}
                        transition={{ duration: 1.5, delay: 2.3 }}
                      />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Glowing Orbs */}
              <motion.div
                className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-[#00D4FF]/20 blur-2xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 left-10 w-16 h-16 rounded-full bg-[#7C3AED]/20 blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Floating Data Particles Around Terminal */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`data-particle-${i}`}
                className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  background: i % 3 === 0 ? '#7C3AED' : i % 3 === 1 ? '#00D4FF' : '#ec4899',
                  left: `${10 + (i % 4) * 25}%`,
                  top: `${10 + Math.floor(i / 4) * 30}%`,
                  boxShadow: `0 0 10px currentColor`
                }}
                animate={{
                  y: [-20, -40, -20],
                  x: [0, Math.sin(i) * 15, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 3 + (i % 3),
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}

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
