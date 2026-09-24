import React, { useEffect } from 'react';
import { X, ArrowUpRight, Calendar, MapPin, Building2, Check } from 'lucide-react';
import { Project } from '../data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#121216] border border-white/10 rounded-2xl shadow-2xl text-[#f5f4f0] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-colors cursor-pointer border border-white/10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Container */}
        <div className="relative w-full h-72 sm:h-96 overflow-hidden bg-black shrink-0">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121216] via-transparent to-black/30" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs uppercase tracking-widest text-[#c5a880] mb-1 font-medium">
              {project.category}
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          {/* Metadata Row (Zero-Pill clean unboxed text) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-white/10 text-xs">
            <div>
              <div className="text-[#63625f] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Year</span>
              </div>
              <div className="text-sm font-medium text-[#f5f4f0]">{project.year}</div>
            </div>
            <div>
              <div className="text-[#63625f] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Location</span>
              </div>
              <div className="text-sm font-medium text-[#f5f4f0]">{project.location}</div>
            </div>
            <div>
              <div className="text-[#63625f] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Client</span>
              </div>
              <div className="text-sm font-medium text-[#f5f4f0]">{project.client}</div>
            </div>
            <div>
              <div className="text-[#63625f] uppercase tracking-wider mb-1">
                Discipline
              </div>
              <div className="text-sm font-medium text-[#c5a880]">{project.category}</div>
            </div>
          </div>

          {/* Narrative Summary */}
          <div>
            <h3 className="text-base font-serif text-[#f5f4f0] mb-3">Project Narrative</h3>
            <p className="text-[#9d9c98] text-sm sm:text-base leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Scope of Deliverables */}
          <div>
            <h3 className="text-base font-serif text-[#f5f4f0] mb-4">Executed Scope</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#9d9c98] bg-white/5 p-3 rounded-lg border border-white/5">
                  <Check className="w-3.5 h-3.5 text-[#c5a880] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Call to Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#63625f]">
              Want a similar architectural or brand solution?
            </span>
            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#c5a880] text-[#0a0a0c] text-xs font-semibold tracking-wider uppercase rounded-md hover:bg-[#dfc9a7] transition-all cursor-pointer whitespace-nowrap"
            >
              <span>Inquire About This Style</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
