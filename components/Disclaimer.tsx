
import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Descargo de responsabilidad</h4>
          <p className="text-xs text-slate-500 leading-relaxed text-justify">
            Este curso es de carácter educativo y no reemplaza la opinión ni el seguimiento médico profesional. Siempre consulta con tu médico o especialista de salud antes de realizar cualquier actividad física durante el embarazo. El programa está diseñado para complementar el cuidado integral de la mujer embarazada de forma segura. El uso de la información proporcionada en este programa es bajo su propio riesgo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;
