import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-[#0d0d10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-3">
            METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-tight mb-6">
            Our Process
          </h2>
          <p className="text-base sm:text-lg text-[#9d9c98] leading-relaxed">
            A disciplined, milestone-driven framework that eliminates guesswork and translates ambitious vision into indelible reality.
          </p>
        </div>

        {/* Desktop Horizontal Timeline (md and up) */}
        <div className="hidden lg:block">
          {/* Progress Connector Bar */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-[1.5px] bg-white/10 -translate-y-1/2" />
            <div
              className="absolute top-1/2 left-0 h-[1.5px] bg-[#c5a880] -translate-y-1/2 transition-all duration-500 ease-out"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />

            {/* Stepper Nodes */}
            <div className="relative flex justify-between">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isCompleted = activeStep > idx;

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className="group flex flex-col items-center cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono transition-all duration-300 border ${
                        isActive
                          ? 'bg-[#c5a880] text-[#0a0a0c] border-[#c5a880] font-bold shadow-lg shadow-[#c5a880]/20 scale-110'
                          : isCompleted
                          ? 'bg-[#1a1a22] text-[#c5a880] border-[#c5a880]/60'
                          : 'bg-[#121216] text-[#63625f] border-white/10 group-hover:border-white/30'
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4" /> : step.step}
                    </div>
                    <span
                      className={`mt-3 text-xs tracking-wider uppercase font-medium transition-colors ${
                        isActive ? 'text-[#c5a880]' : 'text-[#7c7b77] group-hover:text-[#f5f4f0]'
                      }`}
                    >
                      {step.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-[#121216] border border-white/10 p-10 rounded-2xl transition-all duration-500">
            <div className="grid grid-cols-12 gap-8 items-start">
              <div className="col-span-4 border-r border-white/5 pr-8">
                <span className="text-xs font-mono text-[#c5a880] tracking-widest block mb-2">
                  PHASE {PROCESS_STEPS[activeStep].step} · {PROCESS_STEPS[activeStep].duration}
                </span>
                <h3 className="text-3xl font-serif text-[#f5f4f0] mb-4">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
                <p className="text-sm text-[#9d9c98] leading-relaxed">
                  {PROCESS_STEPS[activeStep].description}
                </p>
              </div>

              <div className="col-span-8 pl-4">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-[#c5a880] mb-4">
                  Key Focus Areas & Deliverables
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {PROCESS_STEPS[activeStep].highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#c5a880]" />
                      <span className="text-xs text-[#f5f4f0] font-medium">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline (under lg) */}
        <div className="lg:hidden space-y-6">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-6 rounded-xl border transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-[#16161c] border-[#c5a880]/50'
                  : 'bg-[#121216] border-white/5'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-[#c5a880]">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-serif text-[#f5f4f0]">{step.title}</h3>
                </div>
                <span className="text-xs text-[#63625f]">{step.duration}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#9d9c98] leading-relaxed mb-4">
                {step.description}
              </p>
              <div className="space-y-2 pt-3 border-t border-white/5">
                {step.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#7c7b77]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]/70" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
