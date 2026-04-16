import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const AnalyzeSection = () => {
  return (
    <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-64 h-64 bg-[#7C3AED]/20 blur-[100px]" />
      
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-6">
              Analyze <span className="text-[#9CA3AF]">stocks</span>
              <br />
              with advanced
              <br />
              ATAS tools
            </h2>
            <div className="space-y-4 text-[#9CA3AF]">
              <p>
                Leave technical analysis to the beginners. Start seeing what regular charts won't show you with professional volume analysis tools for traders.
              </p>
              <p>
                When you understand how to use volume in trading, you'll uncover the real processes within each candlestick — patterns of large participants' activity and price formation structure.
              </p>
              <p>
                Order flow is an advanced market analysis method.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Content - 3D Animated Trading Visualization */}
          <AnimatedSection delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 p-8" style={{
              background: 'linear-gradient(135deg, #1a1147 0%, #0B0F1A 50%, #1a1147 100%)',
              boxShadow: '0 20px 60px rgba(124, 58, 237, 0.4)'
            }}>
              {/* 3D Trading Chart Visualization */}
              <div className="relative aspect-[4/3]">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={`grid-h-${i}`}
                      className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent"
                      style={{ top: `${(i + 1) * 12.5}%` }}
                      animate={{ 
                        opacity: [0.2, 0.5, 0.2],
                        scaleX: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.2,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={`grid-v-${i}`}
                      className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-[#00D4FF] to-transparent"
                      style={{ left: `${(i + 1) * 16.66}%` }}
                      animate={{ 
                        opacity: [0.2, 0.5, 0.2],
                        scaleY: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        delay: i * 0.3,
                        ease: 'easeInOut'
                      }}
                    />
                  ))}
                </div>

                {/* Floating 3D Candlesticks */}
                <div className="absolute inset-0 flex items-end justify-around px-8 pb-12">
                  {[
                    { height: 60, color: '#00D4FF', delay: 0 },
                    { height: 45, color: '#7C3AED', delay: 0.2 },
                    { height: 75, color: '#00D4FF', delay: 0.4 },
                    { height: 50, color: '#ec4899', delay: 0.6 },
                    { height: 85, color: '#00D4FF', delay: 0.8 },
                    { height: 55, color: '#7C3AED', delay: 1 },
                    { height: 70, color: '#00D4FF', delay: 1.2 }
                  ].map((bar, index) => (
                    <motion.div
                      key={`bar-${index}`}
                      className="relative w-8"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: `${bar.height}%`, 
                        opacity: 1,
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        height: { duration: 1, delay: bar.delay },
                        opacity: { duration: 0.5, delay: bar.delay },
                        y: { 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: bar.delay,
                          ease: 'easeInOut'
                        }
                      }}
                    >
                      {/* 3D Bar with gradient and shadow */}
                      <div 
                        className="w-full h-full rounded-t-lg relative"
                        style={{
                          background: `linear-gradient(180deg, ${bar.color} 0%, ${bar.color}80 100%)`,
                          boxShadow: `0 0 20px ${bar.color}60, inset 0 2px 10px rgba(255,255,255,0.2)`,
                          transform: 'perspective(500px) rotateX(5deg)',
                        }}
                      >
                        {/* Highlight effect */}
                        <div 
                          className="absolute top-0 left-0 right-0 h-1/3 rounded-t-lg"
                          style={{
                            background: 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 100%)'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Animated Line Chart Overlay */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <motion.path
                    d="M 20 250 Q 80 200, 120 220 T 220 180 T 320 150 T 380 120"
                    stroke="url(#lineGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.8 }}
                    transition={{ duration: 2, ease: 'easeInOut', delay: 1.5 }}
                  />
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#7C3AED" />
                      <stop offset="50%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#00D4FF" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating Data Points */}
                {[
                  { x: '15%', y: '30%', delay: 2 },
                  { x: '40%', y: '45%', delay: 2.3 },
                  { x: '65%', y: '35%', delay: 2.6 },
                  { x: '85%', y: '25%', delay: 2.9 }
                ].map((point, index) => (
                  <motion.div
                    key={`point-${index}`}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      left: point.x,
                      top: point.y,
                      background: 'radial-gradient(circle, #00D4FF 0%, #7C3AED 100%)',
                      boxShadow: '0 0 15px #00D4FF'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1.5, 1],
                      opacity: [0, 1, 0.8]
                    }}
                    transition={{ 
                      duration: 1,
                      delay: point.delay,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                ))}

                {/* Floating Icons */}
                <motion.div
                  className="absolute top-8 right-8 text-[#00D4FF]"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <TrendingUp size={32} />
                </motion.div>

                <motion.div
                  className="absolute bottom-8 left-8 text-[#7C3AED]"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5
                  }}
                >
                  <BarChart3 size={32} />
                </motion.div>

                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#ec4899]"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Activity size={48} />
                </motion.div>

                {/* Glow effect overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.2) 0%, transparent 70%)'
                  }}
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
