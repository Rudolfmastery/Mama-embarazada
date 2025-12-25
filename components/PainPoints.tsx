
import React from 'react';

const PainPoints: React.FC = () => {
  const points = [
    {
      question: "¿Te sientes…",
      text: "confundida por tanta información diferente sobre qué puedes o no hacer estando embarazada?"
    },
    {
      question: "¿Sabes qué…",
      text: "muchas molestias y problemas del postparto comienzan durante el embarazo sin que nadie lo explique?"
    },
    {
      question: "¿Sientes que…",
      text: "quieres hacer las cosas bien, pero tienes miedo de equivocarte y afectar tu cuerpo o a tu bebé?"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Un curso diseñado para ayudarte a cuidarte sin improvisar
        </h2>
        
        <div className="space-y-6 mb-12">
          {points.map((point, index) => (
            <div key={index} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row gap-4">
              <span className="text-rose-500 font-bold whitespace-nowrap">{point.question}</span>
              <p className="text-slate-700 leading-relaxed italic">{point.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-2">
          <p className="text-xl text-slate-400 line-through">No es falta de ganas.</p>
          <p className="text-xl text-slate-400 line-through">No es falta de disciplina.</p>
          <p className="text-2xl font-bold text-rose-600">Es falta de una guía clara y segura.</p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
