import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ReferralProgram = () => {
  const benefits = [
    {
      id: 'earn-commission',
      icon: <DollarSign size={40} />,
      title: 'Earn 30% Commission',
      description: 'Get 30% recurring commission on all referrals for lifetime'
    },
    {
      id: 'easy-sharing',
      icon: <Users size={40} />,
      title: 'Easy Sharing',
      description: 'Share your unique referral link with your network'
    },
    {
      id: 'track-earnings',
      icon: <TrendingUp size={40} />,
      title: 'Track Your Earnings',
      description: 'Real-time dashboard to monitor your referrals and earnings'
    },
    {
      id: 'bonus-rewards',
      icon: <Gift size={40} />,
      title: 'Bonus Rewards',
      description: 'Unlock special bonuses when you reach milestones'
    }
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
            <h1 className="text-6xl font-bold mb-6">Referral Program</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto mb-8">
              Earn money by referring traders to Metas. Get 30% recurring commission on every successful referral.
            </p>
            <motion.button
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the Program <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">Program Benefits</h2>
          </AnimatedSection>

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

      {/* How It Works */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Sign Up', description: 'Join our referral program for free' },
              { step: '2', title: 'Share', description: 'Share your unique referral link' },
              { step: '3', title: 'Earn', description: 'Get paid for every successful referral' }
            ].map((item, index) => (
              <AnimatedSection key={`step-${item.step}`} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#7C3AED] to-[#00D4FF] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#9CA3AF]">{item.description}</p>
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
            <h2 className="text-4xl font-bold mb-6">Ready to start earning?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Join thousands of affiliates earning passive income with Metas
            </p>
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;