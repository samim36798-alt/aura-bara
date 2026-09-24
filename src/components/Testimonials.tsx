import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = TESTIMONIALS.length;

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      next();
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#0a0a0c] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-3">
            ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-tight">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Card */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-[#121216] border border-white/10 rounded-2xl p-8 sm:p-12 md:p-16 transition-all duration-300"
        >
          {/* Subtle Quote Watermark / Icon */}
          <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
            <Quote className="w-20 h-20" />
          </div>

          {/* Testimonial Quote */}
          <div className="min-h-[140px] sm:min-h-[120px] flex items-center">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-[#f5f4f0] italic leading-snug">
              "{current.quote}"
            </blockquote>
          </div>

          {/* Author Details & Controls Row */}
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              {/* Initials Avatar */}
              <div className="w-12 h-12 rounded-full bg-[#1b1b24] border border-[#c5a880]/30 flex items-center justify-center text-sm font-serif font-medium text-[#c5a880] shrink-0">
                {current.initials}
              </div>
              <div>
                <div className="text-base font-serif text-[#f5f4f0] font-medium">
                  {current.author}
                </div>
                <div className="text-xs text-[#9d9c98]">
                  {current.role} · <span className="text-[#c5a880]">{current.company}</span>
                </div>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex items-center gap-4">
              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === i ? 'w-6 bg-[#c5a880]' : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-2 ml-2">
                <button
                  onClick={prev}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/5"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer border border-white/5"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
