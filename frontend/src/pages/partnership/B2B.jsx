import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Shield, Headphones, Zap, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const B2B = () => {
  const features = [
    {
      id: 'enterprise-solutions',
      icon: <Building2 size={40} />,
      title: 'Enterprise Solutions',
      description: 'Customized trading platforms for institutions and prop firms'
    },
    {
      id: 'white-label',
      icon: <Zap size={40} />,
      title: 'White-Label Platform',
      description: 'Branded solutions with your company identity'
    },
    {
      id: 'dedicated-support',
      icon: <Headphones size={40} />,
      title: 'Dedicated Support',
      description: '24/7 technical support and account management'
    },
    {
      id: 'security',
      icon: <Shield size={40} />,
      title: 'Enterprise Security',
      description: 'Bank-level security with custom compliance requirements'
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
            <h1 className="text-6xl font-bold mb-6">B2B Solutions</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto mb-8">
              Enterprise-grade trading solutions for brokers, prop firms, and financial institutions
            </p>
            <Link to="/resources/help#contact-form">
              <motion.button
                className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule Demo <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Enterprise Features</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="text-[#7C3AED] mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-[#9CA3AF]">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Who We Serve</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'brokers', title: 'Brokers', description: 'Enhance your platform with advanced order flow tools' },
              { id: 'prop-firms', title: 'Prop Firms', description: 'Equip your traders with professional analytics' },
              { id: 'institutions', title: 'Institutions', description: 'Custom solutions for large-scale operations' }
            ].map((useCase, index) => (
              <AnimatedSection key={useCase.id} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                  <p className="text-[#9CA3AF]">{useCase.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Let's discuss your requirements</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Contact our B2B team to explore custom solutions for your organization
            </p>
            <Link to="/resources/help#contact-form">
              <motion.button
                className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Sales <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default B2B;