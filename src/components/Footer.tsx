import React, { useState } from 'react';
import { ArrowUp, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [modalContent, setModalContent] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-white/5 text-[#9d9c98] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/5">
          {/* Brand Info (col-span-5) */}
          <div className="lg:col-span-5 space-y-5">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-2xl font-serif text-[#f5f4f0] tracking-wider hover:text-[#c5a880] transition-colors inline-block"
            >
              AURA ATELIER
            </a>
            <p className="text-sm text-[#9d9c98] max-w-sm leading-relaxed">
              A premium creative studio creating distinctive brands, digital experiences, and architectural stories. Designed with intention, created to be remembered.
            </p>
            <div className="text-xs text-[#63625f] space-y-1">
              <p>Studio No. 01 · West Bengal, India</p>
              <p>Consultations by appointment only</p>
            </div>
          </div>

          {/* Navigation Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f4f0]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-medium">
              {[
                { label: 'Home', id: 'hero' },
                { label: 'About', id: 'about' },
                { label: 'Capabilities', id: 'services' },
                { label: 'Selected Work', id: 'selected-work' },
                { label: '3D Gastronomy', id: 'gastronomy' },
                { label: 'Visual Gallery', id: 'gallery' },
                { label: 'Process', id: 'process' },
                { label: 'Endorsements', id: 'testimonials' },
                { label: 'Inquire', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className="hover:text-[#c5a880] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f4f0]">
              Network
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-medium">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://behance.net"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c5a880] transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Inquiries & Direct (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#f5f4f0]">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:hello@auraatelier.design"
                className="block text-[#f5f4f0] hover:text-[#c5a880] transition-colors"
              >
                hello@auraatelier.design
              </a>
              <a
                href="tel:+919876543210"
                className="block text-[#9d9c98] hover:text-[#c5a880] transition-colors"
              >
                +91 98765 43210
              </a>
              <p className="text-[#63625f] pt-1">
                Mon – Fri: 09:00 – 18:00 IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#63625f]">
          <div className="flex items-center gap-4 flex-wrap">
            <span>© 2026 AURA Atelier. All Rights Reserved.</span>
            <span aria-hidden="true" className="text-white/10">·</span>
            <button
              onClick={() => setModalContent('privacy')}
              className="hover:text-[#9d9c98] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/10">·</span>
            <button
              onClick={() => setModalContent('terms')}
              className="hover:text-[#9d9c98] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer border border-white/5"
            aria-label="Scroll back to top"
          >
            <span className="text-[11px] font-mono tracking-widest uppercase pl-1 hidden sm:inline">Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Simple Legal Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#121216] border border-white/10 rounded-xl p-8 max-w-lg w-full text-[#f5f4f0] relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-serif mb-4">
              {modalContent === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
            <div className="text-xs text-[#9d9c98] leading-relaxed space-y-3 max-h-72 overflow-y-auto pr-2">
              <p>
                At AURA Atelier, client privacy and intellectual property are held in the strictest confidence. Any information submitted through our inquiry portal is exclusively utilized to evaluate project scope and communicate directly with your team.
              </p>
              <p>
                We do not sell, rent, or distribute personal data or proprietary design specifications to third-party entities. All contractual engagements are governed under bilateral non-disclosure agreements executed prior to project kickoff.
              </p>
              <p>
                For questions regarding data retention or custom NDAs, please contact legal@auraatelier.design.
              </p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
