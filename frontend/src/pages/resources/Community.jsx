import React from 'react';
import { motion } from 'framer-motion';
import { Users2, Send, Trophy, Calendar } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const Community = () => {
  const communityFeatures = [
    {
      id: 'telegram',
      icon: <Send size={40} />,
      title: 'Telegram Group',
      description: '15,000+ active traders sharing strategies and insights',
      members: '15K+'
    },
    {
      id: 'events',
      icon: <Calendar size={40} />,
      title: 'Live Events',
      description: 'Weekly webinars and trading sessions with experts',
      count: '4/week'
    },
    {
      id: 'competitions',
      icon: <Trophy size={40} />,
      title: 'Trading Competitions',
      description: 'Monthly competitions with real prizes',
      prize: '$10K'
    },
    {
      id: 'mentorship',
      icon: <Users2 size={40} />,
      title: 'Mentorship Program',
      description: 'Connect with experienced traders for guidance',
      mentors: '200+'
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
            <Users2 className="mx-auto mb-6 text-[#7C3AED]" size={64} />
            <h1 className="text-6xl font-bold mb-6">Community</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto mb-8">
              Join a vibrant community of professional traders from around the world
            </p>
            <motion.button
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Telegram
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityFeatures.map((feature, index) => (
              <AnimatedSection key={feature.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-[#7C3AED]">{feature.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-bold">{feature.title}</h3>
                        <span className="text-sm text-[#00D4FF] bg-[#00D4FF]/10 px-3 py-1 rounded-full">
                          {feature.members || feature.count || feature.prize || feature.mentors}
                        </span>
                      </div>
                      <p className="text-[#9CA3AF]">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Recent Discussions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {[
              { id: 'topic-1', title: 'Best strategies for ES futures?', author: 'TraderJoe', replies: 23, views: 450 },
              { id: 'topic-2', title: 'Understanding order flow imbalances', author: 'MarketPro', replies: 45, views: 890 },
              { id: 'topic-3', title: 'Footprint chart setup for scalping', author: 'ScalpMaster', replies: 67, views: 1200 }
            ].map((topic, index) => (
              <AnimatedSection key={topic.id} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#7C3AED]/50 cursor-pointer transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{topic.title}</h3>
                      <p className="text-sm text-[#9CA3AF]">by {topic.author}</p>
                    </div>
                    <div className="flex gap-6 text-sm text-[#9CA3AF]">
                      <span>{topic.replies} replies</span>
                      <span>{topic.views} views</span>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold mb-6">Ready to connect?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Join our community and start learning from experienced traders today
            </p>
            <motion.button
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Now
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Community;