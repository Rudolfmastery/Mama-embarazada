
import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import ImagineSection from './components/ImagineSection';
import TargetAudience from './components/TargetAudience';
import Outcomes from './components/Outcomes';
import OfferDetails from './components/OfferDetails';
import Pricing from './components/Pricing';
import Disclaimer from './components/Disclaimer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Hero />
      <PainPoints />
      <ImagineSection />
      <TargetAudience />
      <Outcomes />
      <OfferDetails />
      <Pricing />
      <Disclaimer />
      
      {/* Sticky Bottom CTA for Mobile/Desktop visibility */}
      <StickyCTA />
      
      <footer className="py-12 bg-white text-center border-t border-slate-100">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Maternidad Consciente. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default App;
