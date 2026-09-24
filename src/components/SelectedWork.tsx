import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, Project } from '../data/content';
import { ProjectModal } from './ProjectModal';

interface SelectedWorkProps {
  onInquireProject: (projectName: string) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onInquireProject }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="selected-work" className="py-24 md:py-32 bg-[#0d0d10] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#c5a880] block mb-3">
              PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#f5f4f0] leading-tight">
              Selected Work
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#9d9c98] max-w-md leading-relaxed">
            A curated portfolio of architectural commissions, luxury brand transformations, and avant-garde digital experiences.
          </p>
        </div>

        {/* Asymmetrical Editorial Project Grid */}
        <div className="grid grid-cols-12 gap-8 md:gap-10">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`${project.gridSpan || 'col-span-12 lg:col-span-6'} group cursor-pointer flex flex-col`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Frame with Zoom Effect & Overlay */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden rounded-xl bg-[#141418] border border-white/5 mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* View Project Floating Badge on Hover */}
                <div className="absolute bottom-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f5f4f0] text-[#0a0a0c] text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Editorial Metadata Block (Zero-Pill discipline) */}
              <div className="flex items-center justify-between text-xs text-[#9d9c98] mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-[#c5a880] font-medium tracking-wide uppercase">
                    {project.category}
                  </span>
                  <span aria-hidden="true" className="text-white/20">·</span>
                  <span>{project.location}</span>
                </div>
                <span className="font-mono text-[#63625f]">{project.year}</span>
              </div>

              {/* Title & Arrow */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-serif text-[#f5f4f0] group-hover:text-[#dfc9a7] transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-4 h-4 text-[#7c7b77] group-hover:text-[#c5a880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={onInquireProject}
      />
    </section>
  );
};
