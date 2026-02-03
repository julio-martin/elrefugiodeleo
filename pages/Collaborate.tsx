
import React from 'react';

const Collaborate: React.FC = () => {
  const waysToHelp = [
    { title: 'Hazte Voluntario', icon: 'fa-hand-holding-heart', desc: 'Ven a pasear a nuestros perros o ayúdanos con la limpieza y mantenimiento.' },
    { title: 'Acogida Temporal', icon: 'fa-home', desc: 'Si no puedes adoptar, ser casa de acogida salva vidas literalmente.' },
  ];

  const donationMethods = [
    { 
      name: 'Bizum', 
      icon: 'fa-mobile-screen-button', 
      details: 'Código: 01234', 
      sub: 'O busca "El Refugio de Leo" en ONGs',
      color: 'bg-sky-500'
    },
    { 
      name: 'PayPal', 
      icon: 'fa-paypal', 
      details: 'donaciones@elrefugiodeleo.com', 
      sub: 'Donación segura y rápida',
      color: 'bg-indigo-600'
    },
    { 
      name: 'Teaming', 
      icon: 'fa-users', 
      details: '1€ al mes', 
      sub: 'Micro-donaciones mensuales constantes',
      color: 'bg-lime-600'
    }
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-slate-800">Colabora con nosotros</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            El Refugio de Leo se mantiene exclusivamente gracias a donaciones y el trabajo altruista. Tu ayuda es vital para que sigamos rescatando vidas.
          </p>
        </div>

        {/* Financial Donations Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-slate-200"></span>
            Donaciones Económicas
            <span className="w-12 h-px bg-slate-200"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {donationMethods.map((method, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all text-center">
                <div className={`w-16 h-16 ${method.color} text-white rounded-2xl flex items-center justify-center text-2xl mx-auto mb-6 shadow-lg shadow-slate-200`}>
                  <i className={`fas ${method.icon}`}></i>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800">{method.name}</h3>
                <p className="text-lime-600 font-mono font-bold text-lg mb-1">{method.details}</p>
                <p className="text-slate-400 text-sm">{method.sub}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-lime-400">
                    <i className="fas fa-university"></i>
                  </div>
                  <h3 className="text-2xl font-bold">Transferencia Bancaria</h3>
                </div>
                <p className="text-slate-400 mb-6">Aportaciones directas para proyectos específicos o mantenimiento general:</p>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/10 font-mono text-lg md:text-xl tracking-wider mb-2 select-all cursor-pointer hover:bg-white/10 transition-all">
                  ES12 3456 7890 1234 5678 9012
                </div>
                <div className="flex justify-between items-center px-2">
                  <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Titular: El Refugio de Leo</span>
                  <span className="text-xs text-lime-400 font-bold uppercase">Copiar IBAN</span>
                </div>
              </div>
              <div className="hidden lg:block w-px h-32 bg-white/10"></div>
              <div className="text-center md:text-right">
                <p className="text-slate-400 text-sm mb-4">¿Necesitas certificado de donación?<br/>Escríbenos a:</p>
                <a href="mailto:administracion@elrefugiodeleo.com" className="text-xl font-bold text-lime-400 hover:underline">administracion@elrefugiodeleo.com</a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/10 blur-[100px] rounded-full"></div>
          </div>
        </div>

        {/* Non-financial Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {waysToHelp.map((way, i) => (
            <div key={i} className="bg-slate-50 p-10 rounded-[2rem] border border-slate-100 flex gap-8 items-start group hover:bg-white hover:shadow-xl transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-lime-600 flex-shrink-0 shadow-sm group-hover:bg-lime-600 group-hover:text-white transition-all">
                <i className={`fas ${way.icon} text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{way.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-6">{way.desc}</p>
                <button className="flex items-center gap-2 text-lime-700 font-bold group-hover:translate-x-1 transition-transform">
                  Saber cómo empezar <i className="fas fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Final Reassurance */}
        <div className="mt-24 text-center p-12 rounded-[3rem] bg-lime-50 border border-lime-100">
          <div className="text-lime-600 text-4xl mb-6">
            <i className="fas fa-quote-left"></i>
          </div>
          <p className="text-2xl font-medium text-slate-800 italic leading-relaxed mb-8">
            "Mucha gente pequeña, en lugares pequeños, haciendo cosas pequeñas, puede cambiar el mundo."
          </p>
          <div className="w-12 h-1 bg-lime-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
