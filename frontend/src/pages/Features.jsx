import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BarChart3, TrendingUp, Activity, Zap, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Features = () => {
  const features = [
    {
      slug: 'indicators',
      icon: <TrendingUp size={48} />,
      title: 'MT5 Premium Indicator',
      description: 'Professional order flow indicator with real-time volume analysis for MetaTrader 5'
    },
    {
      slug: 'algorithm',
      icon: <Activity size={48} />,
      title: 'MT5 Premium Algorithm',
      description: 'Advanced automated trading system with risk management for MetaTrader 5'
    },
    {
      slug: 'ai-analyst',
      icon: <Zap size={48} />,
      title: 'AI Market Analysis',
      description: 'AI-powered insights and predictive analytics to enhance your MT5 trading decisions'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">
              Premium MT5
              <br />
              Trading Suite
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Professional trading tools designed exclusively for MetaTrader 5
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Link to={`/features/${feature.slug}`}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10 hover:border-[#7C3AED]/50 transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02, translateY: -8, boxShadow: '0 30px 80px rgba(124, 58, 237, 0.4)' }}
                  >
                    <div className="text-[#7C3AED] mb-6 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-[#9CA3AF] mb-6 text-lg">{feature.description}</p>
                    <div className="flex items-center gap-2 text-[#00D4FF] group-hover:gap-4 transition-all">
                      Learn more <ArrowRight size={20} />
                    </div>
                  </motion.div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
