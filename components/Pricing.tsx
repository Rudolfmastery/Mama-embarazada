
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-rose-200">
          <div className="bg-rose-500 py-3 text-center text-white text-sm font-bold uppercase tracking-widest">
            Oferta de lanzamiento por tiempo limitado
          </div>
          
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Empieza hoy tu transformación</h2>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-2xl text-slate-400 line-through">$97.00</span>
              <span className="text-6xl font-extrabold text-slate-900 tracking-tight">$27.00</span>
            </div>
            
            <p className="text-slate-600 mb-10 max-w-sm mx-auto">
              Todo el contenido, las rutinas y los 10 bonos por un único pago. Sin suscripciones.
            </p>
            
            <a 
              href="#"
              className="block w-full py-5 bg-rose-500 hover:bg-rose-600 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-rose-200 transition-all transform hover:-translate-y-1 mb-8"
            >
              ¡QUIERO MI ACCESO AHORA!
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-400">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-5 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5 opacity-50" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5 opacity-50" />
            </div>
          </div>
          
          <div className="bg-slate-50 p-8 border-t border-slate-100 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-24 h-24 shrink-0 rounded-full border-4 border-white shadow-sm flex items-center justify-center bg-rose-50">
               <span className="text-3xl">🛡️</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-1">Garantía Incondicional de 7 Días</h3>
              <p className="text-sm text-slate-600">
                Pruébalo sin compromiso. Si el programa no supera tus expectativas, te devolvemos el 100% de tu dinero. Sin preguntas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
           <p className="text-xl font-medium text-slate-800 italic">
            "No se trata de hacer más durante el embarazo, sino de hacerlo bien."
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
