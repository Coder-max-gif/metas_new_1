import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';

const StatsSection = () => {
  const stats = [
    {
      label: 'Users',
      value: '100k+',
      change: '+20%'
    },
    {
      label: 'Markets',
      value: '10,000+',
      change: '+15%'
    },
    {
      label: 'Active Traders',
      value: '50K+',
      change: '+25%'
    },
    {
      label: 'Daily Volume',
      value: '5M+',
      change: '+18%'
    }
  ];

  return (
    <section className="py-20 bg-[#0B0F1A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#7C3AED] mb-2">
                  {stat.value}
                </div>
                <div className="text-lg text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-[#00D4FF] font-semibold">
                  {stat.change}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
