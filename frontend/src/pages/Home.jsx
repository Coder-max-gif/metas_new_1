import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LivePerformanceSection from '../components/home/LivePerformanceSection';
import StatsSection from '../components/home/StatsSection';
import AnalyzeSection from '../components/home/AnalyzeSection';
import FeaturesGrid from '../components/home/FeaturesGrid';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <LivePerformanceSection />
      <StatsSection />
      <AnalyzeSection />
      <FeaturesGrid />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;
