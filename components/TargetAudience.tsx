
import React from 'react';

const TargetAudience: React.FC = () => {
  const points = [
    "Estás embarazada y quieres cuidar tu cuerpo sin poner en riesgo a tu bebé.",
    "Es tu primer embarazo y necesitas una guía clara para no cometer errores.",
    "Estás en los primeros meses y no sabes qué ejercicios son seguros.",
    "Tienes un embarazo más avanzado y te preocupa el parto o la recuperación.",
    "Planeas quedar embarazada y quieres preparar tu cuerpo con anticipación.",
    "Tienes miedo de la diástasis abdominal o problemas de suelo pélvico.",
    "Quieres vivir tu embarazo con menos miedo y más tranquilidad."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">¿Para quién es este curso?</h2>
          <p className="text-lg text-slate-600">Este curso es para ti si te identificas con alguno de estos puntos:</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="grid sm:grid-cols-1 gap-4">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-rose-200 transition-colors">
                <svg className="w-6 h-6 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-slate-700 font-medium">{p}</p>
              </div>
            ))}
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-slate-50">
            <img 
              src="https://picsum.photos/800/1000?woman" 
              alt="Para ti" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
