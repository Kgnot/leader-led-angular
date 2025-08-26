import {ApiProduct} from '../dto/api-product.dto';
import {Product} from '../models/product';
import {adapterApplicationArray, adapterCategoryArray} from './adapter-functions';
import {adapterTechnologyArray} from './adapter-technology';

export function adapterProduct(product: ApiProduct): Product {

  return {
    id: product.idInventory,
    marketName: product.marketName,
    power: product.power,
    lumens: product.lumens,
    reference: product.reference,
    desc: product.desc,
    images: product.images,
    technologies: adapterTechnologyArray(product.technologies),
    applications: adapterApplicationArray(product.applications),
    categories: adapterCategoryArray(product.categories)
  }
}

export function adapterProductArray(products: ApiProduct[]): Product[] {
  return products.map(product => adapterProduct(product));
}
