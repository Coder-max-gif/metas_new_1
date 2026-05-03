import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Zap, Activity, Loader2 } from 'lucide-react';

const LivePerformanceSection = () => {
  const [counts, setCounts] = useState({ winRate: 0, signals: 0 });
  const [streamLoaded, setStreamLoaded] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Get domain from environment or use defaults
  const getStreamParents = () => {
    const parents = ['localhost', '127.0.0.1', 'emergent.run'];
    
    // Extract domain from REACT_APP_BACKEND_URL if available
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    if (backendUrl) {
      try {
        const url = new URL(backendUrl);
        const domain = url.hostname;
        if (domain && !parents.includes(domain)) {
          parents.push(domain);
        }
        // Also add the root domain (e.g., emergentagent.com)
        const rootDomain = domain.split('.').slice(-2).join('.');
        if (rootDomain && !parents.includes(rootDomain)) {
          parents.push(rootDomain);
        }
      } catch (e) {
        console.error('Error parsing backend URL:', e);
      }
    }
    
    return parents.map(p => `parent=${p}`).join('&');
  };

  // Animate counters when in view
  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const winRateTarget = 78;
      const signalsTarget = 24;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          winRate: Math.floor(winRateTarget * progress),
          signals: Math.floor(signalsTarget * progress)
        });
        
        if (currentStep >= steps) {
          setCounts({ winRate: winRateTarget, signals: signalsTarget });
          clearInterval(interval);
        }
      }, duration / steps);
      
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const trustStats = [
    { 
      label: 'Win Rate Today', 
      value: `${counts.winRate}%`, 
      icon: <Target size={20} />,
      color: 'from-green-400 to-emerald-500'
    },
    { 
      label: 'Signals This Week', 
      value: counts.signals, 
      icon: <Zap size={20} />,
      color: 'from-[#00D4FF] to-[#7C3AED]'
    },
    { 
      label: 'Current Trend', 
      value: 'BUY', 
      icon: <TrendingUp size={20} />,
      color: 'from-green-400 to-green-600'
    },
    { 
      label: 'Accuracy Mode', 
      value: 'Active', 
      icon: <Activity size={20} />,
      color: 'from-[#7C3AED] to-[#ec4899]'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #1a1147 0%, #0F172A 50%, #F8FAFC 100%)'
      }}
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.4) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Grid Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(124, 58, 237, 0.3)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00D4FF] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Live Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 mb-6"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(239, 68, 68, 0.3)',
                  '0 0 40px rgba(239, 68, 68, 0.5)',
                  '0 0 20px rgba(239, 68, 68, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1]
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-red-500 font-semibold text-sm">LIVE PERFORMANCE</span>
            </motion.div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white leading-tight">
              Watch Our Indicator
              <br />
              Perform <span className="text-[#7C3AED]">Live</span> in Real
              <br />
              Market Conditions
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              Track entries, exits, trend direction, and market reactions in real time using our advanced system.
            </p>

            {/* Trust Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:border-[#7C3AED]/50 transition-all">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20 mb-2`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <motion.button
                  className="relative bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Free Trial <ArrowRight size={20} />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%', opacity: 0.2 }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </Link>

              <Link to="/features">
                <motion.button
                  className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(124, 58, 237, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Live Stream Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Stream Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1a1147] to-[#0F172A] border border-white/10 shadow-2xl">
              {/* Animated Border Glow */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(45deg, #7C3AED, #00D4FF, #ec4899, #7C3AED)',
                  backgroundSize: '300% 300%'
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-[#1a1147] to-[#0F172A]" />
              </motion.div>

              {/* Stream Embed Container */}
              <div className="relative z-10 aspect-video bg-[#0B0F1A] rounded-3xl overflow-hidden">
                {/* Loading Spinner */}
                {!streamLoaded && !streamError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F1A] z-30">
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Loader2 size={48} className="text-[#7C3AED] mx-auto mb-4" />
                      </motion.div>
                      <p className="text-gray-400 text-sm">Loading live stream...</p>
                    </div>
                  </div>
                )}

                {/* Offline Fallback */}
                {streamError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] z-30">
                    <div className="text-center px-8">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Activity size={32} className="text-gray-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">Live feed currently offline</h3>
                      <p className="text-gray-400 text-sm">Stream will appear here when trading is active</p>
                    </div>
                  </div>
                )}

                {/* Twitch Stream Iframe */}
                <motion.iframe
                  src={`https://player.twitch.tv/?channel=tradeelite14&${getStreamParents()}&muted=true&autoplay=true`}
                  height="100%"
                  width="100%"
                  allowFullScreen
                  frameBorder="0"
                  scrolling="no"
                  className="absolute inset-0 w-full h-full"
                  style={{ borderRadius: 'inherit' }}
                  title="Live Trading Stream"
                  onLoad={() => {
                    setStreamLoaded(true);
                  }}
                  onError={() => setStreamError(true)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: streamLoaded ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Overlay UI Elements */}
              <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start pointer-events-none">
                {/* Live Badge */}
                <motion.div
                  className="bg-red-500/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2"
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(239, 68, 68, 0.5)',
                      '0 0 25px rgba(239, 68, 68, 0.7)',
                      '0 0 15px rgba(239, 68, 68, 0.5)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-white rounded-full"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-white text-xs font-bold">LIVE NOW</span>
                </motion.div>

                {/* Market Pair */}
                <div className="bg-[#0B0F1A]/90 backdrop-blur-sm rounded-lg px-3 py-1.5">
                  <span className="text-white text-xs font-semibold">NIFTY / BANKNIFTY</span>
                </div>
              </div>

              {/* Bottom Overlay */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex justify-between items-end pointer-events-none">
                <div className="bg-[#0B0F1A]/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-gray-300 text-xs">Real-Time Indicator Feed</span>
                </div>

                <div className="bg-green-500/90 backdrop-blur-sm rounded-lg px-3 py-2">
                  <span className="text-white text-xs font-semibold">Updated Live</span>
                </div>
              </div>
            </div>

            {/* Card Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7C3AED]/30 via-[#00D4FF]/30 to-[#ec4899]/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10"
              animate={{
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivePerformanceSection;
