import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Layers, TrendingUp, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ChartsPage = () => {
  const benefits = [
    {
      id: 'footprint',
      icon: <BarChart3 size={40} />,
      title: 'Footprint Charts',
      description: 'See every trade in detail with footprint order flow charts showing bid/ask volume at each price level'
    },
    {
      id: 'cluster',
      icon: <Layers size={40} />,
      title: 'Cluster Analysis',
      description: '400+ cluster variations to analyze volume distribution and identify key support/resistance levels'
    },
    {
      id: 'realtime',
      icon: <TrendingUp size={40} />,
      title: 'Real-time Updates',
      description: 'Lightning-fast chart updates with tick-by-tick precision for accurate market timing'
    },
    {
      id: 'custom',
      icon: <Zap size={40} />,
      title: 'Customizable Views',
      description: 'Fully customizable chart layouts, colors, and display options to match your trading style'
    }
  ];

  const features = [
    'Bid/Ask volume display',
    'Delta and cumulative delta',
    'Volume profile integration',
    'Custom time frames',
    'Multiple chart types',
    'Heatmap visualization',
    'Order flow imbalances',
    'POC (Point of Control) markers'
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
            <p className="text-[#00D4FF] mb-4 text-lg">Footprint Order Flow Charts</p>
            <h1 className="text-6xl font-bold mb-6">Advanced Charts</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Professional footprint charts that reveal true market microstructure and order flow dynamics
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
                <BarChart3 size={120} className="text-white/40" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Charts</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="text-[#7C3AED] mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[#9CA3AF]">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8">Chart Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={`feature-${index}`}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <CheckCircle className="text-[#00D4FF] flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-8">
                <div className="aspect-square bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] rounded-xl flex items-center justify-center">
                  <Layers size={80} className="text-white/40" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Start using advanced charts today</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Experience professional-grade order flow analysis with Metas footprint charts
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

export default ChartsPage;