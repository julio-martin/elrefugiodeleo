
import { Animal } from '../types';

/**
 * INSTRUCCIONES PARA EL REFUGIO:
 * Para añadir un nuevo animal, copia un bloque de objeto y pégalo al final de la lista.
 * - id: un número único.
 * - type: debe ser 'perro' o 'gato'.
 * - image: URL de la foto (puedes usar enlaces de Google Drive, Dropbox o vuestro hosting).
 * - isHappyEnding: ponlo en 'true' si ya ha sido adoptado para que aparezca en Finales Felices.
 */
export const PETS_DATA: Animal[] = [
  {
    id: '1',
    name: 'Buddy',
    type: 'perro',
    age: '3 años',
    size: 'grande',
    gender: 'macho',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&q=80&w=600',
    description: 'Un retriever incansable, ideal para familias activas que amen los largos paseos por el campo.',
    tags: ['Activo', 'Sociable'],
    isHappyEnding: false
  },
  {
    id: '2',
    name: 'Nala',
    type: 'gato',
    age: '1 año',
    size: 'pequeño',
    gender: 'hembra',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&q=80&w=600',
    description: 'Elegante y muy tranquila. Le encanta dormir en lugares soleados y es muy limpia.',
    tags: ['Cariñosa', 'Hogar'],
    isHappyEnding: false
  },
  {
    id: '3',
    name: 'Toby',
    type: 'perro',
    age: '5 años',
    size: 'mediano',
    gender: 'macho',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&q=80&w=600',
    description: 'Toby fue rescatado de una situación difícil y ahora vive feliz con su nueva familia en Madrid.',
    tags: ['Valiente'],
    isHappyEnding: true
  },
  {
    id: '4',
    name: 'Milo',
    type: 'gato',
    age: '2 meses',
    size: 'pequeño',
    gender: 'macho',
    image: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&q=80&w=600',
    description: 'Energía pura en formato pequeño. Busca una familia que tenga paciencia para sus juegos.',
    tags: ['Juguetón'],
    isHappyEnding: false
  },
  {
    id: '5',
    name: 'Kira',
    type: 'perro',
    age: '8 años',
    size: 'grande',
    gender: 'hembra',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    description: 'Nuestra abuelita favorita. Busca un hogar tranquilo donde pasar sus años de jubilación con mucho amor.',
    tags: ['Tranquila', 'Mayor'],
    isHappyEnding: false
  },
  {
    id: '6',
    name: 'Coco',
    type: 'gato',
    age: '4 años',
    size: 'mediano',
    gender: 'hembra',
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&q=80&w=600',
    description: 'Coco encontró el sofá de sus sueños hace dos meses. ¡Mirad qué cara de felicidad!',
    tags: ['Hogareña'],
    isHappyEnding: true
  }
];
