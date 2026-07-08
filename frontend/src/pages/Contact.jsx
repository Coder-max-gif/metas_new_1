import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      await contactAPI.submit(formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatusMessage('Your message has been sent successfully. It will appear in the admin dashboard shortly.');
    } catch (error) {
      console.error('Contact form submission failed:', error);
      setStatusMessage('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
            <h1 className="text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-[#9CA3AF] max-w-3xl mx-auto">
              Have questions? We're here to help. Reach out to our team and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <AnimatedSection>
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors"
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#9CA3AF] focus:outline-none focus:border-[#7C3AED] transition-colors resize-none"
                      placeholder="Tell us more..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#7C3AED] text-white py-3 rounded-lg font-semibold hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:bg-[#4f3bb7]"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={20} />
                  </motion.button>
                  {statusMessage && (
                    <p className="mt-4 text-sm text-white/80">{statusMessage}</p>
                  )}
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-[#9CA3AF] text-lg mb-8">
                    Prefer to reach out directly? Here are other ways to connect with us.
                  </p>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex items-start gap-4"
                    whileHover={{ scale: 1.02, translateX: 8 }}
                  >
                    <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#7C3AED]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-[#9CA3AF]">hamantakumarmalik@gmail.com</p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex items-start gap-4"
                    whileHover={{ scale: 1.02, translateX: 8 }}
                  >
                    <div className="w-12 h-12 bg-[#00D4FF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="text-[#00D4FF]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-[#9CA3AF]">Available Mon-Fri, 9am-6pm EST</p>
                    </div>
                  </motion.div>
                </div>

                <div className="bg-gradient-to-br from-[#7C3AED]/10 to-[#00D4FF]/10 border border-white/10 rounded-xl p-8 mt-8">
                  <h3 className="text-xl font-bold mb-3">Quick Support</h3>
                  <p className="text-[#9CA3AF] mb-4">
                    For immediate assistance, check out our comprehensive documentation and FAQ section.
                  </p>
                  <a href="#" className="text-[#00D4FF] hover:underline inline-flex items-center gap-2">
                    Visit Help Center →
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
