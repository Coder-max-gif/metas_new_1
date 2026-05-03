import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Zap, Activity, Loader2 } from 'lucide-react';

const LivePerformanceSection = () => {
  const [counts, setCounts] = useState({ winRate: 0, signals: 0 });
  const [streamLoaded, setStreamLoaded] = useState(false);
  const [streamError, setStreamError] = useState(false);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start end", "end start"]
  });

  const videoY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const videoRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  const getStreamParents = () => {
    const parents = ['localhost', '127.0.0.1', 'emergent.run'];
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    if (backendUrl) {
      try {
        const url = new URL(backendUrl);
        const domain = url.hostname;
        if (domain && !parents.includes(domain)) {
          parents.push(domain);
        }
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
        background: 'radial-gradient(ellipse at top, #1a1147 0%, #0B0F1A 45%, #05070F 100%)'
      }}
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep base layer with subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Large Glow Orbs */}
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.8) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute top-40 right-20 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.7) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Additional bottom-half glow so the lower section stays rich */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[700px] h-[700px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)'
          }}
          animate={{
            x: [0, 120, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-20 right-0 w-[550px] h-[550px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.6) 0%, transparent 70%)'
          }}
          animate={{
            y: [0, -60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Animated Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="rgba(0, 212, 255, 0.6)"
                strokeWidth="0.5"
              />
            </pattern>
            <radialGradient id="fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="gridMask">
              <rect width="100%" height="100%" fill="url(#fade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" mask="url(#gridMask)" />
        </svg>

        {/* Scan line effect */}
        <motion.div
          className="absolute left-0 right-0 h-[2px] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.8), transparent)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)'
          }}
          animate={{
            top: ['0%', '100%']
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#00D4FF' : '#7C3AED',
              boxShadow: i % 2 === 0 ? '0 0 10px #00D4FF' : '0 0 10px #7C3AED'
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}

        {/* Vignette to deepen edges */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5, 7, 15, 0.8) 100%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-8">
        {/* Centered Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-6 py-3 mb-8"
            animate={{
              boxShadow: [
                '0 0 30px rgba(239, 68, 68, 0.3)',
                '0 0 60px rgba(239, 68, 68, 0.6)',
                '0 0 30px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-3 h-3 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-red-500 font-bold text-lg">LIVE PERFORMANCE</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Watch Our Indicator
            <br />
            Perform <span className="text-[#7C3AED]">Live</span> in Real
            <br />
            Market Conditions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Track entries, exits, trend direction, and market reactions in real time using our advanced MT5 system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left Side - Compact Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-2 gap-4">
              {trustStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#7C3AED]/50 transition-all">
                    <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-20 mb-3`}>
                      <div className="text-white">{stat.icon}</div>
                    </div>
                    <div className="text-xs text-gray-400 mb-1">{stat.label}</div>
                    <div className="text-3xl font-bold text-white">{stat.value}</div>
                  </div>
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`} />
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/login">
                <motion.button
                  className="w-full relative bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-8 py-4 rounded-lg font-semibold text-lg overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
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
                  className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all"
                  whileHover={{ scale: 1.05, borderColor: 'rgba(124, 58, 237, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side - MASSIVE 3D Video */}
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-3 relative group"
            style={{ y: videoY }}
          >
            {/* 3D Container with Perspective */}
            <div className="perspective-1000">
              <motion.div
                className="relative"
                style={{ 
                  transformStyle: 'preserve-3d',
                  rotateY: videoRotate
                }}
                whileHover={{ 
                  rotateY: 0,
                  rotateX: -3,
                  scale: 1.02,
                  transition: { duration: 0.5 }
                }}
              >
                {/* Multiple Animated Border Layers */}
                <motion.div
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(135deg, #7C3AED, #00D4FF, #ec4899, #7C3AED)',
                    backgroundSize: '400% 400%'
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <div className="absolute inset-[3px] rounded-3xl bg-gradient-to-br from-[#0B0F1A] to-[#1a1147]" />
                </motion.div>

                {/* Video Container */}
                <div className="relative z-10 rounded-3xl overflow-hidden aspect-video">
                  {/* Loading State */}
                  {!streamLoaded && !streamError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#0B0F1A] z-30">
                      <div className="text-center">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Loader2 size={64} className="text-[#7C3AED] mx-auto mb-4" />
                        </motion.div>
                        <p className="text-gray-400 text-lg">Loading live stream...</p>
                      </div>
                    </div>
                  )}

                  {/* Offline State */}
                  {streamError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] z-30">
                      <div className="text-center px-8">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Activity size={40} className="text-gray-500" />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-3">Live feed currently offline</h3>
                        <p className="text-gray-400">Stream will appear here when trading is active</p>
                      </div>
                    </div>
                  )}

                  {/* Twitch Stream */}
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
                    onLoad={() => setStreamLoaded(true)}
                    onError={() => setStreamError(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: streamLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Enhanced Overlay UI */}
                  <div className="absolute top-6 left-6 right-6 z-20 flex justify-between items-start pointer-events-none">
                    {/* Live Badge */}
                    <motion.div
                      className="bg-red-500/95 backdrop-blur-sm rounded-full px-5 py-2.5 flex items-center gap-3 shadow-lg shadow-red-500/50"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(239, 68, 68, 0.5)',
                          '0 0 40px rgba(239, 68, 68, 0.8)',
                          '0 0 20px rgba(239, 68, 68, 0.5)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-white rounded-full"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                      <span className="text-white text-sm font-bold">LIVE NOW</span>
                    </motion.div>

                    {/* Market Pair */}
                    <div className="bg-[#0B0F1A]/95 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-lg">
                      <span className="text-white text-sm font-bold">NIFTY / BANKNIFTY</span>
                    </div>
                  </div>

                  {/* Bottom Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 flex justify-between items-end pointer-events-none">
                    <div className="bg-[#0B0F1A]/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                      <span className="text-gray-300 text-sm font-semibold">Real-Time Indicator Feed</span>
                    </div>

                    <motion.div
                      className="bg-green-500/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-white text-sm font-bold">Updated Live</span>
                    </motion.div>
                  </div>
                </div>

                {/* 3D Depth Layers */}
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 blur-xl"
                  style={{ transform: 'translateZ(-30px)' }}
                />
                <div 
                  className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ec4899]/10 to-[#7C3AED]/10 blur-2xl"
                  style={{ transform: 'translateZ(-60px)' }}
                />
              </motion.div>
            </div>

            {/* Massive Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7C3AED]/40 via-[#00D4FF]/40 to-[#ec4899]/40 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity -z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LivePerformanceSection;
