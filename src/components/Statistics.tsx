import React from 'react';
import { STATS } from '../data/content';

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#070709] border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c5a880] block mb-2">
            PROVEN TRACK RECORD
          </span>
          <p className="text-sm text-[#9d9c98]">
            Quantitative milestones forged through relentless commitment to quality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#f5f4f0] font-medium tracking-tight mb-2 tabular-nums">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[#c5a880] tracking-wide mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[#63625f]">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
