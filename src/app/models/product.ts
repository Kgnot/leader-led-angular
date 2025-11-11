import {Technology} from './technologies';
import {Category} from './category';
import {Application} from './application';
import {Brand} from './brand';

export interface Product {
  id: number;
  marketName: string;
  power: number[]; // que potencias tiene
  lumens: number; // el lumen que maneja
  reference: string;
  desc: string;
  subDesc: string // esta es para saber que casos de uso tiene el producto
  images: string[]; // una serie de imagenes
  technologies: Technology[];
  applications: Application[];
  categories: Category[];
  brands: Brand[] // las marcas
}
