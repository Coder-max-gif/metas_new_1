import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      features: [
        'Basic charts',
        'Volume Profile',
        '5 connections',
        'Essential indicators',
        'Market data',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      features: [
        'Everything in Starter',
        'Footprint charts',
        '10 connections',
        'Basic indicators',
        'Smart Tape',
        'Market Replay',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'Elite',
      price: '$59',
      period: '/month',
      features: [
        'Everything in Pro',
        '25+ connections',
        '240+ indicators',
        'Smart DOM',
        'AI Analyst',
        'Algorithm Trading',
        'Advanced analytics',
        'Custom development',
        '24/7 Premium support'
      ],
      popular: true
    }
  ];

  const comparisonFeatures = [
    { feature: 'Footprint Charts', starter: false, pro: true, elite: true },
    { feature: 'Volume Profile', starter: true, pro: true, elite: true },
    { feature: 'Exchange Connections', starter: '5', pro: '10', elite: '25+' },
    { feature: 'Indicators', starter: 'Essential', pro: 'Basic', elite: '240+' },
    { feature: 'Smart DOM', starter: false, pro: false, elite: true },
    { feature: 'AI Analyst', starter: false, pro: false, elite: true },
    { feature: 'Algorithm Trading', starter: false, pro: false, elite: true },
    { feature: 'Market Replay', starter: false, pro: true, elite: true },
    { feature: 'Custom Development', starter: false, pro: false, elite: true },
    { feature: 'Priority Support', starter: false, pro: true, elite: true }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Choose the plan that fits your trading needs. All plans include a 14-day free trial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 border-2 border-[#7C3AED]'
                      : 'bg-white/5 backdrop-blur-lg border border-white/10'
                  }`}
                  whileHover={{ scale: 1.02, translateY: -8 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-[#9CA3AF] ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="text-[#00D4FF] flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full py-4 rounded-lg font-semibold ${
                      plan.popular
                        ? 'bg-[#7C3AED] text-white hover:shadow-2xl hover:shadow-[#7C3AED]/50'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    } transition-all`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start Free Trial
                  </motion.button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Compare Plans</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-lg font-semibold">Feature</th>
                    <th className="text-center p-6 text-lg font-semibold">Starter</th>
                    <th className="text-center p-6 text-lg font-semibold">Pro</th>
                    <th className="text-center p-6 text-lg font-semibold">Elite</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-white/10 last:border-0">
                      <td className="p-6">{item.feature}</td>
                      <td className="p-6 text-center">
                        {typeof item.starter === 'boolean' ? (
                          item.starter ? <Check className="mx-auto text-[#00D4FF]" size={20} /> : <span className="text-[#9CA3AF]">-</span>
                        ) : (
                          <span>{item.starter}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof item.pro === 'boolean' ? (
                          item.pro ? <Check className="mx-auto text-[#00D4FF]" size={20} /> : <span className="text-[#9CA3AF]">-</span>
                        ) : (
                          <span>{item.pro}</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {typeof item.elite === 'boolean' ? (
                          item.elite ? <Check className="mx-auto text-[#00D4FF]" size={20} /> : <span className="text-[#9CA3AF]">-</span>
                        ) : (
                          <span>{item.elite}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to elevate your trading?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required.
            </p>
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Free Trial <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
