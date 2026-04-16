import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Shield, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ExchangesPage = () => {
  const exchanges = [
    { name: 'Binance', type: 'Crypto', region: 'Global' },
    { name: 'CME', type: 'Futures', region: 'US' },
    { name: 'ICE', type: 'Futures', region: 'US' },
    { name: 'Coinbase', type: 'Crypto', region: 'Global' },
    { name: 'Kraken', type: 'Crypto', region: 'Global' },
    { name: 'EUREX', type: 'Futures', region: 'EU' },
    { name: 'Bybit', type: 'Crypto', region: 'Global' },
    { name: 'Interactive Brokers', type: 'Multi-Asset', region: 'Global' }
  ];

  const benefits = [
    {
      id: 'global-access',
      icon: <Globe size={40} />,
      title: '25+ Global Exchanges',
      description: 'Connect to top cryptocurrency, futures, and stock exchanges worldwide'
    },
    {
      id: 'fast-connection',
      icon: <Zap size={40} />,
      title: 'Lightning-Fast Data',
      description: 'Ultra-low latency connections for real-time market data streaming'
    },
    {
      id: 'secure',
      icon: <Shield size={40} />,
      title: 'Secure & Reliable',
      description: 'Bank-grade encryption with automatic failover and backup connections'
    },
    {
      id: 'unified',
      icon: <TrendingUp size={40} />,
      title: 'Unified Interface',
      description: 'Trade multiple markets from one platform with unified order management'
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
            <p className="text-[#00D4FF] mb-4 text-lg">Connect to 25+ Global Exchanges</p>
            <h1 className="text-6xl font-bold mb-6">Exchanges & Connections</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Trade seamlessly across multiple markets from one unified platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="text-[#7C3AED] mb-4">{benefit.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-[#9CA3AF]">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Exchanges */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Supported Exchanges</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {exchanges.map((exchange, index) => (
              <AnimatedSection key={`exchange-${index}`} delay={index * 0.05}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#7C3AED]/50 cursor-pointer transition-all"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-lg font-bold mb-2">{exchange.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-[#9CA3AF]">
                    <span className="bg-[#7C3AED]/20 px-2 py-1 rounded">{exchange.type}</span>
                    <span>{exchange.region}</span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#9CA3AF]">...and many more exchanges continuously being added</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-6">Advanced Connection Features</h2>
              <ul className="space-y-4">
                {[
                  'Automatic connection failover',
                  'Multiple simultaneous connections',
                  'Real-time market data streaming',
                  'Historical data access',
                  'Order routing optimization',
                  'API rate limit management'
                ].map((feature, index) => (
                  <motion.li
                    key={`conn-feature-${index}`}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="text-[#00D4FF]" size={20} />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
                <div className="aspect-square bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/20 to-[#00D4FF]/20 rounded-xl flex items-center justify-center">
                  <Globe size={120} className="text-white/40" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Connect to global markets today</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Start trading across multiple exchanges with one powerful platform
            </p>
            <motion.button
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
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

export default ExchangesPage;