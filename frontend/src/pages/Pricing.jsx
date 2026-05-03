import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Activity, Zap, Package } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Pricing = () => {
  const plans = [
    {
      name: 'MT5 Indicator',
      price: '$49',
      period: '/month',
      icon: <Activity size={32} />,
      gradient: 'from-[#7C3AED] to-[#00D4FF]',
      features: [
        'Premium MT5 Indicator',
        'Real-time volume analysis',
        'Order flow visualization',
        'Multi-timeframe support',
        'Custom alerts',
        'MT5 Desktop compatible',
        'Email support',
        'Installation guide'
      ],
      popular: false
    },
    {
      name: 'MT5 Algorithm',
      price: '$69',
      period: '/month',
      icon: <Zap size={32} />,
      gradient: 'from-[#ec4899] to-[#7C3AED]',
      features: [
        'Premium MT5 Algorithm',
        'Automated execution',
        'Risk management tools',
        'Backtesting engine',
        'Position sizing',
        'Performance analytics',
        'MT5 Desktop compatible',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'MT5 Pro Bundle',
      price: '$99',
      period: '/month',
      icon: <Package size={32} />,
      gradient: 'from-[#00D4FF] to-[#7C3AED]',
      features: [
        'MT5 Indicator included',
        'MT5 Algorithm included',
        'All premium features',
        'Priority support 24/7',
        'Multiple account connections',
        'Advanced analytics',
        'Custom strategy setup',
        'Direct developer access',
        'Lifetime updates'
      ],
      popular: true
    }
  ];

  const comparisonFeatures = [
    { feature: 'MT5 Premium Indicator', indicator: true, algorithm: false, bundle: true },
    { feature: 'MT5 Premium Algorithm', indicator: false, algorithm: true, bundle: true },
    { feature: 'Volume Analysis', indicator: true, algorithm: false, bundle: true },
    { feature: 'Automated Trading', indicator: false, algorithm: true, bundle: true },
    { feature: 'Backtesting Engine', indicator: false, algorithm: true, bundle: true },
    { feature: 'Risk Management', indicator: false, algorithm: true, bundle: true },
    { feature: 'Multiple Accounts', indicator: false, algorithm: false, bundle: true },
    { feature: 'Priority Support', indicator: false, algorithm: true, bundle: true },
    { feature: 'Custom Development', indicator: false, algorithm: false, bundle: true }
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
            <h1 className="text-6xl font-bold mb-6">MetaTrader 5 Pricing</h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Choose the perfect MT5 solution for your trading needs. All plans include 14-day free trial.
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
                  className={`relative rounded-2xl p-8 h-full flex flex-col ${
                    plan.popular
                      ? 'bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 border-2 border-[#7C3AED]'
                      : 'bg-white/5 backdrop-blur-lg border border-white/10'
                  }`}
                  whileHover={{ scale: 1.03, translateY: -8 }}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-6 py-1 rounded-full text-sm font-semibold">
                      Best Value
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {plan.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-[#9CA3AF] ml-2">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <Check className="text-[#00D4FF] flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/signup" className="block">
                    <motion.button
                      className={`w-full py-4 rounded-lg font-semibold ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white hover:shadow-2xl hover:shadow-[#7C3AED]/50'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      } transition-all`}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Download for MT5
                    </motion.button>
                  </Link>
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
            <h2 className="text-4xl font-bold text-center mb-12">Compare MT5 Plans</h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-lg font-semibold">Feature</th>
                    <th className="text-center p-6 text-lg font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <Activity size={20} className="text-[#00D4FF]" />
                        Indicator
                      </div>
                    </th>
                    <th className="text-center p-6 text-lg font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <Zap size={20} className="text-[#7C3AED]" />
                        Algorithm
                      </div>
                    </th>
                    <th className="text-center p-6 text-lg font-semibold">
                      <div className="flex items-center justify-center gap-2">
                        <Package size={20} className="text-[#00D4FF]" />
                        Pro Bundle
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((item, index) => (
                    <tr key={index} className="border-b border-white/10 last:border-0">
                      <td className="p-6">{item.feature}</td>
                      <td className="p-6 text-center">
                        {item.indicator ? (
                          <Check className="mx-auto text-[#00D4FF]" size={20} />
                        ) : (
                          <span className="text-[#9CA3AF]">-</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {item.algorithm ? (
                          <Check className="mx-auto text-[#7C3AED]" size={20} />
                        ) : (
                          <span className="text-[#9CA3AF]">-</span>
                        )}
                      </td>
                      <td className="p-6 text-center">
                        {item.bundle ? (
                          <Check className="mx-auto text-[#00D4FF]" size={20} />
                        ) : (
                          <span className="text-[#9CA3AF]">-</span>
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
            <h2 className="text-4xl font-bold mb-6">Ready to elevate your MT5 trading?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. Download instantly for MetaTrader 5.
            </p>
            <Link to="/signup">
              <motion.button
                className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Download for MT5 <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
