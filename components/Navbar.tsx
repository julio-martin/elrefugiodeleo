
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Perros', path: '/perros' },
    { name: 'Gatos', path: '/gatos' },
    { name: 'Finales Felices', path: '/finales-felices' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Colabora', path: '/colabora' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://storage.googleapis.com/static-files-prod/ai-studio/893a743b-28f0-4d43-9844-0c5a08db1c49.png" 
                alt="El Refugio de Leo Logo Small" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-slate-700 tracking-tight hidden sm:block">
                El Refugio <span className="text-lime-600">de Leo</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-lime-700 bg-lime-50'
                    : 'text-slate-600 hover:text-lime-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/colabora"
              className="ml-4 px-5 py-2.5 bg-lime-600 text-white rounded-full text-sm font-semibold hover:bg-lime-700 transition-all shadow-md shadow-lime-100"
            >
              Donar Ahora
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 hover:text-lime-600 focus:outline-none p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium ${
                  isActive(link.path)
                    ? 'text-lime-600 bg-lime-50'
                    : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/colabora"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-3 bg-lime-600 text-white rounded-xl font-bold"
              >
                Colabora con nosotros
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
