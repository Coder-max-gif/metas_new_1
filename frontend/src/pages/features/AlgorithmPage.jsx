import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, TrendingUp, Target, BarChart3, Code } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const AlgorithmPage = () => {
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Custom Algorithm Builder',
      description: 'Create and deploy your own trading algorithms with our intuitive visual editor or advanced coding interface'
    },
    {
      icon: <Zap size={32} />,
      title: 'High-Speed Execution',
      description: 'Ultra-low latency algorithm execution with direct market access for optimal order placement'
    },
    {
      icon: <Target size={32} />,
      title: 'Backtesting Engine',
      description: 'Test your strategies against historical data with tick-by-tick accuracy and comprehensive performance metrics'
    },
    {
      icon: <Activity size={32} />,
      title: 'Real-Time Monitoring',
      description: 'Monitor algorithm performance in real-time with detailed analytics and risk management tools'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Strategy Optimization',
      description: 'AI-powered parameter optimization to enhance algorithm performance and risk-adjusted returns'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Portfolio Management',
      description: 'Deploy multiple algorithms simultaneously with intelligent position sizing and risk allocation'
    }
  ];

  const algorithmTypes = [
    {
      name: 'Market Making',
      description: 'Provide liquidity and capture bid-ask spreads with advanced market-making algorithms'
    },
    {
      name: 'Arbitrage',
      description: 'Identify and exploit price discrepancies across multiple exchanges in milliseconds'
    },
    {
      name: 'Trend Following',
      description: 'Capture momentum with sophisticated trend detection and position management'
    },
    {
      name: 'Mean Reversion',
      description: 'Profit from price anomalies with statistical models and order flow analysis'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        {/* Animated Algorithm Visualization */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#00D4FF] rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: '50%'
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Algorithmic Trading
              <br />
              <span className="text-[#7C3AED]">Made Simple</span>
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Build, test, and deploy sophisticated trading algorithms with enterprise-grade infrastructure and millisecond execution
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Powerful Algorithm Features</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.05, translateY: -8 }}
                >
                  <div className="text-[#7C3AED] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#9CA3AF]">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Algorithm Types */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Supported Algorithm Types</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {algorithmTypes.map((type, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-gradient-to-br from-[#7C3AED]/10 to-[#00D4FF]/10 border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02 }}
                >
                  <h3 className="text-2xl font-bold mb-3 text-[#00D4FF]">{type.name}</h3>
                  <p className="text-[#9CA3AF]">{type.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Automate Your Trading?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start building and deploying professional algorithms today
            </p>
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AlgorithmPage;
