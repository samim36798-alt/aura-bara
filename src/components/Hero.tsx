import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onExplore: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onContact }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0a0a0c]"
    >
      {/* Background Image with Cinematic Slow Zoom and Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.hero}
          alt="Monolithic architectural pavilion reflecting at twilight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center animate-subtle-zoom brightness-[0.72] contrast-[1.08]"
        />
        {/* Measured dark luxury gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-black/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0a0a0c]/40 to-[#0a0a0c]/85" />
      </div>

      {/* Top Spacer for fixed navbar */}
      <div className="h-24 md:h-32" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full my-auto py-12">
        <div className="max-w-4xl">
          {/* Eyebrow / Kicker */}
          <div className="inline-flex items-center gap-3 text-xs md:text-sm tracking-[0.22em] uppercase text-[#c5a880] mb-6 font-medium">
            <span>Creative Direction</span>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span>Spatial Architecture</span>
            <span aria-hidden="true" className="text-white/30">/</span>
            <span>Digital Systems</span>
          </div>

          {/* Large Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-serif text-[#f5f4f0] leading-[1.08] tracking-tight mb-8 text-balance">
            Where Vision Becomes <span className="italic font-normal text-[#dfc9a7]">Extraordinary</span>.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#9d9c98] max-w-2xl leading-relaxed mb-10 font-normal">
            Experience a carefully crafted world of design, creativity, and unforgettable experiences. We build enduring brands, sculptural spaces, and high-performance digital environments for visionary leaders.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#c5a880] text-[#0a0a0c] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md hover:bg-[#dfc9a7] transition-all duration-200 active:scale-95 shadow-lg shadow-black/40 whitespace-nowrap cursor-pointer"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={onContact}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/5 border border-white/15 text-[#f5f4f0] text-xs sm:text-sm font-medium tracking-wider uppercase rounded-md hover:bg-white/10 hover:border-[#c5a880]/50 transition-all duration-200 active:scale-95 backdrop-blur-sm whitespace-nowrap cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 text-[#c5a880]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Row with Enhanced Animated Scroll Down Indicator and Studio Location */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-8 pt-4 flex items-center justify-between border-t border-white/5 text-xs text-[#9d9c98]">
        <div className="hidden md:flex items-center gap-3 tracking-widest uppercase text-[11px]">
          <span>Studio 01 · West Bengal, India</span>
          <span aria-hidden="true" className="text-white/20">|</span>
          <span>Sensory & Spatial Design</span>
        </div>

        {/* Animated Luxury Mouse & Scroll Down Indicator */}
        <button
          onClick={onExplore}
          className="mx-auto md:mx-0 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
          aria-label="Scroll down to explore"
        >
          {/* Animated Mouse Icon */}
          <div className="w-5 h-8 rounded-full border border-[#c5a880]/60 flex items-start justify-center p-1 group-hover:border-[#c5a880] transition-colors">
            <div className="w-1 h-2 rounded-full bg-[#c5a880] animate-bounce" />
          </div>
          <span className="tracking-[0.25em] uppercase text-[10px] text-[#c5a880] group-hover:text-[#dfc9a7] transition-colors font-medium">
            SCROLL DOWN ↓
          </span>
        </button>

        <div className="hidden md:block tracking-widest uppercase text-[11px] text-[#63625f]">
          Selected Portfolio 2026
        </div>
      </div>
    </section>
  );
};
