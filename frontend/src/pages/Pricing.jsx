import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Activity, Zap, TrendingUp, Clock, Target, Flame } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCountdown } from '../hooks/useCountdown';
import { useScrollHeader } from '../hooks/useScrollHeader';

const indicators = [
  {
    id: 'ind-arrows',
    name: 'Arrows Indicator',
    price: '$49',
    period: '/6 months',
    icon: <Activity size={32} />,
    gradient: 'from-[#7C3AED] to-[#00D4FF]',
    features: [
      'Real-time entry arrows',
      'Multi-timeframe support',
      'Custom alerts',
      'MT5 Desktop compatible',
      'Email support',
      'Installation guide'
    ],
    popular: false,
    type: 'indicator'
  },
  {
    id: 'ind-bs-numbers',
    name: 'B&S Numbers Indicator',
    price: '$49',
    period: '/6 months',
    icon: <Target size={32} />,
    gradient: 'from-[#ec4899] to-[#7C3AED]',
    features: [
      'Buy & Sell numbers',
      'Volume analysis',
      'Custom alerts',
      'MT5 Desktop compatible',
      'Email support',
      'Installation guide'
    ],
    popular: false,
    type: 'indicator'
  },
  {
    id: 'ind-future-pattern',
    name: 'Future Pattern Indicator',
    price: '$49',
    period: '/6 months',
    icon: <TrendingUp size={32} />,
    gradient: 'from-[#00D4FF] to-[#7C3AED]',
    features: [
      'Pattern recognition',
      'Predictive analysis',
      'Custom alerts',
      'MT5 Desktop compatible',
      'Email support',
      'Installation guide'
    ],
    popular: false,
    type: 'indicator'
  },
  {
    id: 'ind-session',
    name: 'Session Indicator',
    price: '$49',
    period: '/6 months',
    icon: <Clock size={32} />,
    gradient: 'from-[#7C3AED] to-[#ec4899]',
    features: [
      'Trading session tracking',
      'Time-based alerts',
      'Customizable',
      'MT5 Desktop compatible',
      'Email support',
      'Installation guide'
    ],
    popular: false,
    type: 'indicator'
  }
];

const algorithms = [
  {
    id: 'algo-premium',
    name: 'Premium Algorithm',
    price: '$99',
    period: '/month',
    icon: <Zap size={32} />,
    gradient: 'from-[#00D4FF] to-[#7C3AED]',
    features: [
      'Automated execution',
      'Risk management tools',
      'Backtesting engine',
      'Position sizing',
      'Performance analytics',
      'MT5 Desktop compatible',
      'Priority support'
    ],
    popular: true,
    type: 'algorithm'
  }
];

const ProductCard = ({ plan, index, darkMode = true }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        className={`relative rounded-2xl p-8 h-full flex flex-col ${
          darkMode 
            ? (plan.popular
                ? 'bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 border-2 border-[#7C3AED]'
                : 'bg-white/5 backdrop-blur-lg border border-white/10')
            : (plan.popular
                ? 'bg-gradient-to-br from-[#7C3AED]/10 to-[#00D4FF]/10 border-2 border-[#7C3AED]'
                : 'bg-gray-50 border border-gray-200')
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
        
        <h3 className={`text-3xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-[#0B0F1A]'}`}>{plan.name}</h3>
        <div className="flex items-baseline mb-6">
          <span className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-[#0B0F1A]'}`}>{plan.price}</span>
          <span className={`ml-2 ${darkMode ? 'text-[#9CA3AF]' : 'text-gray-600'}`}>{plan.period}</span>
        </div>
        
        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-3">
              <Check className="text-[#00D4FF] flex-shrink-0" size={20} />
              <span className={darkMode ? 'text-white' : 'text-[#0B0F1A]'}>{feature}</span>
            </li>
          ))}
        </ul>
        
        <motion.button
          onClick={() => {
            if (isAuthenticated) {
              navigate(`/payment?product=${plan.id}`);
            } else {
              navigate('/login');
            }
          }}
          className={`w-full py-4 rounded-lg font-semibold ${
            plan.popular
              ? 'bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white hover:shadow-2xl hover:shadow-[#7C3AED]/50'
              : darkMode 
                ? 'bg-white/10 text-white hover:bg-white/20'
                : 'bg-[#0B0F1A] text-white hover:bg-[#1a1f30]'
          } transition-all`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Purchase Now
        </motion.button>
      </motion.div>
    </AnimatedSection>
  );
};

const Pricing = () => {
  const { hours, minutes, seconds } = useCountdown();
  const { isLightMode } = useScrollHeader();

  useEffect(() => {
    const updateScrollDetection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Define sections by their approximate positions
      // Hero (dark): top
      // Indicators (white): ~800-1600px
      // Offer (dark): ~1600-2200px
      // Algorithm (dark): ~2200-3000px
      // CTA (light): ~3000px+

      const isOverWhiteSection = (scrollY > 800 && scrollY < 1600) || (scrollY > 3000);
      
      // Manually update document body classes if needed
      if (isOverWhiteSection) {
        document.documentElement.classList.add('pricing-white-section');
      } else {
        document.documentElement.classList.remove('pricing-white-section');
      }
    };

    window.addEventListener('scroll', updateScrollDetection);
    updateScrollDetection();
    
    return () => window.removeEventListener('scroll', updateScrollDetection);
  }, []);

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
            <h1 className="text-6xl font-bold mb-6">Choose Your Tools</h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Professional indicators and algorithms designed for real traders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Indicators Section (White Background) */}
      <section className="py-24 bg-white" data-white-header="true">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-[#0B0F1A]">Premium Indicators</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            {indicators.map((plan, index) => (
              <ProductCard key={plan.id} plan={plan} index={index} darkMode={false} />
            ))}
          </div>
        </div>
      </section>

      {/* Offer Section - Smaller */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Video */}
        <video
          src="/image-live.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-[#7C3AED]/20 px-4 py-2 rounded-full mb-4">
              <Flame className="text-[#7C3AED]" size={18} />
              <span className="text-[#7C3AED] font-semibold text-sm">LIMITED TIME OFFER</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get All Indicators for <span className="text-[#00D4FF]">$99</span>
            </h2>
            <p className="text-lg text-white/80 mb-6 max-w-xl mx-auto">
              Limited time offer! Get all 4 premium indicators at a special price.
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px] border border-white/20">
                <div className="text-3xl font-bold text-white">{hours}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Hours</div>
              </div>
              <div className="flex items-center text-2xl font-bold text-white">:</div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px] border border-white/20">
                <div className="text-3xl font-bold text-white">{minutes}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Minutes</div>
              </div>
              <div className="flex items-center text-2xl font-bold text-white">:</div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 min-w-[80px] border border-white/20">
                <div className="text-3xl font-bold text-white">{seconds}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">Seconds</div>
              </div>
            </div>
            
            <Link to="/payment?product=all-indicators">
              <motion.button
                className="bg-white text-[#7C3AED] px-10 py-3 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-white/30 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Grab the Deal Now <ArrowRight size={18} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Algorithm Section (Dark Background) */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-white">Premium Algorithm</h2>
          </AnimatedSection>
          <div className="flex justify-center items-center">
            {algorithms.map((plan, index) => (
              <div key={plan.id} className="w-full max-w-lg">
                <ProductCard plan={plan} index={index} darkMode={true} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#7C3AED]/20 via-[#ec4899]/10 to-[#00D4FF]/20" data-white-header="true">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Trading?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Get started with our premium indicators and algorithm today
            </p>
            <Link to="/features">
              <motion.button
                className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Features <ArrowRight className="inline ml-2" size={20} />
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
