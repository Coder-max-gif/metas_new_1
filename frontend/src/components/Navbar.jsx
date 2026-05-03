import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const featuresLinks = [
    { name: 'Indicators', path: '/features/indicators' },
    { name: 'Algorithm', path: '/features/algorithm' },
    { name: 'AI Analyst', path: '/features/ai-analyst' }
  ];

  const partnershipLinks = [
    { name: 'Referral Program', path: '/partnership/referral' },
    { name: 'B2B', path: '/partnership/b2b' }
  ];

  const resourcesLinks = [
    { name: 'Marketplace', path: '/resources/marketplace' },
    { name: 'Quick Start', path: '/resources/quick-start' },
    { name: 'Community', path: '/resources/community' },
    { name: 'Help Center', path: '/resources/help' }
  ];

  const DropdownMenu = ({ links, isOpen }) => {
    if (!isOpen) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 pt-2 z-50"
      >
        <div className="bg-[#0F172A]/95 backdrop-blur-xl border border-white/10 rounded-lg py-2 min-w-[220px] shadow-xl">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block px-4 py-2 text-[#E5E7EB] hover:text-white hover:bg-white/5 transition-colors"
              onClick={() => setActiveDropdown(null)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0F1A]/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1480px] mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Metas Logo" className="h-14 w-auto" />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Features Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[#E5E7EB] hover:text-white transition-colors py-2">
                Features <ChevronDown size={16} />
              </button>
              <DropdownMenu links={featuresLinks} isOpen={activeDropdown === 'features'} />
            </div>

            <Link to="/pricing" className="text-[#E5E7EB] hover:text-white transition-colors">
              Pricing
            </Link>

            {/* Partnership Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('partnership')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[#E5E7EB] hover:text-white transition-colors py-2">
                Partnership <ChevronDown size={16} />
              </button>
              <DropdownMenu links={partnershipLinks} isOpen={activeDropdown === 'partnership'} />
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[#E5E7EB] hover:text-white transition-colors py-2">
                Resources <ChevronDown size={16} />
              </button>
              <DropdownMenu links={resourcesLinks} isOpen={activeDropdown === 'resources'} />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <Link to="/features/indicators" className="text-[#E5E7EB] hover:text-white transition-colors hidden md:block">
              Download
            </Link>
            <button className="flex items-center gap-2 text-[#E5E7EB] hover:text-white transition-colors">
              <Globe size={18} />
              <span className="hidden md:inline">English</span>
              <ChevronDown size={14} />
            </button>
            <Link
              to="/login"
              className="text-[#E5E7EB] hover:text-white transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-white text-[#0B0F1A] px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-white/20 transition-all hover:scale-105"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
