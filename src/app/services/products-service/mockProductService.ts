import {Injectable} from '@angular/core';
import data from '../../../assets/data/inventory.json'
import {Product} from '../../models/product';
import {ProductService} from './interfaceProductService';
import {adapterProductArray} from '../../adapter/adapter-product';

@Injectable({
  providedIn: "root"
})
export class MockProductService implements ProductService {


  private dataProducts: Product[] = adapterProductArray(data);


  getProducts(): Product[] {
    return this.dataProducts;
  }

  getTotalProducts(): number {
    return this.dataProducts.length;
  }

  getProductById(id: number): Product | null {
    return this.dataProducts
      .find(product => product.id === id) ?? null;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.dataProducts
      .filter(product => product.categories
        .find(category => category.id === categoryId));
  }

  getProductsByTechnology(technologyId: number): Product[] {
    return this.dataProducts
      .filter(product => product.technologies
        .find(technology => technology.id === technologyId));
  }

  getProductsByApplication(applicationId: number): Product[] {
    return this.dataProducts
      .filter(product => product.applications
        .find(application => application.id === applicationId));
  }
}
