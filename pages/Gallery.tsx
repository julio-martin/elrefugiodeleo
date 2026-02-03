
import React, { useState, useMemo } from 'react';
import { AnimalType } from '../types';
import { PETS_DATA } from '../data/pets';

interface GalleryProps {
  title: string;
  type?: AnimalType;
  isHappyEnding?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ title, type, isHappyEnding }) => {
  const [sizeFilter, setSizeFilter] = useState<string>('todos');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 1. Get initial set based on type or happy ending status
  const baseAnimals = useMemo(() => {
    return PETS_DATA.filter(animal => {
      if (isHappyEnding) return animal.isHappyEnding;
      if (animal.isHappyEnding) return false;
      return animal.type === type;
    });
  }, [type, isHappyEnding]);

  // 2. Extract unique tags from the base set of animals
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    baseAnimals.forEach(animal => animal.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
  }, [baseAnimals]);

  // 3. Handle tag selection logic
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  // 4. Apply all filters
  const displayAnimals = useMemo(() => {
    return baseAnimals.filter(animal => {
      const matchesSize = sizeFilter === 'todos' || animal.size === sizeFilter;
      const matchesTags = selectedTags.length === 0 || selectedTags.every(tag => animal.tags.includes(tag));
      return matchesSize && matchesTags;
    });
  }, [baseAnimals, sizeFilter, selectedTags]);

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col mb-12 border-b border-slate-100 pb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 text-slate-800">{title}</h1>
            <p className="text-slate-500">
              {isHappyEnding 
                ? 'Historias que nos motivan a seguir adelante cada día.' 
                : `Conoce a los ${type}s que buscan un hogar para siempre.`}
            </p>
          </div>
          
          {!isHappyEnding && (
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              <span className="w-full md:w-auto text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 md:mb-0 md:mr-2 flex items-center">Tamaño:</span>
              {['todos', 'pequeño', 'mediano', 'grande'].map((f) => (
                <button
                  key={f}
                  onClick={() => setSizeFilter(f)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold capitalize transition-all ${
                    sizeFilter === f ? 'bg-lime-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Multi-select Tags Filter Section */}
        {availableTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mr-2">Filtrar por rasgos:</span>
            {availableTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                  selectedTags.includes(tag)
                    ? 'bg-lime-100 border-lime-500 text-lime-800 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-500 hover:border-lime-400 hover:text-lime-600'
                }`}
              >
                <i className={`fas ${selectedTags.includes(tag) ? 'fa-check-circle' : 'fa-plus-circle'} mr-1.5 opacity-70`}></i>
                {tag}
              </button>
            ))}
            {selectedTags.length > 0 && (
              <button 
                onClick={() => setSelectedTags([])}
                className="text-xs font-bold text-slate-400 hover:text-red-500 underline ml-2 transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayAnimals.map((animal) => (
          <div key={animal.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-50">
            <div className="relative h-72 overflow-hidden">
              <img src={animal.image} alt={animal.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              {isHappyEnding && (
                <div className="absolute top-4 right-4 bg-lime-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <i className="fas fa-check-circle"></i> Adoptado
                </div>
              )}
              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
                {animal.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-black/60 backdrop-blur text-white text-[10px] uppercase font-bold rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-slate-800">{animal.name}</h3>
                <span className="text-slate-400 font-medium text-sm">{animal.age}</span>
              </div>
              <p className="text-slate-600 mb-6 line-clamp-2 leading-relaxed h-12">
                {animal.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-slate-500 mb-8 border-t border-slate-50 pt-4">
                <div className="flex items-center gap-1.5">
                  <i className="fas fa-ruler-combined text-lime-500"></i>
                  <span className="capitalize">{animal.size}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <i className="fas fa-venus-mars text-lime-500"></i>
                  <span className="capitalize">{animal.gender}</span>
                </div>
              </div>

              {!isHappyEnding && (
                <button className="w-full py-3.5 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-lime-100">
                  Me interesa adoptar
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {displayAnimals.length === 0 && (
        <div className="py-20 text-center animate-in fade-in duration-500">
          <div className="text-slate-200 text-7xl mb-6">
            <i className="fas fa-search"></i>
          </div>
          <p className="text-slate-500 text-xl font-medium mb-2">No hemos encontrado ningún animal con esos filtros.</p>
          <button 
            onClick={() => {setSizeFilter('todos'); setSelectedTags([]);}}
            className="text-lime-600 font-bold hover:underline"
          >
            Mostrar todos los animales
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
