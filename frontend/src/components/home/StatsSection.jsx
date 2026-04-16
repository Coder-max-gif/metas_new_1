import React from 'react';
import AnimatedSection from '../AnimatedSection';

const StatsSection = () => {
  const stats = [
    { 
      id: 'connections',
      number: '25+', 
      title: 'Connections', 
      description: 'to global stock, futures, and cryptocurrency exchanges' 
    },
    { 
      id: 'volume-tools',
      number: '70+', 
      title: 'Volume Analysis Tools', 
      description: 'from Volume Profile analysis tool to Heatmap — everything to enhance your trading insights' 
    },
    { 
      id: 'indicators',
      number: '240+', 
      title: 'Indicators', 
      description: 'combine classic technical analysis with advanced volume analytics in one powerful workspace' 
    },
    { 
      id: 'cluster-variations',
      number: '400+', 
      title: 'Cluster variations (Footprint)', 
      description: 'explore volume cluster charting software to look inside each bar and understand why the price changes' 
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.id} delay={index * 0.1}>
              <div className="text-center">
                <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#7C3AED] via-[#ec4899] to-[#00D4FF] bg-clip-text text-transparent">
                  {stat.number}
                </h2>
                <h3 className="text-xl font-semibold mb-2 text-[#0B0F1A]">{stat.title}</h3>
                <p className="text-[#6B7280]">{stat.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
