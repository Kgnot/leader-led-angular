import {ApiApplication} from './api-application.dto';
import {ApiTechnology} from './api-technology.dto';
import {ApiCategory} from './api-category.dto';

// este es el archivo del cual yo recibo, es el json
export interface ApiProductImage {
  id: number;
  url: string;
  isMain: boolean;
}

export interface ApiProductSpecification {
  attributeName: string;
  value: string;
  unit: string;
}

export interface ApiProduct {
  id: number;
  reference: string;
  name: string;
  description: string;
  detailedDescription: string;
  isActive: boolean;
  images: ApiProductImage[];
  specifications: ApiProductSpecification[];
  technologies: ApiTechnology[];
  applications: ApiApplication[];
  categories: ApiCategory[];
}
