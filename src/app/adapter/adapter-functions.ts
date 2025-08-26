import {ApiApplication} from "../dto/api-application.dto";
import {Application, Category} from '../models';
import {ApiCategory} from '../dto/api-category.dto';

export function adapterApplication(data: ApiApplication): Application {
  return {
    id: data.idApplication,
    type: data.type,
    image: data.image,
  };
}

export function adapterApplicationArray(data: ApiApplication[]) {
  return data.map(adapterApplication)
}

export function adaptCategory(data: ApiCategory): Category {
  return {
    id: data.idCategory,
    type: data.name,
    image: data.image,
  };
}

export function adapterCategoryArray(data: ApiCategory[]) {
  return data.map(adaptCategory)
}
