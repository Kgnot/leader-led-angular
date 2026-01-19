import {Technology} from './technologies';
import {Category} from './category';
import {Application} from './application';
import {Brand} from './brand';

export interface ProductImage {
  id: number;
  url: string;
  isMain: boolean;
}

export interface ProductSpecification {
  attributeName: string;
  value: string;
  unit: string;
}

export interface Product {
  id: number;
  reference: string;
  name: string;
  description: string;
  detailedDescription: string;
  isActive: boolean;
  brand?: Brand;
  images: ProductImage[];
  specifications: ProductSpecification[];
  technologies: Technology[];
  applications: Application[];
  categories: Category[];
}
