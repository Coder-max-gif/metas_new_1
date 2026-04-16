import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, Book, Video, FileText, MessageCircle } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

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

      {/* Popular Articles */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-[1280px] mx-auto px-8">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-12">Popular Articles</h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-4">
            {popularArticles.map((article, index) => (
              <AnimatedSection key={article.id} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:border-[#7C3AED]/50 cursor-pointer transition-all">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{article.title}</h3>
                    <span className="text-sm text-[#9CA3AF]">{article.views.toLocaleString()} views</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 bg-[#0B0F1A]">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <AnimatedSection>
            <MessageCircle className="mx-auto mb-6 text-[#7C3AED]" size={48} />
            <h2 className="text-4xl font-bold mb-6">Can't find what you're looking for?</h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-2xl mx-auto">
              Our support team is here to help you 24/7
            </p>
            <motion.button
              className="bg-[#7C3AED] text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
              whileHover={{ scale: 1.05, translateY: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Support
            </motion.button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;