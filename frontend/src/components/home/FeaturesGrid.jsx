import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BarChart3, LineChart, Activity } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const FeaturesGrid = () => {
  const { scrollYProgress } = useScroll();
  
  const featureCards = [
    {
      id: 'advanced-charting',
      icon: <BarChart3 size={32} />,
      title: 'Advanced Charting',
      description: 'Professional footprint charts with order flow visualization',
      color: '#7C3AED'
    },
    {
      id: 'volume-analysis',
      icon: <LineChart size={32} />,
      title: 'Volume Analysis',
      description: 'Deep market insights through volume profile and heatmaps',
      color: '#00D4FF'
    },
    {
      id: 'realtime-data',
      icon: <Activity size={32} />,
      title: 'Real-time Data',
      description: 'Connect to 25+ exchanges for live market data',
      color: '#ec4899'
    }
  ];

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-[#7C3AED]/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-64 h-64 bg-[#00D4FF]/10 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <AnimatedSection>
          <motion.h2 
            className="text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Powerful Features for Professional Traders
          </motion.h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {featureCards.map((card, index) => (
            <AnimatedSection key={card.id} delay={index * 0.1}>
              <motion.div
                className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-[#7C3AED]/50 transition-all cursor-pointer group"
                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: -5,
                  translateZ: 50,
                  boxShadow: `0 30px 80px ${card.color}40`,
                  transition: { duration: 0.4 }
                }}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Glowing Background on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${card.color}20 0%, transparent 70%)`
                  }}
                />

                {/* Animated Icon */}
                <motion.div 
                  className="text-[#7C3AED] mb-4 relative z-10"
                  animate={{
                    rotateY: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  whileHover={{
                    scale: 1.2,
                    rotateZ: 15,
                    transition: { duration: 0.3 }
                  }}
                >
                  {card.icon}
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-bold mb-3 relative z-10"
                  style={{ translateZ: '20px' }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-[#9CA3AF] relative z-10"
                  style={{ translateZ: '10px' }}
                >
                  {card.description}
                </motion.p>

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={`particle-${card.id}-${i}`}
                    className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      background: card.color,
                      left: `${20 + i * 30}%`,
                      top: `${20 + i * 20}%`,
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
