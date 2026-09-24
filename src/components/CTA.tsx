import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/content';

interface CTAProps {
  onStartProject: () => void;
  onGetInTouch: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartProject, onGetInTouch }) => {
  return (
    <section className="relative w-full py-24 md:py-36 overflow-hidden bg-[#0a0a0c] border-t border-white/5 flex items-center justify-center">
      {/* Background with Dark Architectural Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={ASSETS.hero}
          alt="Cinematic background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-[#0a0a0c]/85" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#c5a880] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CURRENTLY ACCEPTING COMMISSIONS FOR Q3/Q4</span>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#f5f4f0] leading-[1.12] tracking-tight mb-6">
          Have an idea worth bringing to life?
        </h2>

        <p className="text-base sm:text-xl text-[#9d9c98] max-w-xl mx-auto mb-10 leading-relaxed">
          Let's create something remarkable together. We invite you to initiate a conversation with our studio directors.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onStartProject}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#c5a880] text-[#0a0a0c] text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-md hover:bg-[#dfc9a7] transition-all duration-200 active:scale-95 shadow-xl shadow-black/50 cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            onClick={onGetInTouch}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white/5 border border-white/15 text-[#f5f4f0] text-xs sm:text-sm font-medium tracking-wider uppercase rounded-md hover:bg-white/10 hover:border-[#c5a880]/50 transition-all duration-200 active:scale-95 backdrop-blur-sm cursor-pointer"
          >
            <span>Get in Touch</span>
          </button>
        </div>
      </div>
    </section>
  );
};
