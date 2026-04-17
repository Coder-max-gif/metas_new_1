import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Sparkles, TrendingUp, AlertCircle, BarChart3, Zap } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const AIAnalystPage = () => {
  const features = [
    {
      icon: <Brain size={32} />,
      title: 'AI-Powered Insights',
      description: 'Advanced machine learning models analyze market patterns and generate actionable trading insights in real-time'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Smart Pattern Recognition',
      description: 'Automatically detect complex chart patterns, order flow anomalies, and market structure changes'
    },
    {
      icon: <AlertCircle size={32} />,
      title: 'Risk Assessment',
      description: 'AI-driven risk analysis evaluates market conditions and provides real-time risk scores for your positions'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Predictive Analytics',
      description: 'Leverage deep learning models trained on billions of data points to forecast potential price movements'
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Market Sentiment Analysis',
      description: 'Analyze order flow, volume profiles, and liquidity data to gauge institutional sentiment'
    },
    {
      icon: <Zap size={32} />,
      title: 'Automated Alerts',
      description: 'Receive intelligent notifications when AI detects high-probability trading opportunities'
    }
  ];

  const capabilities = [
    {
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English and receive detailed market analysis and trade recommendations',
      color: 'from-[#7C3AED] to-[#ec4899]'
    },
    {
      title: 'Multi-Timeframe Analysis',
      description: 'AI simultaneously analyzes multiple timeframes to provide comprehensive market context',
      color: 'from-[#00D4FF] to-[#7C3AED]'
    },
    {
      title: 'Adaptive Learning',
      description: 'AI models continuously learn from market behavior and adapt to changing conditions',
      color: 'from-[#ec4899] to-[#00D4FF]'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        {/* Animated Neural Network Visualization */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {[...Array(5)].map((_, i) => (
              [...Array(5)].map((_, j) => (
                <motion.circle
                  key={`${i}-${j}`}
                  cx={150 + i * 150}
                  cy={100 + j * 100}
                  r="4"
                  fill="#00D4FF"
                  initial={{ opacity: 0.3 }}
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    r: [4, 6, 4]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (i + j) * 0.2
                  }}
                />
              ))
            ))}
          </svg>
        </div>
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              AI Trading
              <br />
              <span className="text-[#00D4FF]">Analyst</span>
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Your intelligent trading companion powered by advanced AI and machine learning algorithms
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Intelligent Analysis Features</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:border-[#00D4FF]/50 transition-all"
                  whileHover={{ scale: 1.05, translateY: -8 }}
                >
                  <div className="text-[#00D4FF] mb-4">
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

      {/* AI Capabilities */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Advanced AI Capabilities</h2>
          </AnimatedSection>
          
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <motion.div
                  className={`bg-gradient-to-r ${capability.color} p-[1px] rounded-xl`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-[#0B0F1A] rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-3">{capability.title}</h3>
                    <p className="text-[#9CA3AF] text-lg">{capability.description}</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">AI in Action</h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 border border-white/10 rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">Real-Time Analysis</h3>
                  <div className="space-y-4">
                    {[
                      'Pattern detected: Bullish engulfing on 15m timeframe',
                      'Order flow: Strong buying pressure at support level',
                      'Risk assessment: Low risk entry opportunity',
                      'Confidence score: 87% probability of upward movement'
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="bg-white/5 border border-white/10 rounded-lg p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.2 }}
                      >
                        <p className="text-[#E5E7EB]">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <motion.div
                    className="relative w-64 h-64"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7C3AED] via-[#00D4FF] to-[#ec4899] opacity-20 blur-xl" />
                    <div className="absolute inset-8 rounded-full bg-[#0B0F1A] border-2 border-[#00D4FF] flex items-center justify-center">
                      <Brain size={80} className="text-[#00D4FF]" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Experience AI-Powered Trading</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Let artificial intelligence enhance your trading decisions and uncover opportunities
            </p>
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Try AI Analyst
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AIAnalystPage;
