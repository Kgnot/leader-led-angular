import {ApiApplication} from './api-application.dto';
import {ApiTechnology} from './api-technology.dto';
import {ApiCategory} from './api-category.dto';

export interface ApiProduct {
  idInventory: number;
  marketName: string;
  reference: string
  power: number;
  lumens: number;
  desc: string;
  images: string[];
  technologies: ApiTechnology[];
  applications: ApiApplication[];
  categories: ApiCategory[];
}
