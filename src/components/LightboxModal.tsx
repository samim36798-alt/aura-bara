import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../data/content';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNext,
  onPrev,
}) => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [onClose, onNext, onPrev]
  );

  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handleKeyDown]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const total = items.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-fadeIn p-4 sm:p-8"
      onClick={onClose}
    >
      {/* Top Bar with Title, Counter, and Close */}
      <div 
        className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5 border-b border-white/10 bg-black/40"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-medium">
            {item.category}
          </span>
          <span aria-hidden="true" className="text-white/20">·</span>
          <span className="text-sm font-serif text-[#f5f4f0] hidden sm:inline">
            {item.title}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-[#63625f] tabular-nums">
            {currentIndex + 1} / {total}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/10 transition-all cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 border border-white/10 transition-all cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image & Caption Container */}
      <div
        className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.title}
          referrerPolicy="no-referrer"
          className="max-h-[72vh] max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
        />

        {/* Caption */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-serif text-[#f5f4f0]">{item.title}</h3>
          <p className="text-xs text-[#9d9c98] mt-1 max-w-md">{item.description}</p>
          <div className="flex items-center justify-center gap-1.5 text-xs text-[#c5a880] mt-1.5">
            <MapPin className="w-3 h-3" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
