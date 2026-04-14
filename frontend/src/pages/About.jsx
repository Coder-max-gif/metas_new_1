import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, TrendingUp } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: <Users size={40} />,
      title: 'Trader-First Approach',
      description: 'Built by professional traders who understand the challenges of modern markets'
    },
    {
      icon: <Target size={40} />,
      title: 'Precision Tools',
      description: 'Advanced analytics that reveal market microstructure and order flow dynamics'
    },
    {
      icon: <Award size={40} />,
      title: 'Industry Leading',
      description: 'Trusted by thousands of professional traders worldwide'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Continuous Innovation',
      description: 'Regular updates with cutting-edge features based on trader feedback'
    }
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
            <h1 className="text-6xl font-bold mb-6">About Metas</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              We're on a mission to democratize professional trading tools and make advanced market analysis accessible to active traders worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-[#9CA3AF] text-lg">
                <p>
                  Metas was founded by a team of professional traders who were frustrated with the limitations of traditional charting platforms.
                </p>
                <p>
                  We saw a gap in the market for software that could truly reveal what's happening beneath the surface of price action — the real order flow and volume dynamics that drive market movements.
                </p>
                <p>
                  Today, Metas serves thousands of traders across the globe, from retail day traders to institutional professionals, all using our platform to gain an edge in the markets.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
                <div className="aspect-square bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/20 to-[#00D4FF]/20 rounded-xl flex items-center justify-center">
                  <TrendingUp size={120} className="text-white/40" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="text-[#7C3AED] mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-[#9CA3AF]">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
