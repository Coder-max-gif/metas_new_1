import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Send, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <img src="/dark-background.png" alt="Metas Logo" className="h-12 w-auto max-w-[180px]" />
            </div>
            <p className="text-[#9CA3AF] text-sm max-w-[280px]">
              Professional Order Flow & Volume Analysis Software for Active Traders
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">FEATURES</h4>
            <ul className="space-y-2">
              <li><Link to="/features/charts" className="text-[#9CA3AF] hover:text-white transition-colors">Footprint Charts</Link></li>
              <li><Link to="/features/indicators" className="text-[#9CA3AF] hover:text-white transition-colors">Indicators</Link></li>
              <li><Link to="/features/trading" className="text-[#9CA3AF] hover:text-white transition-colors">Trading Interface</Link></li>
              <li><Link to="/features/liquidity" className="text-[#9CA3AF] hover:text-white transition-colors">Liquidity Analysis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-[#9CA3AF] hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-[#9CA3AF] hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-[#9CA3AF] hover:text-white transition-colors">Terms of Service</Link></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">PARTNERSHIP</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">Become Partner</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#9CA3AF] text-sm">
            © 2026 Metas. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
              <Send size={20} />
            </a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
