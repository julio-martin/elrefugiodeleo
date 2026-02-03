
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-lime-600 py-24 text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Nuestra Historia</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto opacity-90">
            Todo empezó con Leo, un pequeño cachorro rescatado de una cuneta en 2012. Él nos enseñó el valor de la lealtad y nos dio el propósito para crear este refugio.
          </p>
        </div>
        {/* Decorative background logo */}
        <img 
          src="https://storage.googleapis.com/static-files-prod/ai-studio/f809971a-28e4-4df1-8da6-f94d9b4c0628.png" 
          className="absolute -right-20 -bottom-20 w-96 h-96 opacity-10 pointer-events-none"
          alt="Brand Decoration"
        />
      </section>

      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-slate-800">Un refugio, un hogar</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              El Refugio de Leo no es solo un lugar de paso. Trabajamos incansablemente para rehabilitar física y emocionalmente a animales que han sufrido maltrato o abandono.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nuestro equipo está formado por veterinarios, etólogos y voluntarios apasionados que garantizan que cada animal reciba los cuidados que se merece mientras espera a su familia definitiva.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-lime-50 rounded-2xl border border-lime-100">
                <div className="font-bold text-lime-700 text-lg">Misión</div>
                <div className="text-sm text-slate-600">Erradicar el abandono y fomentar la adopción responsable.</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="font-bold text-slate-800 text-lg">Visión</div>
                <div className="text-sm text-slate-600">Un mundo donde cada mascota sea tratada con dignidad y respeto.</div>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?auto=format&fit=crop&q=80&w=800" 
                alt="Voluntario con perro" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -top-6 -right-6 w-full h-full bg-lime-100 rounded-3xl -z-10"></div>
              {/* Floating logo badge */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white rounded-full p-4 shadow-xl z-20 border border-slate-100">
                 <img 
                    src="https://storage.googleapis.com/static-files-prod/ai-studio/f809971a-28e4-4df1-8da6-f94d9b4c0628.png" 
                    alt="Leo Logo Badge" 
                    className="w-full h-full object-contain"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Compromiso', icon: 'fa-shield-heart', text: 'No nos rendimos con ningún caso, por difícil que sea.' },
              { title: 'Transparencia', icon: 'fa-eye', text: 'Cada euro donado va íntegramonete al bienestar de los animales.' },
              { title: 'Respeto', icon: 'fa-leaf', text: 'Priorizamos el equilibrio natural y psicológico de cada especie.' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm text-center border border-slate-100">
                <div className="w-20 h-20 bg-lime-50 text-lime-600 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800">{v.title}</h3>
                <p className="text-slate-500">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
