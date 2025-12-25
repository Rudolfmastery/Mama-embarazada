
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-pink-50 via-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-rose-600 uppercase bg-rose-50 rounded-full">
            Para: Futuras mamás conscientes
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Prepárate para un embarazo más <span className="text-rose-500">seguro, fuerte y tranquilo</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Un sistema guiado paso a paso para cuidar tu cuerpo durante el embarazo, evitar errores comunes y preparar tu cuerpo para un parto y recuperación más fáciles.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <a 
              href="#oferta"
              className="px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-rose-200 transform hover:-translate-y-1 text-center"
            >
              Accede hoy al curso online
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mb-12">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  src={`https://picsum.photos/seed/mom${i}/100/100`} 
                  alt="User" 
                />
              ))}
            </div>
            <p className="text-sm font-medium text-slate-700">
              <span className="text-rose-600 font-bold">+2,500</span> mamás ya se están preparando
            </p>
          </div>
        </div>

        <div className="relative mt-12 max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-sky-200 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            <img 
              src="https://picsum.photos/1200/675?grayscale" 
              alt="Maternidad Consciente" 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                <div className="p-4 bg-white/80 backdrop-blur-sm rounded-lg text-center">
                    <p className="font-bold text-slate-900 uppercase tracking-widest text-xs">Incluye 10 bonos exclusivos</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
