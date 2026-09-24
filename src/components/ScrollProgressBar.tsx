import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScroll / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-black/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#c5a880] via-[#dfc9a7] to-[#e6c278] transition-all duration-75 ease-out shadow-sm shadow-[#c5a880]/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
