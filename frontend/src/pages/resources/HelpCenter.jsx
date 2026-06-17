import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Search, Book, Video, FileText, MessageCircle, Send, CheckCircle, User, Mail, Tag, MessageSquare } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';
import { contactAPI } from '../../services/api';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const contactFormRef = useRef(null);
  const location = useLocation();

  // Auto-scroll to contact form if navigated with hash
  useEffect(() => {
    if (location.hash === '#contact-form') {
      setTimeout(() => {
        contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 500);
    }
  }, [location]);

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await contactAPI.submit(formData);
      setIsSubmitted(true);
      setStatusMessage('Your message has been sent successfully. It will appear in the admin dashboard shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setStatusMessage('');
      }, 4000);
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatusMessage('Unable to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContactForm = () => {
    contactFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const categories = [
    {
      id: 'getting-started',
      icon: <Book size={32} />,
      title: 'Getting Started',
      articles: 15,
      description: 'Learn the basics of Metas platform'
    },
    {
      id: 'features',
      icon: <FileText size={32} />,
      title: 'Features & Tools',
      articles: 42,
      description: 'Detailed guides for all features'
    },
    {
      id: 'tutorials',
      icon: <Video size={32} />,
      title: 'Video Tutorials',
      articles: 28,
      description: 'Step-by-step video guides'
    },
    {
      id: 'troubleshooting',
      icon: <HelpCircle size={32} />,
      title: 'Troubleshooting',
      articles: 35,
      description: 'Solutions to common issues'
    }
  ];

  const popularArticles = [
    { id: 'art-1', title: 'How to set up your first footprint chart', views: 15200 },
    { id: 'art-2', title: 'Understanding volume profile analysis', views: 12800 },
    { id: 'art-3', title: 'Connecting to your exchange', views: 11500 },
    { id: 'art-4', title: 'Order flow basics for beginners', views: 10200 },
    { id: 'art-5', title: 'Advanced indicator configuration', views: 8900 }
  ];

  const subjectOptions = [
    { value: '', label: 'Select a subject' },
    { value: 'general', label: 'General Inquiry' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnership', label: 'Partnership & Referral' },
    { value: 'b2b', label: 'B2B / Enterprise Solutions' },
    { value: 'demo', label: 'Schedule a Demo' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero with Search */}
      <section className="py-24 bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/10 via-transparent to-[#00D4FF]/10" />
        
        <div className="relative z-10 max-w-[1280px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <HelpCircle className="mx-auto mb-6 text-[#7C3AED]" size={64} />
            <h1 className="text-6xl font-bold mb-6">Help Center</h1>
            <p className="text-2xl text-[#9CA3AF] max-w-3xl mx-auto mb-8">
              Find answers, tutorials, and support documentation
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF]" size={20} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg pl-12 pr-4 py-4 text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors"
                  placeholder="Search for help articles..."
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Browse by Category</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <AnimatedSection key={category.id} delay={index * 0.1}>
                <motion.div
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#7C3AED]/50 cursor-pointer transition-all"
                  whileHover={{ scale: 1.02, translateY: -4 }}
                >
                  <div className="text-[#7C3AED] mb-4">{category.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-sm text-[#9CA3AF] mb-3">{category.description}</p>
                  <span className="text-xs text-[#00D4FF]">{category.articles} articles</span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <MessageCircle className="mx-auto mb-6 text-[#7C3AED]" size={48} />
            <h2 className="text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7
            </p>
            <motion.button
              onClick={scrollToContactForm}
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.button>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact-form"
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
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-[#9CA3AF] max-w-xl mx-auto">
                Fill out the form below and our team will get back to you within 24 hours
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
                    <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                    <p className="text-[#9CA3AF] text-lg">
                      Thank you for reaching out. We'll get back to you shortly.
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
                          placeholder="Describe how we can help you..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/40 transition-all duration-300 flex items-center justify-center gap-3 group disabled:cursor-not-allowed disabled:opacity-70"
                      whileHover={{ scale: 1.02, translateY: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </motion.button>

                    {statusMessage && (
                      <p className="text-center text-sm mt-4 text-white/80">
                        {statusMessage}
                      </p>
                    )}

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

export default HelpCenter;