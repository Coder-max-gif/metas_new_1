import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Eye, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const LiquidityAnalysisPage = () => {
  const features = [
    {
      id: 'heatmap',
      icon: <Droplets size={40} />,
      title: 'Liquidity Heatmap',
      description: 'Visualize order book depth and liquidity concentration across all price levels'
    },
    {
      id: 'detection',
      icon: <Eye size={40} />,
      title: 'Institutional Orders',
      description: 'Detect and track large institutional orders and hidden liquidity'
    },
    {
      id: 'absorption',
      icon: <Target size={40} />,
      title: 'Absorption Analysis',
      description: 'Identify areas where large orders are being absorbed by the market'
    },
    {
      id: 'momentum',
      icon: <Zap size={40} />,
      title: 'Momentum Tracking',
      description: 'Track momentum shifts and liquidity-driven price movements in real-time'
    }
  ];

  const analysisTools = [
    'Order book depth analysis',
    'Liquidity pools identification',
    'Large order detection',
    'Absorption indicators',
    'Momentum tracking',
    'Market maker activity',
    'Iceberg order detection',
    'Liquidity imbalance alerts'
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
            <p className="text-[#00D4FF] mb-4 text-lg">Advanced Market Depth Tools</p>
            <h1 className="text-6xl font-bold mb-6">Liquidity Analysis</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Understand where the big money is positioned and track institutional order flow
            </p>
          </motion.div>
        </div>
      </section>

      {/* Large Visual */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
              <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/20 to-[#00D4FF]/20 rounded-xl flex items-center justify-center">
                <Droplets size={120} className="text-white/40" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Liquidity Analysis Tools</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="text-[#7C3AED] mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#9CA3AF]">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Analysis Tools */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8">Professional Analysis Suite</h2>
              <p className="text-[#9CA3AF] mb-6">
                Our liquidity analysis tools help you identify where institutional players are positioning themselves and how market depth affects price action.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {analysisTools.map((tool, index) => (
                  <motion.div
                    key={`tool-${index}`}
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="text-[#00D4FF] flex-shrink-0" size={16} />
                    <span className="text-sm">{tool}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
                <div className="aspect-square bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] rounded-xl flex items-center justify-center">
                  <Eye size={80} className="text-white/40" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Use Cases</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Large Order Tracking',
                description: 'Track and analyze large institutional orders as they enter the market'
              },
              {
                title: 'Market Manipulation Detection',
                description: 'Identify potential spoofing and layering tactics by large players'
              },
              {
                title: 'Optimal Entry Timing',
                description: 'Find the best entry and exit points based on liquidity analysis'
              }
            ].map((useCase, index) => (
              <AnimatedSection key={`usecase-${index}`} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center h-full">
                  <h3 className="text-xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-[#9CA3AF]">{useCase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Master liquidity analysis</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start tracking institutional money flow and market depth with our advanced tools
            </p>
            <motion.button
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default LiquidityAnalysisPage;
