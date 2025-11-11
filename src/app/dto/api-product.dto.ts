import {ApiApplication} from './api-application.dto';
import {ApiTechnology} from './api-technology.dto';
import {ApiCategory} from './api-category.dto';
import {ApiBrand} from './api-brand.dto';

// este es el archivo del cual yo recibo, es el json
export interface ApiProduct {
  idInventory: number;
  marketName: string;
  reference: string
  power: number[];
  lumens: number;
  desc: string;
  subDesc: string;
  images: string[];
  technologies: ApiTechnology[];
  applications: ApiApplication[];
  categories: ApiCategory[];
  brands: ApiBrand[]
}
