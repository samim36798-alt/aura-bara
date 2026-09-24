import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Laptop, 
  Target, 
  Camera, 
  Boxes, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "01": <Compass className="w-5 h-5 text-[#c5a880]" />,
  "02": <Layers className="w-5 h-5 text-[#c5a880]" />,
  "03": <Laptop className="w-5 h-5 text-[#c5a880]" />,
  "04": <Target className="w-5 h-5 text-[#c5a880]" />,
  "05": <Camera className="w-5 h-5 text-[#c5a880]" />,
  "06": <Boxes className="w-5 h-5 text-[#c5a880]" />,
};

interface ServicesProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-3">
            CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-tight mb-6">
            What We Do
          </h2>
          <p className="text-base sm:text-lg text-[#9d9c98] leading-relaxed">
            We operate seamlessly across brand positioning, architectural spatial design, and cutting-edge digital experiences. Each capability reinforces the other to produce coherent, monolithic brand presence.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => {
            const isHovered = activeCard === service.number;
            return (
              <div
                key={service.number}
                onMouseEnter={() => setActiveCard(service.number)}
                onMouseLeave={() => setActiveCard(null)}
                onClick={() => onSelectService && onSelectService(service)}
                className="group relative bg-[#121216] border border-white/5 p-8 rounded-xl transition-all duration-300 hover:border-[#c5a880]/40 hover:bg-[#16161c] hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Top row: Number and Icon */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                    <span className="text-xs font-mono text-[#c5a880] tracking-widest">
                      {service.number}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5 text-[#c5a880] group-hover:bg-[#c5a880]/10 transition-colors">
                      {SERVICE_ICONS[service.number]}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-serif text-[#f5f4f0] group-hover:text-[#dfc9a7] transition-colors mb-1">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#63625f] uppercase tracking-wider font-medium">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#9d9c98] leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Deliverables unboxed list */}
                  <div className="space-y-1.5 pt-2 border-t border-white/5">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#7c7b77]">
                        <CheckCircle2 className="w-3 h-3 text-[#c5a880]/60 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link affordance */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#c5a880]">
                  <span>Explore Discipline</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
