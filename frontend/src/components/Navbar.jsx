import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Globe, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useScrollHeader } from '../hooks/useScrollHeader';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();
  const { isScrolled, isOverWhite } = useScrollHeader();

  const handleLogout = async () => {
    await logout();
    window.location.href = '/';
  };

  const featuresLinks = [
    { name: 'Indicators', path: '/features/indicators' },
    { name: 'Algorithm', path: '/features/algorithm' },
    { name: 'AI Analyst', path: '/features/ai-analyst' }
  ];

  const partnershipLinks = [
    { name: 'Referral Program', path: '/partnership/referral' },
    { name: 'B2B', path: '/partnership/b2b' },
    { name: 'Merit Capital Markets', path: '/partnership/trading-partner' }
  ];

  const resourcesLinks = [
    { name: 'Marketplace', path: '/resources/marketplace' },
    { name: 'Quick Start', path: '/resources/quick-start' },
    { name: 'Community', path: '/resources/community' },
    { name: 'Help Center', path: '/resources/help' }
  ];

  const DropdownMenu = ({ links, isOpen, isLight }) => {
    if (!isOpen) return null;
    
    return (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="absolute top-full left-0 pt-2 z-50"
      >
        <div className={`backdrop-blur-xl border rounded-lg py-2 min-w-[220px] shadow-xl ${
          isLight ? 'bg-white/95 border-gray-200' : 'bg-[#0F172A]/95 border-white/10'
        }`}>
          {links.map((link) => (
            link.external ? (
              <a
                key={link.path}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-2 transition-colors ${
                  isLight ? 'text-gray-700 hover:text-[#7C3AED] hover:bg-gray-100' : 'text-[#E5E7EB] hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 transition-colors ${
                  isLight ? 'text-gray-700 hover:text-[#7C3AED] hover:bg-gray-100' : 'text-[#E5E7EB] hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                {link.name}
              </Link>
            )
          ))}
        </div>
      </motion.div>
    );
  };

  // Determine header styles - default to dark unless over white
  const isLightMode = isOverWhite;

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isLightMode
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm'
          : 'bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-white/10'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-[1480px] mx-auto px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isLightMode ? '/light-background.png' : '/dark-background.png'} 
              alt="Metas Logo" 
              className="h-16 w-auto transform-gpu scale-105" 
            />
          </Link>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Features Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('features')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors py-2 font-medium ${
                isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
              }`}>
                Features <ChevronDown size={16} />
              </button>
              <DropdownMenu links={featuresLinks} isOpen={activeDropdown === 'features'} isLight={isLightMode} />
            </div>

            <Link to="/pricing" className={`transition-colors font-medium ${
              isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
            }`}>
              Pricing
            </Link>

            {/* Partnership Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('partnership')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors py-2 font-medium ${
                isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
              }`}>
                Partnership <ChevronDown size={16} />
              </button>
              <DropdownMenu links={partnershipLinks} isOpen={activeDropdown === 'partnership'} isLight={isLightMode} />
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 transition-colors py-2 font-medium ${
                isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
              }`}>
                Resources <ChevronDown size={16} />
              </button>
              <DropdownMenu links={resourcesLinks} isOpen={activeDropdown === 'resources'} isLight={isLightMode} />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <Link to="/features/indicators" className={`transition-colors font-medium hidden md:block ${
              isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
            }`}>
              Download
            </Link>
            <button className={`flex items-center gap-2 transition-colors font-medium ${
              isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
            }`}>
              <Globe size={18} />
              <span className="hidden md:inline">English</span>
              <ChevronDown size={14} />
            </button>
            
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`transition-colors font-medium ${
                    isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
                  }`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className={`flex items-center gap-2 transition-colors font-medium ${
                    isLightMode ? 'text-gray-800 hover:text-[#7C3AED]' : 'text-white hover:text-[#00D4FF]'
                  }`}
                >
                  <LogOut size={18} />
                  <span className="hidden md:inline">Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={`px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 ${
                  isLightMode 
                    ? 'bg-[#7C3AED] text-white hover:shadow-[#7C3AED]/30' 
                    : 'bg-white text-[#0B0F1A] hover:shadow-white/20'
                }`}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
