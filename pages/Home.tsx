
import React from 'react';
import { Link } from 'react-router-dom';
import PetMatcher from '../components/PetMatcher';

const Home: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?auto=format&fit=crop&q=80&w=2000"
            alt="Perro y gato juntos"
            className="w-full h-full object-cover brightness-[0.75]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="inline-block px-4 py-1.5 bg-lime-500 text-sm font-bold uppercase tracking-wider rounded-full mb-6">
              Refugio de Animales Leo
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Cada vida merece un <span className="text-lime-400">final feliz</span>.
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-slate-200 font-light leading-relaxed">
              No solo rescatamos animales, creamos nuevas familias. Ayúdanos a cambiar el destino de cientos de compañeros que esperan por ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/colabora"
                className="px-8 py-4 bg-lime-600 hover:bg-lime-700 text-white rounded-xl text-lg font-bold transition-all text-center shadow-lg shadow-lime-900/40 flex items-center justify-center gap-2"
              >
                <i className="fas fa-heart"></i> Ayudar ahora
              </Link>
              <Link
                to="/perros"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl text-lg font-bold transition-all text-center"
              >
                Ver animales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Priority Donation Section */}
      <section className="container mx-auto px-6">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-lime-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Tu donación es su <span className="text-lime-400">única esperanza</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                No recibimos ayudas públicas. El alimento, las vacunas y las operaciones veterinarias dependen exclusivamente de personas como tú. Incluso 1€ al mes marca la diferencia entre el abandono y una vida digna.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/colabora" className="bg-lime-500 hover:bg-lime-600 text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2">
                  <i className="fas fa-hand-holding-heart"></i> Formas de Donar
                </Link>
                <div className="flex items-center gap-6 text-slate-400">
                  <div className="text-center">
                    <div className="font-bold text-white text-xl">100%</div>
                    <div className="text-xs uppercase tracking-widest">Transparente</div>
                  </div>
                  <div className="w-px h-8 bg-slate-700"></div>
                  <div className="text-center">
                    <div className="font-bold text-white text-xl">Bizum</div>
                    <div className="text-xs uppercase tracking-widest">Disponible</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10">
                <div className="text-lime-400 text-3xl mb-2 font-bold">5€</div>
                <p className="text-slate-400 text-sm italic">Comida para un perro durante una semana.</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 mt-6">
                <div className="text-lime-400 text-3xl mb-2 font-bold">20€</div>
                <p className="text-slate-400 text-sm italic">Vacunación completa de un cachorro rescatado.</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10">
                <div className="text-lime-400 text-3xl mb-2 font-bold">50€</div>
                <p className="text-slate-400 text-sm italic">Cirugía de urgencia o tratamiento crónico.</p>
              </div>
              <div className="bg-white/5 backdrop-blur p-6 rounded-3xl border border-white/10 mt-6">
                <div className="text-lime-400 text-3xl mb-2 font-bold">1€</div>
                <p className="text-slate-400 text-sm italic">Suscripción a Teaming (ayuda mensual).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Pet Matcher Section */}
      <section className="container mx-auto px-6">
        <div className="bg-lime-50/50 rounded-3xl p-8 md:p-12 shadow-inner border border-lime-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-lime-600 shadow-sm mb-4">
                <i className="fas fa-magic text-2xl"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-slate-800">¿No sabes qué mascota elegir?</h2>
              <p className="text-slate-600 text-lg">
                Nuestra Inteligencia Artificial te ayuda a encontrar el compañero ideal basado en tu estilo de vida.
              </p>
            </div>
            <PetMatcher />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-800 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Rescatados', value: '1.2k+', icon: 'fa-heart' },
              { label: 'Adoptados', value: '950+', icon: 'fa-home' },
              { label: 'Voluntarios', value: '45', icon: 'fa-users' },
              { label: 'Años salvando vidas', value: '12', icon: 'fa-calendar-check' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-lime-500 mb-3">
                  <i className={`fas ${stat.icon} text-3xl`}></i>
                </div>
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-slate-400 uppercase text-xs tracking-widest font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories / Galleries Preview */}
      <section className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-800">Nuestros Amigos</h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Estos son solo algunos de los compañeros que esperan encontrar un hogar hoy mismo.
            </p>
          </div>
          <Link to="/perros" className="text-lime-600 font-bold hover:underline flex items-center gap-2">
            Ver todos <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Max', type: 'Perro', img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800', age: '2 años' },
            { name: 'Luna', type: 'Gato', img: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800', age: '6 meses' },
            { name: 'Rocky', type: 'Perro', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=800', age: '4 años' },
          ].map((pet, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="h-64 overflow-hidden relative">
                <img src={pet.img} alt={pet.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-slate-800 uppercase">
                    {pet.type}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold text-slate-800">{pet.name}</h3>
                  <span className="text-lime-600 font-medium">{pet.age}</span>
                </div>
                <p className="text-slate-500 mb-6 italic">"Muy cariñoso y juguetón, ideal para familias con niños."</p>
                <Link to={pet.type === 'Perro' ? '/perros' : '/gatos'} className="block w-full text-center py-3 bg-slate-50 hover:bg-lime-600 hover:text-white rounded-xl font-bold transition-all">
                  Saber más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
