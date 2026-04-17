import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '../AnimatedSection';

const StatsSection = () => {
  const stats = [
    { 
      id: 'connections',
      number: 25,
      suffix: '+',
      title: 'Connections', 
      description: 'to global stock, futures, and cryptocurrency exchanges' 
    },
    { 
      id: 'volume-tools',
      number: 70,
      suffix: '+',
      title: 'Volume Analysis Tools', 
      description: 'from Volume Profile analysis tool to Heatmap — everything to enhance your trading insights' 
    },
    { 
      id: 'indicators',
      number: 240,
      suffix: '+',
      title: 'Indicators', 
      description: 'combine classic technical analysis with advanced volume analytics in one powerful workspace' 
    },
    { 
      id: 'cluster-variations',
      number: 400,
      suffix: '+',
      title: 'Cluster variations (Footprint)', 
      description: 'explore volume cluster charting software to look inside each bar and understand why the price changes' 
    }
  ];

  const Counter = ({ target, suffix, delay }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isInView, target]);

    return (
      <motion.span 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay }}
      >
        {count}{suffix}
      </motion.span>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB] relative overflow-hidden">
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-0 left-1/4 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
      />

      <div className="max-w-[1280px] mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.id} delay={index * 0.1}>
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h2 
                  className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#7C3AED] via-[#ec4899] to-[#00D4FF] bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0%', '100%', '0%']
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear'
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                >
                  <Counter target={stat.number} suffix={stat.suffix} delay={index * 0.2} />
                </motion.h2>
                <motion.h3 
                  className="text-xl font-semibold mb-2 text-[#0B0F1A]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {stat.title}
                </motion.h3>
                <motion.p 
                  className="text-[#6B7280]"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {stat.description}
                </motion.p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
