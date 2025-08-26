import {Injectable} from '@angular/core';
import {ProductService} from './interfaceProductService';
import {Product} from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class RealProductsService implements ProductService{
  getProducts(): Product[] {
    return [];
  }

  getProductById(id: number): Product | null {
    return null;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return [];
  }

  getProductsByTechnology(technologyId: number): Product[] {
    return [];
  }

  getProductsByApplication(applicationId: number): Product[] {
    return [];
  }
}
