import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, LineChart, Activity } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const FeaturesGrid = () => {
  const featureCards = [
    {
      id: 'advanced-charting',
      icon: <BarChart3 size={32} />,
      title: 'Advanced Charting',
      description: 'Professional footprint charts with order flow visualization'
    },
    {
      id: 'volume-analysis',
      icon: <LineChart size={32} />,
      title: 'Volume Analysis',
      description: 'Deep market insights through volume profile and heatmaps'
    },
    {
      id: 'realtime-data',
      icon: <Activity size={32} />,
      title: 'Real-time Data',
      description: 'Connect to 25+ exchanges for live market data'
    }
  ];

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16">
            Powerful Features for Professional Traders
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <AnimatedSection key={card.id} delay={index * 0.1}>
              <motion.div
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-[#7C3AED]/50 transition-all cursor-pointer"
                whileHover={{ scale: 1.03, translateY: -6, boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)' }}
              >
                <div className="text-[#7C3AED] mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                <p className="text-[#9CA3AF]">{card.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
