import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#7C3AED] to-[#00D4FF] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-white font-bold text-xl">METAS</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#E5E7EB] hover:text-white transition-colors">
                Features <ChevronDown size={16} />
              </button>
            </div>
            <Link to="/pricing" className="text-[#E5E7EB] hover:text-white transition-colors">
              Pricing
            </Link>
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#E5E7EB] hover:text-white transition-colors">
                Partnership <ChevronDown size={16} />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-[#E5E7EB] hover:text-white transition-colors">
                Resources <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#E5E7EB] hover:text-white transition-colors hidden md:block">
              Download
            </button>
            <button className="flex items-center gap-2 text-[#E5E7EB] hover:text-white transition-colors">
              <Globe size={18} />
              <span className="hidden md:inline">English</span>
              <ChevronDown size={14} />
            </button>
            <Link
              to="/login"
              className="bg-white text-[#0B0F1A] px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-white/20 transition-all hover:scale-105"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
