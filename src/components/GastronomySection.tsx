import React, { useState } from 'react';
import { ThreeFoodCanvas } from './ThreeFoodCanvas';
import { Sparkles, Utensils, Compass, ArrowDown, Award } from 'lucide-react';
import culinaryDishImg from '../assets/images/culinary_atelier_dish_1790227852424.jpg';

interface GastronomySectionProps {
  onInquireCulinary: () => void;
  onScrollNext: () => void;
}

export const GastronomySection: React.FC<GastronomySectionProps> = ({
  onInquireCulinary,
  onScrollNext,
}) => {
  return (
    <section id="gastronomy" className="relative bg-[#0d0d10] border-t border-white/5 py-24 md:py-32 overflow-hidden">
      {/* Editorial Introduction */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#c5a880] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>SENSORY DESIGN & EXPERIMENTAL TASTE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#f5f4f0] leading-[1.12]">
              Sculptural Gastronomy in Motion.
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <p className="text-sm sm:text-base text-[#9d9c98] leading-relaxed">
              We approach culinary design through the prism of sculpture and architectural balance. Every pastry, botanical plinth, and savory creation is modelled in full three-dimensional space before tasting.
            </p>
            <div className="flex items-center gap-6 text-xs text-[#c5a880] font-mono tracking-wider uppercase">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4" />
                <span>Michelin-grade Curation</span>
              </div>
              <span className="text-white/20">|</span>
              <div className="flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                <span>Realtime Physics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive 3D Canvas Stage */}
      <ThreeFoodCanvas />

      {/* Complementary Sensory Monograph Showcase */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#121217] border border-white/10 rounded-2xl p-6 sm:p-10">
          <div className="lg:col-span-5 relative overflow-hidden rounded-xl aspect-[4/3] bg-black">
            <img
              src={culinaryDishImg}
              alt="Michelin-star haute gastronomy plating"
              className="w-full h-full object-cover object-center filter brightness-95 contrast-105 hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-mono text-[#c5a880] border border-white/10">
              No. 07 · The Emerald & Gold Monolith
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4 lg:pl-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#c5a880] font-medium">
              Private Dining & Pop-up Installations
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#f5f4f0]">
              Multi-Sensory Gastronomic Commissions
            </h3>
            <p className="text-sm text-[#9d9c98] leading-relaxed">
              From bespoke edible centerpieces to 12-course conceptual dining experiences for flagship retail openings, art biennials, and private salons, our culinary atelier synchronizes taste, sound, spatial geometry, and lighting.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onInquireCulinary}
                className="px-6 py-3 bg-[#c5a880] text-[#0a0a0c] text-xs font-semibold uppercase tracking-wider rounded-md hover:bg-[#dfc9a7] transition-all cursor-pointer"
              >
                Commission a Culinary Experience
              </button>

              <button
                onClick={onScrollNext}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-xs font-medium uppercase tracking-wider text-[#f5f4f0] rounded-md hover:bg-white/10 transition-all cursor-pointer"
              >
                <span>Continue Scrolling</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#c5a880]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
