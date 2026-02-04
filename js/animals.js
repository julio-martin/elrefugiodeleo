// animals.js - Gestión dinámica de animales desde JSON

// Función para calcular edad amigable desde fecha de nacimiento
function calcularEdad(fechaNacimiento) {
  // Si no hay fecha de nacimiento, devolver "-"
  if (!fechaNacimiento || fechaNacimiento === '') {
    return '-';
  }

  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);

  // Validar que la fecha sea válida
  if (isNaN(nacimiento.getTime())) {
    return '-';
  }

  const meses = (hoy.getFullYear() - nacimiento.getFullYear()) * 12 + (hoy.getMonth() - nacimiento.getMonth());

  if (meses < 12) {
    return meses === 1 ? '1 mes' : `${meses} meses`;
  } else if (meses < 18) {
    return '1 año';
  } else if (meses < 24) {
    return '1 año y medio';
  } else {
    const años = Math.floor(meses / 12);
    const mesesRestantes = meses % 12;
    if (mesesRestantes === 0) {
      return años === 1 ? '1 año' : `${años} años`;
    } else if (mesesRestantes >= 6) {
      return `${años} años y medio`;
    } else {
      return años === 1 ? '1 año' : `${años} años`;
    }
  }
}

// Función para obtener la ruta de la foto principal
function getFotoPrincipal(animal) {
  return `assets/animales/${animal.id}/${animal.id}.jpg`;
}

// Función para obtener todas las fotos de un animal
function getFotosAnimal(animal) {
  const fotos = [getFotoPrincipal(animal)];
  for (let i = 2; i <= animal.num_fotos; i++) {
    fotos.push(`assets/animales/${animal.id}/${animal.id}${i}.jpg`);
  }
  return fotos;
}

// Función para crear una card de animal
function crearCardAnimal(animal) {
  const edad = calcularEdad(animal.fecha_nacimiento);
  const fotoPrincipal = getFotoPrincipal(animal);

  // Formatear sexo con icono
  const sexoIcon = animal.sexo === 'macho' ? '♂' : '♀';
  const sexoLabel = animal.sexo ? animal.sexo.charAt(0).toUpperCase() + animal.sexo.slice(1) : '';
  const sexoColor = animal.sexo === 'macho' ? 'text-blue-600' : 'text-pink-600';

  // Formatear tamaño
  const tamanoLabel = animal.tamano ? animal.tamano.charAt(0).toUpperCase() + animal.tamano.slice(1) : '';

  return `
    <a href="animal.html?id=${animal.id}" class="block group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
      <div class="h-64 overflow-hidden relative">
        <img src="${fotoPrincipal}" alt="${animal.nombre}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800'" />
        <div class="absolute top-4 left-4 flex gap-2">
          ${sexoLabel ? `<span class="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold ${sexoColor} uppercase flex items-center gap-1">
            <span class="text-base">${sexoIcon}</span> ${sexoLabel}
          </span>` : ''}
          ${tamanoLabel ? `<span class="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold text-slate-800 uppercase flex items-center">
            ${tamanoLabel}
          </span>` : ''}
        </div>
      </div>
      <div class="p-6">
        <div class="flex justify-between items-center mb-2">
          <h3 class="text-2xl font-bold text-slate-800">${animal.nombre}</h3>
          <span class="text-lime-600 font-medium">${edad}</span>
        </div>
        <p class="text-slate-500 mb-6 italic">"${animal.descripcion}"</p>
        <div class="block w-full text-center py-3 bg-slate-50 group-hover:bg-lime-600 group-hover:text-white rounded-xl font-bold transition-all">
          Ver más
        </div>
      </div>
    </a>
  `;
}

// Función para cargar y renderizar animales
async function cargarAnimales(tipo = null, soloFinalesFelices = false) {
  try {
    const response = await fetch('data/animals.json');
    const data = await response.json();
    let animales = data.animales;

    // Filtrar por tipo si se especifica
    if (tipo) {
      animales = animales.filter(a => a.tipo === tipo);
    }

    // Filtrar por finales felices
    if (soloFinalesFelices) {
      animales = animales.filter(a => a.finales_felices === true);
    } else {
      animales = animales.filter(a => a.finales_felices === false);
    }

    // Renderizar animales
    const contenedor = document.getElementById('animales-grid');
    if (contenedor) {
      if (animales.length === 0) {
        contenedor.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-slate-500 text-lg">No hay animales disponibles en este momento.</p></div>';
      } else {
        contenedor.innerHTML = animales.map(animal => crearCardAnimal(animal)).join('');
      }
    }
  } catch (error) {
    console.error('Error cargando animales:', error);
    const contenedor = document.getElementById('animales-grid');
    if (contenedor) {
      contenedor.innerHTML = '<div class="col-span-full text-center py-12"><p class="text-red-500 text-lg">Error al cargar los animales. Por favor, intenta de nuevo más tarde.</p></div>';
    }
  }
}

// Función para cargar un animal individual
async function cargarAnimalIndividual() {
  const urlParams = new URLSearchParams(window.location.search);
  const animalId = urlParams.get('id');

  if (!animalId) {
    window.location.href = 'index.html';
    return;
  }

  try {
    const response = await fetch('data/animals.json');
    const data = await response.json();
    const animal = data.animales.find(a => a.id === animalId);

    if (!animal) {
      window.location.href = 'index.html';
      return;
    }

    const edad = calcularEdad(animal.fecha_nacimiento);
    const fotos = getFotosAnimal(animal);
    const tipoLabel = animal.tipo.charAt(0).toUpperCase() + animal.tipo.slice(1);

    // Actualizar título de la página
    document.title = `${animal.nombre} | El Refugio de Leo`;

    // Renderizar información del animal
    const contenedor = document.getElementById('animal-detail');
    if (contenedor) {
      contenedor.innerHTML = `
        <div class="container mx-auto px-6 py-12">
          <a href="${animal.tipo}s.html" class="inline-flex items-center text-lime-600 hover:text-lime-700 mb-8">
            <i class="fas fa-arrow-left mr-2"></i> Volver a ${tipoLabel}s
          </a>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Galería de fotos -->
            <div>
              <div class="bg-white rounded-2xl overflow-hidden shadow-lg mb-4 cursor-pointer" onclick="abrirModal(0)">
                <img id="foto-principal" src="${fotos[0]}" alt="${animal.nombre}" class="w-full h-96 object-cover hover:opacity-90 transition-opacity" />
              </div>
              ${fotos.length > 1 ? `
                <div class="grid grid-cols-4 gap-2">
                  ${fotos.map((foto, index) => `
                    <div class="cursor-pointer rounded-lg overflow-hidden border-2 ${index === 0 ? 'border-lime-500' : 'border-transparent'} hover:border-lime-500 transition-all" onclick="cambiarFoto('${foto}', this)">
                      <img src="${foto}" alt="${animal.nombre} ${index + 1}" class="w-full h-20 object-cover" />
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <!-- Información del animal -->
            <div>
              <div class="flex items-center gap-4 mb-4">
                <span class="px-4 py-1 bg-lime-100 text-lime-700 rounded-full text-sm font-bold uppercase">
                  ${tipoLabel}
                </span>
                ${animal.finales_felices ? '<span class="px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold uppercase">Adoptado</span>' : ''}
              </div>

              <h1 class="text-4xl font-bold text-slate-800 mb-2">${animal.nombre}</h1>
              <p class="text-xl text-lime-600 font-medium mb-6">${edad}</p>

              <div class="bg-slate-50 rounded-2xl p-6 mb-6">
                <h2 class="text-xl font-bold text-slate-800 mb-4">Información</h2>
                <div class="grid ${animal.tipo === 'gato' ? 'grid-cols-1' : 'grid-cols-2'} gap-4">
                  <div>
                    <p class="text-slate-500 text-sm">Sexo</p>
                    <p class="font-semibold text-slate-800">${animal.sexo}</p>
                  </div>
                  ${animal.tipo !== 'gato' ? `
                    <div>
                      <p class="text-slate-500 text-sm">Tamaño</p>
                      <p class="font-semibold text-slate-800">${animal.tamano}</p>
                    </div>
                  ` : ''}
                </div>
              </div>

              <div class="mb-6">
                <h2 class="text-xl font-bold text-slate-800 mb-3">Sobre ${animal.nombre}</h2>
                <p class="text-slate-600 leading-relaxed mb-4">${animal.descripcion}</p>
                <p class="text-slate-600 leading-relaxed">${animal.historia}</p>
              </div>

              ${animal.caracteristicas && animal.caracteristicas.length > 0 ? `
                <div class="mb-6">
                  <h2 class="text-xl font-bold text-slate-800 mb-3">Características</h2>
                  <div class="flex flex-wrap gap-2">
                    ${animal.caracteristicas.map(c => `
                      <span class="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700">
                        <i class="fas fa-check text-lime-600 mr-2"></i>${c}
                      </span>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              ${!animal.finales_felices ? `
                <a href="contacto.html?animal=${animal.id}" class="block w-full text-center py-4 bg-lime-600 hover:bg-lime-700 text-white rounded-xl font-bold text-lg transition-all shadow-lg shadow-lime-100">
                  <i class="fas fa-heart mr-2"></i> Quiero adoptar a ${animal.nombre}
                </a>
              ` : `
                <div class="bg-lime-50 border border-lime-200 rounded-xl p-6 text-center">
                  <i class="fas fa-check-circle text-lime-600 text-3xl mb-2"></i>
                  <p class="text-lime-800 font-semibold">${animal.nombre} ya encontró su hogar feliz</p>
                  ${animal.fecha_adopcion ? `<p class="text-lime-600 text-sm mt-1">Adoptado el ${new Date(animal.fecha_adopcion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>` : ''}
                </div>
              `}
            </div>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error('Error cargando animal:', error);
    document.getElementById('animal-detail').innerHTML = '<div class="container mx-auto px-6 py-12 text-center"><p class="text-red-500 text-lg">Error al cargar la información del animal.</p></div>';
  }
}

// Función para cambiar la foto principal en la galería
function cambiarFoto(src, elemento) {
  document.getElementById('foto-principal').src = src;

  // Actualizar bordes
  const thumbnails = elemento.parentElement.children;
  for (let thumb of thumbnails) {
    thumb.querySelector('div').classList.remove('border-lime-500');
    thumb.querySelector('div').classList.add('border-transparent');
  }
  elemento.classList.remove('border-transparent');
  elemento.classList.add('border-lime-500');
}
