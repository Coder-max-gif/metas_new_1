import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
      <div className="max-w-[1280px] mx-auto px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your Trading?
            </h2>
            <p className="text-xl text-[#9CA3AF] mb-10 max-w-2xl mx-auto">
              Get started today and join thousands of successful traders using our professional tools
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <motion.button
                  className="bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link to="/features">
                <motion.button
                  className="border border-white/30 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
