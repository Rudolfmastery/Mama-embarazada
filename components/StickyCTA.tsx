
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 800px
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none flex justify-center">
      <div className="pointer-events-auto max-w-md w-full">
        <a 
          href="#oferta"
          className="flex items-center justify-between gap-4 p-4 bg-rose-500 text-white rounded-2xl shadow-2xl hover:bg-rose-600 transition-all transform hover:scale-[1.02]"
        >
          <div className="pl-2">
            <span className="block text-[10px] font-bold uppercase tracking-widest opacity-80">Únete ahora</span>
            <span className="block text-sm font-bold">Inscribirme al curso</span>
          </div>
          <div className="bg-white text-rose-500 px-4 py-2 rounded-xl font-bold text-lg shadow-inner">
            $27
          </div>
        </a>
      </div>
    </div>
  );
};

export default StickyCTA;
