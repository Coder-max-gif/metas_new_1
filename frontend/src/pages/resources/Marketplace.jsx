import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, TrendingUp, Zap } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const Marketplace = () => {
  const products = [
    {
      id: 'ind-arrows',
      name: 'Arrows Indicator',
      price: '$49',
      rating: 4.9,
      sales: 1250,
      description: 'Precise entry signals with color-coded arrows for clear trading decisions'
    },
    {
      id: 'ind-bs-numbers',
      name: 'B&S Numbers Indicator',
      price: '$49',
      rating: 4.8,
      sales: 890,
      description: 'Track buy and sell pressure with precise numerical indicators'
    },
    {
      id: 'ind-future-pattern',
      name: 'Future Pattern Indicator',
      price: '$49',
      rating: 4.7,
      sales: 2100,
      description: 'Identify future chart patterns for predictive trading opportunities'
    },
    {
      id: 'ind-session',
      name: 'Session Indicator',
      price: '$49',
      rating: 4.9,
      sales: 1800,
      description: 'Monitor trading sessions and time your entries perfectly'
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
            <ShoppingBag className="mx-auto mb-6 text-[#7C3AED]" size={64} />
            <h1 className="text-6xl font-bold mb-6">Marketplace</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Discover premium indicators, strategies, and tools created by professional traders
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <AnimatedSection key={product.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="aspect-video bg-gradient-to-br from-[#7C3AED]/20 to-[#00D4FF]/20 rounded-lg mb-4 flex items-center justify-center">
                    <TrendingUp size={48} className="text-white/40" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                    <span className="text-sm text-[#9CA3AF]">({product.sales} sales)</span>
                  </div>
                  <p className="text-[#9CA3AF] mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#7C3AED]">{product.price}</span>
                    <button className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                      Add to Cart
                    </button>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Browse by Category</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Indicators', 'Strategies', 'Templates', 'Education'].map((category, index) => (
              <AnimatedSection key={`category-${category}`} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 text-center hover:border-[#7C3AED]/50 cursor-pointer transition-all">
                  <Zap className="mx-auto mb-3 text-[#7C3AED]" size={32} />
                  <h3 className="font-semibold">{category}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Marketplace;