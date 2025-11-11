import {ApiApplication} from "../dto/api-application.dto";
import {Application, Brand, Category} from '../models';
import {ApiCategory} from '../dto/api-category.dto';
import {ApiBrand} from '../dto/api-brand.dto';

export function adapterApplication(data: ApiApplication): Application {
  return {
    id: data.idApplication,
    type: data.type,
    image: data.image,
  };
}

export function adapterApplicationArray(data: ApiApplication[]):Application[] {
  return data.map(adapterApplication)
}

export function adaptCategory(data: ApiCategory): Category {
  return {
    id: data.idCategory,
    type: data.name,
    image: data.image,
  };
}

export function adapterCategoryArray(data: ApiCategory[]):Category[] {
  return data.map(adaptCategory)
}

// adapter del brands:
export function adapterBrand(data: ApiBrand): Brand {
  return {
    idbrand: data.idBrand,
    name: data.name,
    imageUrl: data.imageUrl
  }
}

export function adapterBrandArray(data: ApiBrand[]):Brand[] {
  return data.map(adapterBrand);
}
