import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Zap, TrendingUp, Shield, Target, Activity, CheckCircle } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import { useAuth } from '../../context/AuthContext';

const AlgorithmPage = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Automated Execution',
      description: 'Set your parameters and let the algorithm execute trades automatically'
    },
    {
      icon: <Shield size={32} />,
      title: 'Risk Management Tools',
      description: 'Built-in risk management features to protect your capital'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Backtesting Engine',
      description: 'Test your strategies on historical data before live trading'
    },
    {
      icon: <Target size={32} />,
      title: 'Position Sizing',
      description: 'Automated position sizing based on your risk tolerance'
    },
    {
      icon: <Activity size={32} />,
      title: 'Performance Analytics',
      description: 'Detailed performance analytics and reporting'
    },
    {
      icon: <Shield size={32} />,
      title: 'Priority Support',
      description: 'Get priority support for any algorithm-related issues'
    }
  ];

  const algorithmDetails = {
    name: 'Premium Algorithm',
    id: 'algo-premium',
    price: '$99 per month',
    features: ['Automated execution', 'Risk management tools', 'Backtesting engine', 'Position sizing', 'Performance analytics', 'MT5 compatible', 'Priority support']
  };

  const handlePurchase = () => {
    if (isAuthenticated) {
      navigate(`/payment?product=${algorithmDetails.id}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-[#00D4FF] mb-4 text-lg font-semibold">MetaTrader 5 Premium</p>
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Advanced Trading
                <br />
                <span className="text-[#7C3AED]">Algorithm</span>
              </h1>
              <p className="text-xl text-[#9CA3AF] mb-4">
                Take your trading to the next level with our fully automated trading algorithm designed exclusively for MetaTrader 5.
              </p>
              <p className="text-2xl text-[#7C3AED] font-bold mb-8">
                {algorithmDetails.price}
              </p>
              <div className="flex gap-4 flex-wrap">
                <motion.button
                  onClick={handlePurchase}
                  className="bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.05, translateY: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Purchase Now <ArrowRight size={20} />
                </motion.button>
                <Link to="/pricing">
                  <motion.button
                    className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all"
                    whileHover={{ scale: 1.05, translateY: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Pricing
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>

            <motion.div
              className="relative"
              style={{ y }}
            >
              <div className="rounded-2xl overflow-hidden border border-white/20 bg-gradient-to-br from-[#1a1147] via-[#0B0F1A] to-[#1a1147] p-8">
                <div className="aspect-square bg-white/5 rounded-xl flex items-center justify-center overflow-hidden">
                  <img src="/algo.jpg" alt="Algorithm" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white" data-white-header="true">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6 text-center text-[#0B0F1A]">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
              Everything you need for successful automated trading
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.03, translateY: -8 }}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] flex items-center justify-center mb-6">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0B0F1A]">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-4xl mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-8 text-center">What's Included</h2>
          </AnimatedSection>
          
          <motion.div
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-10"
            whileHover={{ scale: 1.01 }}
          >
            <ul className="space-y-4">
              {algorithmDetails.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <CheckCircle className="text-[#00D4FF] flex-shrink-0" size={24} />
                  <span className="text-xl text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6 text-[#0B0F1A]">Ready to automate your trading?</h2>
            <p className="text-xl text-[#4B5563] mb-8 max-w-2xl mx-auto">
              Get access to our premium algorithm and start trading smarter today
            </p>
            <motion.button
              onClick={handlePurchase}
              className="bg-[#0B0F1A] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#0B0F1A]/30 transition-all inline-flex items-center gap-2"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started <ArrowRight size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AlgorithmPage;
