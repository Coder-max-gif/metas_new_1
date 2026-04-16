import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, BarChart2, Gauge, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const IndicatorsPage = () => {
  const categories = [
    {
      id: 'volume',
      icon: <BarChart2 size={40} />,
      title: 'Volume Indicators',
      count: '70+',
      description: 'Volume Profile, Delta, Cumulative Delta, Volume Clusters, and more'
    },
    {
      id: 'technical',
      icon: <TrendingUp size={40} />,
      title: 'Technical Indicators',
      count: '100+',
      description: 'Classic indicators like RSI, MACD, Bollinger Bands, Moving Averages'
    },
    {
      id: 'custom',
      icon: <Activity size={40} />,
      title: 'Custom Indicators',
      count: '50+',
      description: 'Proprietary indicators developed specifically for order flow analysis'
    },
    {
      id: 'advanced',
      icon: <Gauge size={40} />,
      title: 'Advanced Analytics',
      count: '20+',
      description: 'Market depth, liquidity analysis, and institutional order detection'
    }
  ];

  const popularIndicators = [
    'Volume Profile',
    'Delta Indicator',
    'Cumulative Delta',
    'Volume Clusters',
    'Order Flow Imbalance',
    'Market Delta',
    'Absorption Indicator',
    'Liquidity Heatmap',
    'Time & Sales',
    'VWAP',
    'Volume Weighted',
    'Smart Money Index'
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
            <p className="text-[#00D4FF] mb-4 text-lg">240+ Professional Indicators</p>
            <h1 className="text-6xl font-bold mb-6">Indicators</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Combine classic technical analysis with advanced volume analytics in one powerful workspace
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Indicator Categories</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-[#7C3AED]">{category.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                        <span className="text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full text-sm font-semibold">
                          {category.count}
                        </span>
                      </div>
                      <p className="text-[#9CA3AF]">{category.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Indicators */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Popular Indicators</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularIndicators.map((indicator, index) => (
              <AnimatedSection key={`indicator-${index}`} delay={index * 0.05}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-4 hover:border-[#7C3AED]/50 cursor-pointer transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-[#00D4FF] flex-shrink-0" size={16} />
                    <span className="text-sm">{indicator}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
                <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/20 to-[#00D4FF]/20 rounded-xl flex items-center justify-center">
                  <Activity size={120} className="text-white/40" />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl font-bold mb-6">Powerful Analysis Tools</h2>
              <p className="text-[#9CA3AF] mb-6">
                Our indicators are designed to work seamlessly with order flow data, providing insights that traditional indicators simply cannot offer.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time calculations',
                  'Multi-timeframe analysis',
                  'Custom alert configurations',
                  'Backtesting capabilities'
                ].map((feature, index) => (
                  <motion.li
                    key={`adv-feature-${index}`}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-[#00D4FF]" size={20} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Access 240+ professional indicators</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start analyzing markets like a professional with our comprehensive indicator suite
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

export default IndicatorsPage;