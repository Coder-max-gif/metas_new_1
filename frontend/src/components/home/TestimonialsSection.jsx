import React from 'react';
import AnimatedSection from '../AnimatedSection';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 'luca-d',
      name: 'Luca D',
      country: 'DE',
      date: 'Feb 1, 2023',
      rating: 5,
      text: 'better than EXOcharts. easy to use, has everything you need. crypto data is free, you can really get down to the specific info you need.',
      bgColor: 'bg-green-600'
    },
    {
      id: 'jeremy-bartoli',
      name: 'Jeremy Bartoli',
      country: 'ES',
      date: 'Aug 25, 2025',
      rating: 5,
      text: 'Thank you so much for everything. A top-quality technical service. If you need an assessment, just ask. Thank you so much.',
      bgColor: 'bg-cyan-600'
    },
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      country: 'US',
      date: 'Jun 26, 2025',
      rating: 5,
      text: 'Best footprint platform. Essential tool for any serious trader. The volume analysis features are unmatched.',
      bgColor: 'bg-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-8">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-[#0B0F1A]">
            Trusted by Professional Traders
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 0.1}>
              <div className="bg-white rounded-xl p-6 shadow-lg h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${testimonial.bgColor}`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-[#0B0F1A]">{testimonial.name}</p>
                      <p className="text-sm text-[#6B7280]">{testimonial.country}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B7280]">{testimonial.date}</p>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={`star-${testimonial.id}-${i}`} className="w-5 h-5 bg-teal-500 rounded-sm" />
                  ))}
                </div>
                <p className="text-[#0B0F1A]">{testimonial.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Press Section */}
        <AnimatedSection delay={0.4}>
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-10 text-[#0B0F1A]">In the Press:</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
              <div className="text-3xl font-bold text-[#0B0F1A]">TRADERS'</div>
              <div className="text-3xl font-bold text-[#0B0F1A]">Yahoo! Finance</div>
              <div className="text-2xl font-bold text-[#0B0F1A]">FT FINANCIAL TIMES</div>
              <div className="text-2xl font-bold text-[#0B0F1A] border-2 border-[#0B0F1A] px-4 py-2">FINANCE MAGNATES</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;
