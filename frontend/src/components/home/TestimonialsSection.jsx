import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../../components/AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: 'The indicators have completely transformed my trading strategy. I\'ve seen a 40% increase in my win rate.',
      name: 'Raj Patel',
      role: 'Professional Trader',
      avatar: 'RP'
    },
    {
      quote: 'Excellent service and amazing support. The algorithm is super accurate and easy to use.',
      name: 'Priya Sharma',
      role: 'Day Trader',
      avatar: 'PS'
    },
    {
      quote: 'Best investment I\'ve made for my trading career. The tools are professional and reliable.',
      name: 'Arjun Reddy',
      role: 'Swing Trader',
      avatar: 'AR'
    },
    {
      quote: 'The indicators are spot on! My profits have doubled.',
      name: 'Neha Gupta',
      role: 'Forex Trader',
      avatar: 'NG'
    },
    {
      quote: 'Great experience! The algorithm works flawlessly.',
      name: 'Karan Singh',
      role: 'Crypto Trader',
      avatar: 'KS'
    },
    {
      quote: 'Customer support is fantastic and indicators are very helpful.',
      name: 'Anjali Mehta',
      role: 'Options Trader',
      avatar: 'AM'
    },
    {
      quote: 'I highly recommend these indicators to all traders!',
      name: 'Vikram Desai',
      role: 'Scalper',
      avatar: 'VD'
    },
    {
      quote: 'The signals are very accurate and timely.',
      name: 'Pooja Iyer',
      role: 'Swing Trader',
      avatar: 'PI'
    }
  ];

  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#0B0F1A] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-8 mb-16">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            What Our Traders Say
          </h2>
          <p className="text-lg text-[#9CA3AF] text-center max-w-2xl mx-auto">
            Join thousands of successful traders who trust our tools
          </p>
        </AnimatedSection>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -2800],
          }}
          transition={{
            x: {
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-[350px]"
            >
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <p className="text-[#9CA3AF] mb-8 text-base">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] flex items-center justify-center text-lg font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-medium text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-[#9CA3AF] text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
