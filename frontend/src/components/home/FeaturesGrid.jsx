import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Activity, Zap, Target, Shield } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const FeaturesGrid = () => {
  const features = [
    {
      icon: <TrendingUp size={40} />,
      title: 'Advanced Indicators',
      description: 'Professional trading indicators designed for MetaTrader 5',
      gradient: 'from-[#7C3AED] to-[#00D4FF]',
      delay: 0
    },
    {
      icon: <Activity size={40} />,
      title: 'Real-time Data',
      description: 'Live market data and order flow analysis',
      gradient: 'from-[#00D4FF] to-[#ec4899]',
      delay: 0.1
    },
    {
      icon: <Zap size={40} />,
      title: 'Fast Execution',
      description: 'Lightning-fast trade execution and signal generation',
      gradient: 'from-[#ec4899] to-[#7C3AED]',
      delay: 0.2
    },
    {
      icon: <Target size={40} />,
      title: 'Precision Trading',
      description: 'High accuracy entry and exit signals',
      gradient: 'from-[#7C3AED] to-[#00D4FF]',
      delay: 0.3
    },
    {
      icon: <Shield size={40} />,
      title: 'Risk Management',
      description: 'Advanced risk management tools and strategies',
      gradient: 'from-[#00D4FF] to-[#ec4899]',
      delay: 0.4
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Performance Tracking',
      description: 'Detailed performance analytics and reporting',
      gradient: 'from-[#ec4899] to-[#7C3AED]',
      delay: 0.5
    }
  ];

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <AnimatedSection>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Powerful Features
          </h2>
          <p className="text-xl text-[#9CA3AF] text-center mb-16 max-w-2xl mx-auto">
            Everything you need to elevate your trading game to the next level
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={feature.delay}>
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.03,
                  translateY: -8,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${feature.gradient}`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#9CA3AF] mb-6">
                    {feature.description}
                  </p>

                  <Link to="/features" className="flex items-center gap-2 text-[#00D4FF] hover:gap-4 transition-all">
                    Learn more <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
