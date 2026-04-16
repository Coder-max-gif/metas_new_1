import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const FeatureDetail = () => {
  const { slug } = useParams();

  const featureData = {
    charts: {
      title: 'Charts & Clusters',
      subtitle: 'Footprint Order Flow Charts',
      hero: 'See market depth like never before with professional footprint charts',
      benefits: [
        'Visualize order flow in real-time',
        'Identify support and resistance levels',
        'Spot institutional trading activity',
        'Analyze volume clusters efficiently'
      ],
      useCases: [
        'Day trading with precision entry points',
        'Swing trading with volume confirmation',
        'Scalping with tick-by-tick analysis'
      ]
    },
    indicators: {
      title: 'Indicators',
      subtitle: '240+ Professional Indicators',
      hero: 'Combine classic technical analysis with advanced volume analytics',
      benefits: [
        'Volume Profile analysis',
        'Delta and cumulative delta',
        'Time and sales filtering',
        'Custom indicator development'
      ],
      useCases: [
        'Multi-timeframe analysis',
        'Divergence detection',
        'Trend confirmation'
      ]
    },
    exchanges: {
      title: 'Exchanges & Connections',
      subtitle: 'Connect to 25+ Global Exchanges',
      hero: 'Trade seamlessly across multiple markets from one platform',
      benefits: [
        'Connect to 25+ exchanges worldwide',
        'Real-time market data streaming',
        'Unified order management',
        'Automatic connection failover'
      ],
      useCases: [
        'Multi-market arbitrage',
        'Global portfolio management',
        'Cross-exchange analysis'
      ]
    },
    trading: {
      title: 'Trading Interface',
      subtitle: 'Professional Trading Platform',
      hero: 'Execute trades with speed and precision',
      benefits: [
        'One-click order execution',
        'Smart DOM with liquidity visualization',
        'Advanced order types',
        'Risk management tools'
      ],
      useCases: [
        'High-frequency trading',
        'Position management',
        'Multi-asset trading'
      ]
    },
    liquidity: {
      title: 'Liquidity Analysis',
      subtitle: 'Advanced Market Depth Tools',
      hero: 'Understand where the big money is positioned',
      benefits: [
        'Heatmap visualization',
        'Liquidity pools identification',
        'Absorption and momentum tracking',
        'Institutional order detection'
      ],
      useCases: [
        'Large order tracking',
        'Market manipulation detection',
        'Optimal entry timing'
      ]
    }
  };

  const data = featureData[slug] || featureData.charts;

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-transparent to-[#00D4FF]/20" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-[#00D4FF] mb-4 text-lg">{data.subtitle}</p>
            <h1 className="text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-2xl text-[#9CA3AF]">{data.hero}</p>
          </motion.div>
        </div>
      </section>

      {/* Large Visual Section */}
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

      {/* Benefits Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-8">Key Benefits</h2>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-[#00D4FF] flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-4xl font-bold mb-8">Use Cases</h2>
              <div className="space-y-4">
                {data.useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <p className="text-lg">{useCase}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20 relative overflow-hidden">
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start using {data.title} today and take your trading to the next level
            </p>
            <motion.button
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Start for free <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetail;
