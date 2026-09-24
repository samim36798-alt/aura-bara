/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { GastronomySection } from './components/GastronomySection';
import { ImageBreak } from './components/ImageBreak';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Statistics } from './components/Statistics';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [inquiredProject, setInquiredProject] = useState<string | undefined>(undefined);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Pre-fill contact form from project modal or culinary inquiry
  const handleInquireProject = (projectName: string) => {
    setInquiredProject(projectName);
    handleNavigate('contact');
  };

  // IntersectionObserver to sync active navigation link on scroll
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'services',
      'selected-work',
      'gastronomy',
      'gallery',
      'process',
      'testimonials',
      'faq',
      'contact',
    ];

    const handleScrollObserver = () => {
      const scrollY = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollObserver, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollObserver);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-[#f5f4f0] font-sans selection:bg-[#c5a880]/30 selection:text-[#f4f2ee]">
      {/* Top Scroll Down Progress Bar */}
      <ScrollProgressBar />

      {/* Sticky Top Bar Contract Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section with Scroll Down Animation */}
        <Hero
          onExplore={() => handleNavigate('selected-work')}
          onContact={() => handleNavigate('contact')}
        />

        {/* 2. Intro / About Section */}
        <About
          onLearnMore={() => handleNavigate('services')}
        />

        {/* 3. Services Section */}
        <Services
          onSelectService={(service) => {
            setInquiredProject(service.title);
            handleNavigate('contact');
          }}
        />

        {/* 4. Featured Projects Section */}
        <SelectedWork
          onInquireProject={handleInquireProject}
        />

        {/* 5. Interactive 3D Gastronomy & Food Physics Stage */}
        <GastronomySection
          onInquireCulinary={() => handleInquireProject('Haute Gastronomy & 3D Culinary Design')}
          onScrollNext={() => handleNavigate('gallery')}
        />

        {/* 6. Full-Width Image Break */}
        <ImageBreak />

        {/* 7. Gallery Section & Lightbox */}
        <Gallery />

        {/* 8. Experience / Process Section */}
        <Process />

        {/* 9. Testimonials Section */}
        <Testimonials />

        {/* 10. Statistics Section */}
        <Statistics />

        {/* 11. FAQ Accordion Section */}
        <FAQ />

        {/* 12. Large Cinematic CTA Section */}
        <CTA
          onStartProject={() => handleNavigate('contact')}
          onGetInTouch={() => handleNavigate('contact')}
        />

        {/* 13. Contact Section */}
        <Contact
          prefilledProject={inquiredProject}
        />
      </main>

      {/* 14. Multi-Column Footer */}
      <Footer
        onNavigate={handleNavigate}
      />
    </div>
  );
}
