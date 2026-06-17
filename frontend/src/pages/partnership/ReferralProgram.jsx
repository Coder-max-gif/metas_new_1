import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Users, DollarSign, TrendingUp, ArrowRight, Send, CheckCircle, User, Mail, Tag, MessageSquare } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const ReferralProgram = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const contactFormRef = useRef(null);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'referral-join', label: 'Join Referral Program' },
    { value: 'referral-info', label: 'Referral Program Info' },
    { value: 'commission', label: 'Commission & Payments' },
    { value: 'partnership', label: 'Partnership Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'other', label: 'Other' }
  ];

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
              onClick={scrollToContactForm}
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
              onClick={scrollToContactForm}
              className="bg-white text-[#0B0F1A] px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-white/30 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Now <ArrowRight className="inline ml-2" size={20} />
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="referral-contact-form"
        ref={contactFormRef}
        className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#7C3AED]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00D4FF]/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-[800px] mx-auto px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                viewport={{ once: true }}
                className="w-20 h-20 bg-gradient-to-br from-[#7C3AED] to-[#00D4FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#7C3AED]/30"
              >
                <Send size={36} className="text-white" />
              </motion.div>
              <h2 className="text-4xl font-bold mb-4">Join the Referral Program</h2>
              <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto">
                Fill out the form below and our partnership team will get back to you within 24 hours
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <motion.div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-2xl shadow-black/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle size={72} className="mx-auto mb-6 text-green-400" />
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-3">Application Sent!</h3>
                    <p className="text-[#9CA3AF] text-lg">
                      Thank you for your interest. Our partnership team will reach out shortly.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                  >
                    {/* Name Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-[#9CA3AF] mb-2 tracking-wide uppercase">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'name' ? 'text-[#7C3AED]' : 'text-[#9CA3AF]/50'}`} size={18} />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#9CA3AF]/40 focus:outline-none focus:border-[#7C3AED] focus:bg-white/8 focus:shadow-lg focus:shadow-[#7C3AED]/10 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-[#9CA3AF] mb-2 tracking-wide uppercase">
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'email' ? 'text-[#7C3AED]' : 'text-[#9CA3AF]/50'}`} size={18} />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#9CA3AF]/40 focus:outline-none focus:border-[#7C3AED] focus:bg-white/8 focus:shadow-lg focus:shadow-[#7C3AED]/10 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-[#9CA3AF] mb-2 tracking-wide uppercase">
                        Subject
                      </label>
                      <div className="relative">
                        <Tag className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${focusedField === 'subject' ? 'text-[#7C3AED]' : 'text-[#9CA3AF]/50'}`} size={18} />
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleFormChange}
                          onFocus={() => setFocusedField('subject')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-[#7C3AED] focus:bg-white/8 focus:shadow-lg focus:shadow-[#7C3AED]/10 transition-all duration-300 appearance-none cursor-pointer"
                          style={{ colorScheme: 'dark' }}
                        >
                          {subjectOptions.map(opt => (
                            <option key={opt.value} value={opt.value} className="bg-[#1a1147] text-white">
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative">
                      <label className="block text-sm font-semibold text-[#9CA3AF] mb-2 tracking-wide uppercase">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className={`absolute left-4 top-4 transition-colors duration-300 ${focusedField === 'message' ? 'text-[#7C3AED]' : 'text-[#9CA3AF]/50'}`} size={18} />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleFormChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-[#9CA3AF]/40 focus:outline-none focus:border-[#7C3AED] focus:bg-white/8 focus:shadow-lg focus:shadow-[#7C3AED]/10 transition-all duration-300 resize-none"
                          placeholder="Tell us about your audience and how you plan to promote Metas..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/40 transition-all duration-300 flex items-center justify-center gap-3 group"
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Submit Application
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>

                    <p className="text-center text-sm text-[#9CA3AF]/60 mt-4">
                      We typically respond within 24 hours during business days
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ReferralProgram;