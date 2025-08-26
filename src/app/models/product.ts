import {Technology} from './technologies';
import {Category} from './category';
import { Application } from './application';

export interface Product {
  id: number;
  marketName: string;
  power: number;
  lumens: number;
  reference: string;
  desc: string;
  images: string[];
  technologies: Technology[];
  applications: Application[];
  categories: Category[]

}
