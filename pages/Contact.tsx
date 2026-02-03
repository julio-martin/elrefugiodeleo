
import React from 'react';

const Contact: React.FC = () => {
  const socials = [
    { name: 'Instagram', handle: '@elrefugiodeleo', icon: 'fa-instagram', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', url: '#' },
    { name: 'Facebook', handle: 'El Refugio de Leo', icon: 'fa-facebook-f', color: 'bg-blue-600', url: '#' },
    { name: 'WhatsApp', handle: 'Envíanos un mensaje', icon: 'fa-whatsapp', color: 'bg-green-500', url: 'https://wa.me/34123456789' },
    { name: 'TikTok', handle: '@refugioleo', icon: 'fa-tiktok', color: 'bg-black', url: '#' },
  ];

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-slate-800">Contacta con nosotros</h1>
        <p className="text-xl text-slate-600 mb-16 leading-relaxed">
          Para evitar spam y garantizar que nuestra atención se centre en los animales, no utilizamos formularios de contacto. 
          Respondemos mucho más rápido a través de nuestras redes sociales o WhatsApp.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className={`w-16 h-16 ${social.color} text-white rounded-2xl flex items-center justify-center text-3xl shadow-lg mr-6`}>
                <i className={`fab ${social.icon}`}></i>
              </div>
              <div className="text-left">
                <div className="text-sm text-slate-400 uppercase tracking-widest font-bold mb-1">{social.name}</div>
                <div className="text-xl font-bold text-slate-800 group-hover:text-lime-600 transition-colors">
                  {social.handle}
                </div>
              </div>
              <div className="ml-auto text-slate-300 group-hover:text-lime-400 transition-colors">
                <i className="fas fa-arrow-right"></i>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-20 p-10 bg-lime-50 rounded-3xl border border-lime-100 inline-block text-left shadow-inner">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-lime-600 shadow-sm flex-shrink-0">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">¿Dónde estamos?</h3>
              <p className="text-slate-600">
                Por seguridad de nuestros animales, la ubicación exacta se facilita bajo cita previa.<br />
                Estamos situados en las afueras de <strong>Valencia, España</strong>.
              </p>
              <div className="mt-4 flex gap-4">
                <span className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <i className="fas fa-clock text-lime-500"></i>
                  L-V: 10:00 - 18:00
                </span>
                <span className="flex items-center gap-2 text-sm font-bold text-slate-500">
                  <i className="fas fa-clock text-lime-500"></i>
                  S-D: 10:00 - 14:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
