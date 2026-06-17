import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '../../components/AnimatedSection';

const images = [
  '/TMA.png',
  '/B&S.png',
  '/FP.png',
  '/Sessions.png'
];

const Slideshow = ({ className = '' }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className={`w-full ${className}`}>
      <div className="relative rounded-2xl overflow-hidden bg-black">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            className="w-full flex items-center justify-center bg-black"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <img
              src={images[index]}
              alt={`slide-${index}`}
              className="block mx-auto max-w-full max-h-[360px] sm:max-h-[420px] md:max-h-[480px] lg:max-h-[380px] object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Framed border / gloss */}
        <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-white/10 shadow-xl" />

        {/* Prev / Next Controls */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20">
          <button onClick={prev} aria-label="Previous slide" className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm">
            ‹
          </button>
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 z-20">
          <button onClick={next} aria-label="Next slide" className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm">
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const AnalyzeSection = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const features = [
    'Real-time Market Analysis',
    'Volume Profile Trading',
    'Smart Order Flow',
    'MT5 Integration'
  ];

  return (
    <section className="py-24 bg-[#0B0F1A]">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analyze the Markets
              <br />
              Like Never Before
            </h2>
            <p className="text-xl text-[#9CA3AF] mb-8 max-w-xl">
              Take your trading to the next level with advanced analytics and order flow tools designed for professional traders.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-white">✓</span>
                  </div>
                  <span className="text-lg text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <Link to="/features">
              <motion.button
                className="bg-gradient-to-r from-[#7C3AED] to-[#00D4FF] text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2 hover:shadow-2xl hover:shadow-[#7C3AED]/50 transition-all"
                whileHover={{ scale: 1.05, translateY: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Features <ArrowRight size={20} />
              </motion.button>
            </Link>
          </AnimatedSection>

          {/* Right Content */}
          <motion.div className="relative" style={{ x, scale }}>
            <div className="relative rounded-2xl overflow-hidden bg-white border border-[#7C3AED]/30">
              {/* Slideshow of images */}
              <Slideshow className="w-full h-auto" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnalyzeSection;
