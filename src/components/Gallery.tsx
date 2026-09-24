import React, { useState, useMemo } from 'react';
import { Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/content';
import { LightboxModal } from './LightboxModal';

const CATEGORIES = [
  'All',
  'Architecture',
  'Interior',
  'Lifestyle',
  'People',
  'Events',
  'Details',
] as const;

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#0a0a0c] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-3">
              CURATED ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-tight">
              Visual Gallery
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9d9c98] max-w-md leading-relaxed">
            Explorations in material, light, atmosphere, and form captured across international commissions.
          </p>
        </div>

        {/* Filter Segmented Buttons (Functional interactive controls) */}
        <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-white/5 mb-12">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-200 rounded-md cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#c5a880] text-[#0a0a0c] font-semibold shadow-md'
                    : 'bg-white/5 text-[#9d9c98] hover:text-[#f5f4f0] hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#121216] border border-white/5 flex flex-col"
              >
                {/* Image Frame */}
                <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-black/40">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Corner Expand Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* On-Hover Details */}
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-left">
                    <div className="text-[11px] font-mono uppercase tracking-widest text-[#c5a880] mb-0.5">
                      {item.category}
                    </div>
                    <h3 className="text-base font-serif text-[#f5f4f0]">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Quiet Card Caption for accessibility and mobile */}
                <div className="p-4 sm:hidden flex items-center justify-between text-xs text-[#9d9c98]">
                  <span className="font-serif text-[#f5f4f0]">{item.title}</span>
                  <span className="text-[#c5a880]">{item.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeItem}
        items={filteredItems}
        onClose={() => setLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
