
import React from 'react';

const ImagineSection: React.FC = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              Imagina vivir tu embarazo con más control y tranquilidad
            </h2>
            
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold">1</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Poder...</h3>
                  <p className="text-slate-600">sentirte activa, fuerte y segura durante cada etapa de tu embarazo.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold">2</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Aprender a...</h3>
                  <p className="text-slate-600">entrenar de forma correcta, evitando ejercicios y hábitos que pueden perjudicarte.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold">3</div>
                <div>
                  <h3 className="font-bold text-lg text-slate-900">Y sobre todo...</h3>
                  <p className="text-slate-600">saber exactamente qué hacer y qué evitar, sin adivinar ni improvisar.</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-4 border-l-4 border-rose-500 bg-white rounded-r-xl shadow-sm italic text-lg text-slate-800 font-medium">
              "El embarazo no se improvisa… se prepara con la guía correcta."
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/800/1000?nature" 
              alt="Vida tranquila" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImagineSection;
