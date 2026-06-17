import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import AnalyzeSection from '../components/home/AnalyzeSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import { Link } from 'react-router-dom';
import { useCountdown } from '../hooks/useCountdown';

const Home = () => {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* White Section After Hero */}
      <section className="py-20 bg-white" data-white-header="true">
        <div className="max-w-[1280px] mx-auto px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B0F1A] mb-4">
            Welcome to Metas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Professional trading tools designed to elevate your market analysis
          </p>

          {/* Indicator and Algo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Indicators Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B0F1A] mb-4">
                Indicators
              </h3>
              <p className="text-gray-600 mb-6">
                Advanced trading indicators for MetaTrader 5 including Arrows, B&S Numbers, Future Pattern, and Session
              </p>
              <div className="text-[#7C3AED] font-semibold mb-6">
                $49 for 6 months
              </div>
              <Link
                to="/pricing"
                className="inline-block bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6A2DD8] transition-all duration-300"
              >
                Explore Now
              </Link>
            </div>

            {/* Algorithm Card */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#0B0F1A] mb-4">
                Algorithm
              </h3>
              <p className="text-gray-600 mb-6">
                Premium trading algorithm with automated execution and risk management tools
              </p>
              <div className="text-[#7C3AED] font-semibold mb-6">
                $99 for 1 month
              </div>
              <Link
                to="/pricing"
                className="inline-block bg-[#7C3AED] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#6A2DD8] transition-all duration-300"
              >
                Explore Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Video */}
        <video
          src="/image-live.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative max-w-[1280px] mx-auto px-8 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Limited Time Offer
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get ALL Indicators for only <span className="text-[#00D4FF] font-bold text-2xl">$99</span> for the next 24 hours!
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 min-w-[100px] border border-white/20">
              <div className="text-4xl font-bold text-white">{hours}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Hours</div>
            </div>
            <div className="flex items-center text-3xl font-bold text-white">:</div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 min-w-[100px] border border-white/20">
              <div className="text-4xl font-bold text-white">{minutes}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Minutes</div>
            </div>
            <div className="flex items-center text-3xl font-bold text-white">:</div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 min-w-[100px] border border-white/20">
              <div className="text-4xl font-bold text-white">{seconds}</div>
              <div className="text-sm text-white/60 uppercase tracking-wider">Seconds</div>
            </div>
          </div>

          <Link
            to="/pricing"
            className="inline-block bg-white text-[#7C3AED] px-10 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300"
          >
            Grab the Deal Now
          </Link>
        </div>
      </section>

      <StatsSection />
      <AnalyzeSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
