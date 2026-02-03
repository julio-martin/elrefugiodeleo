
import React, { useState } from 'react';
import { getPetMatchAdvice } from '../services/gemini';

const PetMatcher: React.FC = () => {
  const [input, setInput] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setAdvice(null);
    const response = await getPetMatchAdvice(input);
    setAdvice(response);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-lime-100">
      <form onSubmit={handleMatch} className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Cuéntanos sobre ti (ej: vivo en un piso pequeño, trabajo fuera, tengo niños...)
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe tu rutina diaria y espacio..."
            className="w-full h-32 px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="w-full py-4 bg-lime-600 hover:bg-lime-700 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-lime-100"
        >
          {loading ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> Analizando tu estilo de vida...
            </>
          ) : (
            <>
              <i className="fas fa-wand-magic-sparkles"></i> Consultar al experto Leo AI
            </>
          )}
        </button>
      </form>

      {advice && (
        <div className="mt-8 p-6 bg-slate-50 border-l-4 border-lime-500 rounded-r-xl animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
              <i className="fas fa-paw text-lime-600"></i>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Consejo de nuestro refugio:</h4>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">{advice}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PetMatcher;
