
export type AnimalType = 'perro' | 'gato';

export interface Animal {
  id: string;
  name: string;
  type: AnimalType;
  age: string;
  size: 'pequeño' | 'mediano' | 'grande';
  gender: 'macho' | 'hembra';
  description: string;
  image: string;
  tags: string[];
  isHappyEnding?: boolean;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
