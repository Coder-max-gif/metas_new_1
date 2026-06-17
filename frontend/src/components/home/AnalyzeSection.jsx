import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const AnalyzeSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const features = [
    'Real-time Market Analysis',
    'Volume Profile Trading',
    'Smart Order Flow',
    'MT5 Integration'
  ];

  return (
    <section className="py-24 bg-[#0B0F1A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analyze the Markets
              <br />
              Like Never Before
            </h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-xl">
              Take your trading to the next level with advanced analytics and order flow tools designed for professional traders.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <span className="text-lg text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/features">
              <motion.button
                className="bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Features <ArrowRight size={20} />
              </motion.button>
            </Link>
          </AnimatedSection>

          {/* Right Content */}
          <motion.div
            className="relative"
            style={{ x, scale }}
          >
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#7C3AED]/30">
              {/* Video */}
              <video 
                src="/intro.mp4" 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
