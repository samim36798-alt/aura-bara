import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Selected Work', id: 'selected-work' },
    { label: '3D Gastronomy', id: 'gastronomy' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/5 py-4 shadow-xl shadow-black/30'
            : 'bg-transparent py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('hero');
            }}
            className="text-xl md:text-2xl font-serif tracking-wider text-[#f5f4f0] hover:text-[#c5a880] transition-colors whitespace-nowrap"
          >
            AURA ATELIER
          </a>

          {/* Zone 2: Navigation Links (Single line, text-only, subtle hover) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-medium tracking-wide uppercase">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`transition-colors relative py-1 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-[#c5a880]'
                      : 'text-[#9d9c98] hover:text-[#f5f4f0]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#c5a880] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#c5a880] text-[#0a0a0c] rounded-md hover:bg-[#dfc9a7] transition-all duration-200 active:scale-95 shadow-sm whitespace-nowrap cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#f5f4f0] hover:text-[#c5a880] transition-colors focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0c]/98 backdrop-blur-xl flex flex-col justify-between p-8 lg:hidden animate-fadeIn">
          <div className="flex items-center justify-between border-b border-white/10 pb-6">
            <span className="text-xl font-serif tracking-wider text-[#f5f4f0]">
              AURA ATELIER
            </span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#9d9c98] hover:text-white transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 py-6">
            {navLinks.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left text-2xl font-serif transition-colors flex items-center justify-between cursor-pointer ${
                  activeSection === item.id ? 'text-[#c5a880]' : 'text-[#f5f4f0]/80 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-[#63625f]">0{idx + 1}</span>
              </button>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-4 text-center text-sm font-semibold tracking-wider uppercase bg-[#c5a880] text-[#0a0a0c] rounded-md hover:bg-[#dfc9a7] transition-colors cursor-pointer"
            >
              Get Started — Let's Talk
            </button>
            <p className="text-xs text-[#9d9c98] text-center">
              West Bengal, India · Worldwide Inquiries
            </p>
          </div>
        </div>
      )}
    </>
  );
};
