import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { STATS } from '../data/content';

interface AboutProps {
  onLearnMore?: () => void;
}

export const About: React.FC<AboutProps> = ({ onLearnMore }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d0d10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12" ref={containerRef}>
        {/* Two-column Intro Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-4">
              ABOUT US
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-[1.18] tracking-tight">
              Designed with intention. Created to be remembered.
            </h2>
            <div className="mt-8 w-16 h-[2px] bg-[#c5a880]/60" />
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-[#9d9c98] text-base md:text-lg leading-relaxed">
            <p>
              At <strong className="text-[#f5f4f0] font-medium">AURA Atelier</strong>, we operate at the intersection of timeless architecture, brand identity, and fluid digital systems. Founded in 2016, our philosophy rejects ephemeral trends in favor of enduring clarity, sensory resonance, and structural poise.
            </p>
            <p>
              Over the past decade, we have partnered with boutique luxury maisons, visionary architects, and high-growth technology innovators across 14 countries. Each commission is handled as a single unified narrative — from physical spatial curation and packaging materiality to custom interactive software.
            </p>
            <p className="text-sm md:text-base text-[#7c7b77]">
              Our interdisciplinary team of architects, creative strategists, and creative engineers believes that beauty is not decorative — it is functional precision elevated to an emotional art form.
            </p>

            <div className="pt-2">
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById('services');
                  target?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#c5a880] hover:text-[#dfc9a7] transition-colors cursor-pointer group"
              >
                <span>Discover our core disciplines</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Animated Counter Section with Hairline Grid Dividers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-y border-white/10 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {STATS.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 md:p-10 transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] tracking-tight font-medium mb-2 tabular-nums">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[#c5a880] tracking-wide mb-1">
                {item.label}
              </div>
              <div className="text-xs text-[#63625f] leading-snug">
                {item.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
