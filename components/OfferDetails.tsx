
import React from 'react';

const OfferDetails: React.FC = () => {
  const mainItems = [
    "Sistema de entrenamiento seguro adaptado a cada etapa del embarazo.",
    "Rutinas guiadas enfocadas en fuerza, movilidad y preparación corporal.",
    "Ejercicios diseñados para proteger el abdomen y el suelo pélvico.",
    "Guía integral para embarazo, parto y recuperación postparto."
  ];

  const bonuses = [
    "Checklist Embarazo Seguro (qué hacer y qué evitar).",
    "Guía Anti-Diástasis desde el día 1.",
    "Rutinas Express de 10 minutos para días sin energía.",
    "Guía “Qué NO hacer durante el embarazo”.",
    "Mini guía de movilidad y alivio corporal.",
    "Preparación física básica para el parto.",
    "Guía de las primeras semanas postparto.",
    "Apoyo nutricional por trimestre.",
    "Acceso a comunidad privada de futuras mamás.",
    "Actualizaciones del contenido."
  ];

  return (
    <section className="py-20 bg-white" id="oferta">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Todo lo que recibes al inscribirte hoy</h2>
          <p className="text-xl text-slate-600">Acceso inmediato al curso completo y un arsenal de herramientas exclusivas.</p>
        </div>

        <div className="bg-rose-50 rounded-3xl p-8 lg:p-12 mb-12 shadow-sm border border-rose-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-rose-200 pb-4 flex items-center gap-2">
            <span className="text-rose-500 italic">01</span> El Curso Completo
          </h3>
          <ul className="space-y-4">
            {mainItems.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="mt-1 bg-white p-1 rounded-full shadow-sm">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-slate-800 font-medium text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          <div className="col-span-full mb-4">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span className="text-rose-500 italic">02</span> 10 Bonos Exclusivos (GRATIS)
            </h3>
          </div>
          {bonuses.map((bonus, i) => (
            <div key={i} className="p-4 bg-white border border-slate-100 rounded-xl shadow-sm flex gap-3 items-center">
              <span className="text-lg">✔️</span>
              <span className="text-slate-700 font-medium">{bonus}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          {[
            { icon: "🔓", label: "Acceso inmediato" },
            { icon: "♾️", label: "Acceso de por vida" },
            { icon: "💻", label: "100% Online" },
            { icon: "👩‍🍼", label: "Comunidad" },
            { icon: "💳", label: "Un único pago" },
            { icon: "🛡️", label: "Garantía 7 días" }
          ].map((feature, i) => (
            <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50">
              <div className="text-2xl mb-1">{feature.icon}</div>
              <div className="text-[10px] uppercase tracking-wider font-bold text-slate-500">{feature.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
