import {ApiProduct} from '../dto/api-product.dto';
import {Product} from '../models/product';
import {adapterApplicationArray, adapterCategoryArray} from './adapter-functions';
import {adapterTechnologyArray} from './adapter-technology';

export function adapterProduct(product: ApiProduct): Product {

  return {
    id: product.id,
    reference: product.reference,
    name: product.name,
    description: product.description,
    detailedDescription: product.detailedDescription,
    isActive: product.isActive,
    images: product.images,
    specifications: product.specifications,
    technologies: adapterTechnologyArray(product.technologies),
    applications: adapterApplicationArray(product.applications),
    categories: adapterCategoryArray(product.categories)
  }
}

export function adapterProductArray(products: ApiProduct[]): Product[] {
  return products.map(product => adapterProduct(product));
}
