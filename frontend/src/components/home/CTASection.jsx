import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Send } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/30 via-[#ec4899]/20 to-[#00D4FF]/30" />
      <div className="absolute inset-0 backdrop-blur-3xl" />
      
      {/* Floating bars effect */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden opacity-40">
        <motion.div
          className="absolute bottom-0 h-32 bg-gradient-to-t from-[#7C3AED] to-transparent"
          style={{ left: '10%', width: '80px' }}
          animate={{ height: ['128px', '180px', '128px'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 h-40 bg-gradient-to-t from-[#ec4899] to-transparent"
          style={{ left: '25%', width: '100px' }}
          animate={{ height: ['160px', '220px', '160px'] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-0 h-36 bg-gradient-to-t from-[#00D4FF] to-transparent"
          style={{ left: '45%', width: '90px' }}
          animate={{ height: ['144px', '200px', '144px'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute bottom-0 h-44 bg-gradient-to-t from-[#7C3AED] to-transparent"
          style={{ left: '65%', width: '110px' }}
          animate={{ height: ['176px', '240px', '176px'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 h-28 bg-gradient-to-t from-[#ec4899] to-transparent"
          style={{ left: '85%', width: '85px' }}
          animate={{ height: ['112px', '160px', '112px'] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
      
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
        <AnimatedSection>
          <h2 className="text-5xl font-bold mb-6">
            START TRADING WITH
            <br />
            <span className="text-[#7C3AED]">METATRADER 5</span>
          </h2>
          <p className="text-xl text-[#E5E7EB] mb-4 max-w-2xl mx-auto">
            Download our premium MT5 indicator and algorithm. Professional order flow analysis for serious traders.
          </p>
          <p className="text-[#E5E7EB] mb-8">support@metas.trade</p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <MessageCircle size={24} className="text-[#E5E7EB] hover:text-white cursor-pointer transition-colors" />
            <Send size={24} className="text-[#E5E7EB] hover:text-white cursor-pointer transition-colors" />
            <a href="#" className="text-[#E5E7EB] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-[#E5E7EB] hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
          <Link to="/login">
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Download for MT5 <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
