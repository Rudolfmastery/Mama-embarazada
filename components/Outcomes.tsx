
import React from 'react';

const Outcomes: React.FC = () => {
  const results = [
    { title: "Ejercicios Seguros", text: "Saber exactamente qué ejercicios hacer y cuáles evitar durante el embarazo." },
    { title: "Vitalidad y Energía", text: "Mantenerte activa, flexible y con más energía de forma segura." },
    { title: "Parto Controlado", text: "Preparar tu cuerpo para un parto más controlado y consciente." },
    { title: "Recuperación Ágil", text: "Reducir el riesgo de diástasis abdominal y molestias postparto." },
    { title: "Guía Continua", text: "Sentirte acompañada y guiada durante todo el proceso." },
    { title: "Base Sólida", text: "Llegar al postparto con una mejor base física y mental." }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que vas a lograr con este sistema</h2>
          <p className="text-slate-400">Resultados tangibles diseñados para tu bienestar y el de tu bebé.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-lg flex items-center justify-center mb-6">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-slate-400 leading-relaxed">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
