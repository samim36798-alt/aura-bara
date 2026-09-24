import React from 'react';
import { ASSETS } from '../data/content';

export const ImageBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] min-h-[460px] overflow-hidden flex items-center justify-center bg-[#0a0a0c]">
      {/* Background Image with Fixed/Parallax Feel and Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.breakInterior}
          alt="Cinematic architectural salon with limestone walls and natural sunlight"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.68] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-black/40 to-[#0a0a0c]" />
      </div>

      {/* Center Statement */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#c5a880] block mb-4">
          CRAFT & PERSPECTIVE
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#f5f4f0] leading-[1.15] tracking-tight italic">
          "Details create the difference."
        </h2>
        <div className="mt-6 flex items-center justify-center gap-3 text-xs text-[#9d9c98] tracking-widest uppercase">
          <span>Limestone & Timber Atrium</span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span>Architectural Study No. 04</span>
        </div>
      </div>
    </section>
  );
};
