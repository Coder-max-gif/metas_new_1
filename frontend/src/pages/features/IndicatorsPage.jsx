import React from 'react';
import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, Target, TrendingUp, Clock, CheckCircle, ArrowRight, Download } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import { useAuth } from '../../context/AuthContext';

const indicators = [
  {
    name: 'Arrows Indicator',
    id: 'ind-arrows',
    price: '$49 for 6 months',
    icon: <Activity size={40} />,
    gradient: 'from-[#7C3AED] to-[#00D4FF]',
    features: ['Real-time entry arrows', 'Multi-timeframe support', 'Custom alerts', 'MT5 compatible', 'Email support', 'Installation guide'],
    description: 'Precise entry signals with color-coded arrows for clear trading decisions'
  },
  {
    name: 'B&S Numbers Indicator',
    id: 'ind-bs-numbers',
    price: '$49 for 6 months',
    icon: <Target size={40} />,
    gradient: 'from-[#ec4899] to-[#7C3AED]',
    features: ['Buy & Sell numbers', 'Volume analysis', 'Custom alerts', 'MT5 compatible', 'Email support', 'Installation guide'],
    description: 'Track buy and sell pressure with precise numerical indicators'
  },
  {
    name: 'Future Pattern Indicator',
    id: 'ind-future-pattern',
    price: '$49 for 6 months',
    icon: <TrendingUp size={40} />,
    gradient: 'from-[#00D4FF] to-[#7C3AED]',
    features: ['Pattern recognition', 'Predictive analysis', 'Custom alerts', 'MT5 compatible', 'Email support', 'Installation guide'],
    description: 'Identify future chart patterns for predictive trading opportunities'
  },
  {
    name: 'Session Indicator',
    id: 'ind-session',
    price: '$49 for 6 months',
    icon: <Clock size={40} />,
    gradient: 'from-[#7C3AED] to-[#ec4899]',
    features: ['Trading session tracking', 'Time-based alerts', 'Customizable', 'MT5 compatible', 'Email support', 'Installation guide'],
    description: 'Monitor trading sessions and time your entries perfectly'
  }
];

const IndicatorsPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const handlePurchase = (indicatorId) => {
    if (isAuthenticated) {
      navigate(`/payment?product=${indicatorId}`);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            style={{ opacity, scale }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#00D4FF] mb-4 text-lg font-semibold">MetaTrader 5 Premium</p>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              Professional
              <br />
              <span className="text-[#7C3AED]">Indicators</span>
            </h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              4 premium indicators designed exclusively for MetaTrader 5
            </p>
          </motion.div>
        </div>
      </section>

      {/* Indicators Grid */}
      <section className="py-24 bg-white" data-white-header="true">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {indicators.map((indicator, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.03, translateY: -8 }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${indicator.gradient} flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {indicator.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-2 text-[#0B0F1A]">{indicator.name}</h3>
                  <p className="text-[#7C3AED] font-semibold mb-4">{indicator.price}</p>
                  <p className="text-gray-600 mb-6">{indicator.description}</p>

                  <ul className="space-y-3 mb-8">
                    {indicator.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle size={20} className="text-[#00D4FF] flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={() => handlePurchase(indicator.id)}
                    className="w-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#7C3AED]/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Purchase Now <ArrowRight size={20} />
                  </motion.button>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6 text-[#0B0F1A]">Ready to elevate your trading?</h2>
            <p className="text-xl text-[#4B5563] mb-8 max-w-2xl mx-auto">
              Get access to all indicators and start trading smarter today
            </p>
            <Link to="/pricing">
              <motion.button
                className="bg-[#0B0F1A] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#0B0F1A]/30 transition-all"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                View Pricing <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default IndicatorsPage;
