import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Activity, CheckCircle, ArrowRight, Download } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const IndicatorsPage = () => {
  const features = [
    'Real-time order flow analysis',
    'Volume profile visualization',
    'Institutional level detection',
    'Multi-timeframe support',
    'Customizable alerts',
    'Advanced market depth',
    'One-click installation',
    'MT5 desktop compatible'
  ];

  const benefits = [
    {
      title: 'Professional Order Flow',
      description: 'See exactly where institutional money is flowing in real-time'
    },
    {
      title: 'Volume Analysis',
      description: 'Advanced volume profile tools built specifically for MT5'
    },
    {
      title: 'Smart Alerts',
      description: 'Get notified when high-probability setups appear'
    },
    {
      title: 'MT5 Optimized',
      description: 'Designed from ground up for MetaTrader 5 performance'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#00D4FF] mb-4 text-lg font-semibold">MetaTrader 5 Premium</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              MT5 Premium
              <br />
              <span className="text-[#7C3AED]">Indicator</span>
            </h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Professional order flow indicator designed exclusively for MetaTrader 5
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3D Download Section */}
      <section className="py-32 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="max-w-[1280px] mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - 3D Animated Card */}
            <AnimatedSection>
              <div className="perspective-1000">
                <motion.div
                  className="relative"
                  initial={{ rotateY: -15, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 1 }}
                  whileHover={{ 
                    rotateY: 5, 
                    rotateX: -5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* 3D Card */}
                  <div className="relative bg-gradient-to-br from-[#7C3AED] via-[#8B5CF6] to-[#00D4FF] rounded-3xl p-12 shadow-2xl">
                    {/* Animated Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7C3AED]/50 to-[#00D4FF]/50 blur-2xl"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Card Content */}
                    <div className="relative z-10">
                      <motion.div
                        className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6"
                        animate={{
                          rotateY: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Activity size={48} className="text-white" />
                      </motion.div>

                      <h3 className="text-3xl font-bold text-white mb-4">
                        MT5 Premium Indicator
                      </h3>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 inline-block mb-6">
                        <span className="text-white font-semibold text-sm">MetaTrader 5 Desktop</span>
                      </div>

                      <p className="text-white/90 text-lg mb-8">
                        Professional order flow analysis tool with advanced volume visualization
                      </p>

                      <div className="flex items-center gap-3 text-white">
                        <CheckCircle size={20} />
                        <span>Full MT5 Compatibility</span>
                      </div>
                    </div>
                  </div>

                  {/* 3D Depth Layer */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] to-[#00D4FF] rounded-3xl opacity-30 blur-sm"
                    style={{ transform: 'translateZ(-20px)' }}
                  />
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right - Download Content */}
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  Download for
                  <br />
                  <span className="text-[#00D4FF]">MetaTrader 5</span>
                </h2>

                <p className="text-xl text-gray-300 mb-8">
                  Start using our premium indicator on your MT5 platform today. One-click installation, instant activation.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle size={20} className="text-[#00D4FF] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link to="/signup">
                  <motion.button
                    className="bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-10 py-5 rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                    whileHover={{ scale: 1.05, translateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download size={24} />
                    Download for MT5
                    <ArrowRight size={24} />
                  </motion.button>
                </Link>

                <p className="text-gray-500 text-sm mt-4">
                  Compatible with MetaTrader 5 Desktop • Windows & Mac
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Our MT5 Indicator</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.03, translateY: -8 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Trade Smarter?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join professional traders using our MT5 indicator
            </p>
            <Link to="/signup">
              <motion.button
                className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Download for MT5
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default IndicatorsPage;
