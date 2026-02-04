# Sistema de Gestión de Animales - El Refugio de Leo

## Estructura del Sistema

El sistema permite gestionar el catálogo de animales mediante un archivo JSON y carpetas de fotos. No necesitas editar HTML manualmente.

### Archivos Importantes

- **`data/animals.json`**: Base de datos de animales
- **`assets/animales/{id}/`**: Carpetas con fotos de cada animal
- **`js/animals.js`**: JavaScript que carga y renderiza los animales
- **`animal.html`**: Página de detalle de cada animal

## Cómo Añadir un Nuevo Animal

### Paso 1: Crear carpeta de fotos

Crea una carpeta con el ID del animal en `assets/animales/`:

```bash
mkdir assets/animales/toby
```

### Paso 2: Añadir fotos

Añade las fotos del animal en la carpeta:
- **Foto principal**: Debe llamarse `{id}.jpg` (ej: `toby.jpg`)
- **Fotos adicionales**: Deben llamarse `{id}2.jpg`, `{id}3.jpg`, etc. (ej: `toby2.jpg`, `toby3.jpg`)

```
assets/animales/toby/
  ├── toby.jpg    (foto principal)
  ├── toby2.jpg   (segunda foto)
  └── toby3.jpg   (tercera foto)
```

### Paso 3: Añadir entrada en el JSON

Edita `data/animals.json` y añade un nuevo objeto al array `animales`:

```json
{
  "id": "toby",
  "tipo": "perro",
  "nombre": "Toby",
  "fecha_nacimiento": "2020-03-15",
  "sexo": "Macho",
  "tamano": "Grande",
  "descripcion": "Descripción corta para la card.",
  "historia": "Historia completa del animal que aparecerá en su página individual.",
  "caracteristicas": ["Vacunado", "Esterilizado", "Sociable"],
  "finales_felices": false,
  "num_fotos": 3
}
```

### Campos del JSON

- **id**: Identificador único (sin espacios, minúsculas)
- **tipo**: "perro" o "gato"
- **nombre**: Nombre del animal
- **fecha_nacimiento**: Formato YYYY-MM-DD (ej: "2020-03-15")
  - La edad se calcula automáticamente ("6 meses", "2 años", etc.)
- **sexo**: "Macho" o "Hembra"
- **tamano**: "Pequeño", "Mediano" o "Grande"
- **descripcion**: Texto corto (1-2 líneas) para la tarjeta en la galería
- **historia**: Texto largo con la historia completa del animal
- **caracteristicas**: Array de características (ej: ["Vacunado", "Esterilizado", "Tranquilo"])
- **finales_felices**: `false` si está en adopción, `true` si ya fue adoptado
- **num_fotos**: Número total de fotos del animal
- **fecha_adopcion** (opcional): Solo para finales felices, formato YYYY-MM-DD

## Cómo Marcar un Animal como Adoptado

Simplemente cambia `finales_felices` de `false` a `true`:

```json
{
  "id": "toby",
  ...
  "finales_felices": true,
  "fecha_adopcion": "2024-01-15"
}
```

El animal desaparecerá automáticamente de la galería de perros/gatos y aparecerá en "Finales Felices".

## Cómo Eliminar un Animal

Elimina su entrada del JSON y opcionalmente borra su carpeta de fotos:

```bash
rm -rf assets/animales/toby
```

## Dónde Aparecen los Animales

- **perros.html**: Animales con `tipo: "perro"` y `finales_felices: false`
- **gatos.html**: Animales con `tipo: "gato"` y `finales_felices: false`
- **finales-felices.html**: Todos los animales con `finales_felices: true` (perros y gatos mezclados)
- **animal.html?id=xxx**: Página individual de cada animal con galería completa

## Ejemplo Completo

```json
{
  "animales": [
    {
      "id": "max",
      "tipo": "perro",
      "nombre": "Max",
      "fecha_nacimiento": "2022-02-15",
      "sexo": "Macho",
      "tamano": "Mediano",
      "descripcion": "Muy cariñoso y juguetón, ideal para familias con niños.",
      "historia": "Max fue rescatado de la calle cuando era un cachorro. Tras meses de cuidados y cariño, se ha convertido en un perro alegre y sociable que busca una familia que le dé todo el amor que merece.",
      "caracteristicas": ["Vacunado", "Esterilizado", "Sociable con niños", "Apto para pisos"],
      "finales_felices": false,
      "num_fotos": 3
    },
    {
      "id": "luna",
      "tipo": "gato",
      "nombre": "Luna",
      "fecha_nacimiento": "2023-08-01",
      "sexo": "Hembra",
      "tamano": "Pequeño",
      "descripcion": "Muy cariñosa y juguetona, ideal para hogares tranquilos.",
      "historia": "Luna fue encontrada en un parque cuando apenas tenía unas semanas. Es una gatita dulce y cariñosa que se lleva bien con otros gatos y busca un hogar donde la mimen.",
      "caracteristicas": ["Vacunada", "Esterilizada", "Tranquila", "Buena con otros gatos"],
      "finales_felices": false,
      "num_fotos": 2
    }
  ]
}
```

## Formato de Fotos Recomendado

- **Formato**: JPG
- **Tamaño**: Mínimo 800x800px
- **Aspecto**: Preferiblemente cuadrado o 4:3
- **Peso**: Máximo 2MB por foto (para carga rápida)

## Notas

- Los cambios en el JSON se reflejan inmediatamente al recargar la página (no necesitas regenerar HTML)
- Las URLs de las páginas individuales son: `animal.html?id={id}`
- El botón "Ver más" en las galerías lleva automáticamente a la página individual
- El cálculo de edad es automático desde la fecha de nacimiento
