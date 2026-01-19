import {ApiApplication} from "../dto/api-application.dto";
import {Application, Brand, Category} from '../models';
import {ApiCategory} from '../dto/api-category.dto';
import {ApiBrand} from '../dto/api-brand.dto';

export function adapterApplication(data: ApiApplication): Application {
  return {
    id: data.id,
    name: data.name,
    imageUrl: data.imageUrl,
  };
}

export function adapterApplicationArray(data: ApiApplication[]):Application[] {
  return data.map(adapterApplication)
}

export function adaptCategory(data: ApiCategory): Category {
  return {
    id: data.id,
    name: data.name,
    slug: data.slug,
    imageUrl: data.imageUrl,
  };
}

export function adapterCategoryArray(data: ApiCategory[]):Category[] {
  return data.map(adaptCategory)
}

// adapter del brands:
export function adapterBrand(data: ApiBrand): Brand {
  return {
    id: data.id,
    name: data.name,
    imageUrl: data.imageUrl,
    websiteUrl: data.websiteUrl
  }
}

export function adapterBrandArray(data: ApiBrand[]):Brand[] {
  return data.map(adapterBrand);
}
