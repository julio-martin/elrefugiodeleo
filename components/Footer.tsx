
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img 
                src="https://storage.googleapis.com/static-files-prod/ai-studio/f809971a-28e4-4df1-8da6-f94d9b4c0628.png" 
                alt="El Refugio de Leo Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-slate-800">
                El Refugio <span className="text-lime-600">de Leo</span>
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed">
              Dedicados al rescate y protección animal desde 2012. Creemos en una segunda oportunidad para todos.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6 uppercase text-sm tracking-widest">Navegación</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/perros" className="hover:text-lime-600 transition-colors">Nuestros Perros</Link></li>
              <li><Link to="/gatos" className="hover:text-lime-600 transition-colors">Nuestros Gatos</Link></li>
              <li><Link to="/finales-felices" className="hover:text-lime-600 transition-colors">Finales Felices</Link></li>
              <li><Link to="/nosotros" className="hover:text-lime-600 transition-colors">Nuestra Historia</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6 uppercase text-sm tracking-widest">Colabora</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><Link to="/colabora" className="hover:text-lime-600 transition-colors">Donaciones</Link></li>
              <li><Link to="/colabora" className="hover:text-lime-600 transition-colors">Teaming</Link></li>
              <li><Link to="/colabora" className="hover:text-lime-600 transition-colors">Voluntariado</Link></li>
              <li><Link to="/colabora" className="hover:text-lime-600 transition-colors">Casas de Acogida</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-800 mb-6 uppercase text-sm tracking-widest">Síguenos</h4>
            <div className="flex space-x-4">
              {[
                { icon: 'fa-instagram', url: '#' },
                { icon: 'fa-facebook-f', url: '#' },
                { icon: 'fa-twitter', url: '#' },
                { icon: 'fa-whatsapp', url: '#' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  className="w-10 h-10 bg-slate-50 text-slate-400 hover:bg-lime-500 hover:text-white rounded-full flex items-center justify-center transition-all"
                >
                  <i className={`fab ${s.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <p>© 2024 El Refugio de Leo. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-lime-600 transition-colors">Cookies</a>
            <a href="#" className="hover:text-lime-600 transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
