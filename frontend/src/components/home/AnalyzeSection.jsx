import React from 'react';
import { BarChart3 } from 'lucide-react';
import AnimatedSection from '../AnimatedSection';

const AnalyzeSection = () => {
  return (
    <section className="py-24 bg-[#0B0F1A] relative overflow-hidden">
      <div className="absolute left-0 top-0 w-64 h-64 bg-[#7C3AED]/20 blur-[100px]" />
      
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <h2 className="text-5xl font-bold mb-6">
              Analyze <span className="text-[#9CA3AF]">stocks</span>
              <br />
              with advanced
              <br />
              ATAS tools
            </h2>
            <div className="space-y-4 text-[#9CA3AF]">
              <p>
                Leave technical analysis to the beginners. Start seeing what regular charts won't show you with professional volume analysis tools for traders.
              </p>
              <p>
                When you understand how to use volume in trading, you'll uncover the real processes within each candlestick — patterns of large participants' activity and price formation structure.
              </p>
              <p>
                Order flow is an advanced market analysis method.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Content - Trading Desk Image */}
          <AnimatedSection delay={0.2}>
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1a1147] to-[#0B0F1A] p-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#0B0F1A] via-[#1a1147] to-[#0B0F1A] rounded-xl flex items-center justify-center">
                <BarChart3 size={80} className="text-white/40" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
