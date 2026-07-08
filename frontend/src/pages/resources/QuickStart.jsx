import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Rocket, CheckCircle, Play } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const QuickStart = () => {
  const steps = [
    {
      id: 'step-1',
      title: 'Download & Install',
      description: 'Download Metas for your platform and complete the installation',
      time: '2 minutes'
    },
    {
      id: 'step-2',
      title: 'Connect Your Exchange',
      description: 'Add your trading account from 25+ supported exchanges',
      time: '3 minutes'
    },
    {
      id: 'step-3',
      title: 'Configure Charts',
      description: 'Set up your first footprint chart with order flow analysis',
      time: '5 minutes'
    },
    {
      id: 'step-4',
      title: 'Start Trading',
      description: 'Begin analyzing markets with professional tools',
      time: '1 minute'
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
            <Rocket className="mx-auto mb-6 text-[#7C3AED]" size={64} />
            <h1 className="text-6xl font-bold mb-6">Quick Start Guide</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto">
              Get up and running with Metas in under 15 minutes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                id: 'contact',
                title: 'Contact Us',
                description: 'Reach out directly for support or custom setup assistance.',
                actionText: 'Email support',
                actionLink: 'mailto:hamantakumarmalik@gmail.com',
                external: true
              },
              {
                id: 'buy',
                title: 'Buy Metas',
                description: 'Choose the right plan and purchase access to the platform.',
                actionText: 'View pricing',
                actionLink: '/pricing',
                external: false
              },
              {
                id: 'community',
                title: 'Join Telegram Community',
                description: 'Connect with traders, ask questions, and get updates instantly.',
                actionText: 'Join Telegram',
                actionLink: 'https://t.me/your_telegram_group',
                external: true
              }
            ].map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                    <p className="text-[#9CA3AF] mb-6">{item.description}</p>
                  </div>
                  {item.external ? (
                    <a
                      href={item.actionLink}
                      className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-white font-semibold"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.actionText} <Play size={16} />
                    </a>
                  ) : (
                    <Link
                      to={item.actionLink}
                      className="inline-flex items-center gap-2 text-[#00D4FF] hover:text-white font-semibold"
                    >
                      {item.actionText} <Play size={16} />
                    </Link>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Tutorials */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Video Tutorials</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Indicator Tutorial</h3>
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/CW_q1c-1f14"
                    title="Indicator Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Algorithm Tutorial</h3>
                <div className="aspect-video rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/hXGOVgqSR5g"
                    title="Algorithm Tutorial"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">What's Next?</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 'explore', title: 'Explore Features', description: 'Discover all the powerful tools available' },
              { id: 'join', title: 'Join Community', description: 'Connect with other traders and learn together' },
              { id: 'upgrade', title: 'Upgrade Plan', description: 'Unlock premium features and advanced tools' }
            ].map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center">
                  <CheckCircle className="mx-auto mb-4 text-[#00D4FF]" size={40} />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-[#9CA3AF]">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuickStart;