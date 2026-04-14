import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, LineChart, Activity, MessageCircle, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  const features = [
    'Footprint Order Flow Charts',
    'Indicators',
    'Exchanges and Connections',
    'Interface for Trading',
    'Smart Tape',
    'Smart DOM',
    'Market Replay'
  ];

  const stats = [
    { number: '25+', title: 'Connections', description: 'to global stock, futures, and cryptocurrency exchanges' },
    { number: '70+', title: 'Volume Analysis Tools', description: 'from Volume Profile analysis tool to Heatmap — everything to enhance your trading insights' },
    { number: '240+', title: 'Indicators', description: 'combine classic technical analysis with advanced volume analytics in one powerful workspace' },
    { number: '400+', title: 'Cluster variations (Footprint)', description: 'explore volume cluster charting software to look inside each bar and understand why the price changes' }
  ];

  const featureCards = [
    {
      icon: <BarChart3 size={32} />,
      title: 'Advanced Charting',
      description: 'Professional footprint charts with order flow visualization'
    },
    {
      icon: <LineChart size={32} />,
      title: 'Volume Analysis',
      description: 'Deep market insights through volume profile and heatmaps'
    },
    {
      icon: <Activity size={32} />,
      title: 'Real-time Data',
      description: 'Connect to 25+ exchanges for live market data'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-transparent to-[#00D4FF]/20" />
        
        {/* Floating Bars - Left Side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-4 opacity-60">
          <motion.div
            className="h-16 bg-gradient-to-r from-[#7C3AED] to-transparent rounded-r-lg blur-sm"
            style={{ width: '200px' }}
            animate={{ width: ['200px', '280px', '200px'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="h-12 bg-gradient-to-r from-[#00D4FF] to-transparent rounded-r-lg blur-sm"
            style={{ width: '150px' }}
            animate={{ width: ['150px', '220px', '150px'] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
          <motion.div
            className="h-14 bg-gradient-to-r from-[#ec4899] to-transparent rounded-r-lg blur-sm"
            style={{ width: '180px' }}
            animate={{ width: ['180px', '260px', '180px'] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div
            className="h-10 bg-gradient-to-r from-[#7C3AED] to-transparent rounded-r-lg blur-sm"
            style={{ width: '120px' }}
            animate={{ width: ['120px', '200px', '120px'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
                New <span className="text-[#7C3AED]">level</span>
                <br />
                of market
                <br />
                transparency
              </h1>
              <p className="text-xl text-[#E5E7EB] mb-8 max-w-lg">
                Professional Order Flow & Volume Analysis Software for Active Traders
              </p>
              
              <motion.button
                className="bg-[#7C3AED] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 mb-12 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start for free <ArrowRight size={20} />
              </motion.button>

              {/* Vertical Feature List */}
              <div className="space-y-0 border-l-2 border-white/10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className={`pl-6 py-3 border-l-2 -ml-[2px] transition-all cursor-pointer ${
                      index === 2 ? 'border-[#7C3AED] bg-gradient-to-r from-[#7C3AED]/10 to-transparent' : 'border-transparent hover:border-white/30'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <span className={index === 2 ? 'text-white font-medium' : 'text-[#9CA3AF]'}>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Trading UI Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Trading UI Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#7C3AED]/30 via-[#ec4899]/30 to-[#00D4FF]/30 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp size={64} className="mx-auto mb-4 text-white/40" />
                    <p className="text-white/60">Trading Interface Preview</p>
                  </div>
                </div>
              </div>

              {/* Info Card Below */}
              <motion.div
                className="mt-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6"
                whileHover={{ scale: 1.02, translateY: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-2 text-white">Wide range of markets</h3>
                <p className="text-[#9CA3AF] mb-4">
                  Connect to over 25 top exchanges within a single volume analysis trading platform
                </p>
                <Link to="/features" className="text-[#00D4FF] flex items-center gap-2 hover:gap-3 transition-all">
                  Learn more <ArrowRight size={18} />
                </Link>
                <motion.button
                  className="mt-4 bg-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold w-full hover:shadow-lg hover:shadow-[#7C3AED]/50 transition-all"
                  whileHover={{ scale: 1.03 }}
                >
                  Start for free <ArrowRight className="inline ml-2" size={18} />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Light Background */}
      <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-[#7C3AED] via-[#ec4899] to-[#00D4FF] bg-clip-text text-transparent">
                    {stat.number}
                  </h2>
                  <h3 className="text-xl font-semibold mb-2 text-[#0B0F1A]">{stat.title}</h3>
                  <p className="text-[#6B7280]">{stat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Analyze Section */}
      <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
        <div className="absolute left-0 top-0 w-64 h-64 bg-[#7C3AED]/20 blur-[100px]" />
        
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <AnimatedSection>
              <h2 className="text-5xl font-bold mb-6">
                Analyze <span className="text-[#9CA3AF]">stocks</span>
                <br />
                with advanced
                <br />
                ATAS tools
              </h2>
              <div className="space-y-4 text-[#9CA3AF]">
                <p>
                  Leave technical analysis to the beginners. Start seeing what regular charts won't show you with professional volume analysis tools for traders.
                </p>
                <p>
                  When you understand how to use volume in trading, you'll uncover the real processes within each candlestick — patterns of large participants' activity and price formation structure.
                </p>
                <p>
                  Order flow is an advanced market analysis method.
                </p>
              </div>
            </AnimatedSection>

            {/* Right Content - Trading Desk Image */}
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] rounded-xl flex items-center justify-center">
                  <BarChart3 size={80} className="text-white/40" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">
              Powerful Features for Professional Traders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 hover:border-[#7C3AED]/50 transition-all cursor-pointer"
                  whileHover={{ scale: 1.03, translateY: -6, boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)' }}
                >
                  <div className="text-[#7C3AED] mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-[#9CA3AF]">{card.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 text-[#0B0F1A]">
              Trusted by Professional Traders
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Luca D',
                country: 'DE',
                date: 'Feb 1, 2023',
                rating: 5,
                text: 'better than EXOcharts. easy to use, has everything you need. crypto data is free, you can really get down to the specific info you need.'
              },
              {
                name: 'Jeremy Bartoli',
                country: 'ES',
                date: 'Aug 25, 2025',
                rating: 5,
                text: 'Thank you so much for everything. A top-quality technical service. If you need an assessment, just ask. Thank you so much.'
              },
              {
                name: 'Sarah Chen',
                country: 'US',
                date: 'Jun 26, 2025',
                rating: 5,
                text: 'Best footprint platform. Essential tool for any serious trader. The volume analysis features are unmatched.'
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                        index === 0 ? 'bg-green-600' : index === 1 ? 'bg-cyan-600' : 'bg-purple-600'
                      }`}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B0F1A]">{testimonial.name}</p>
                        <p className="text-sm text-[#6B7280]">{testimonial.country}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#6B7280]">{testimonial.date}</p>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-5 h-5 bg-teal-500 rounded-sm" />
                    ))}
                  </div>
                  <p className="text-[#0B0F1A]">{testimonial.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Press Section */}
          <AnimatedSection delay={0.4}>
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-center mb-10 text-[#0B0F1A]">In the Press:</h3>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                <div className="text-3xl font-bold text-[#0B0F1A]">TRADERS'</div>
                <div className="text-3xl font-bold text-[#0B0F1A]">Yahoo! Finance</div>
                <div className="text-2xl font-bold text-[#0B0F1A]">FT FINANCIAL TIMES</div>
                <div className="text-2xl font-bold text-[#0B0F1A] border-2 border-[#0B0F1A] px-4 py-2">FINANCE MAGNATES</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
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
              ADVANCED SOLUTION
              <br />
              FOR ORDER FLOW
              <br />
              & VOLUME ANALYSIS
            </h2>
            <p className="text-xl text-[#E5E7EB] mb-4 max-w-2xl mx-auto">
              Gain an edge with volume and order flow software: discover what drives the market and see the actions of major players
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
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Start for free <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
