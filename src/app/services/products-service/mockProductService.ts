import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Product} from '../../models/product';
import {ProductService} from './interfaceProductService';

@Injectable({
  providedIn: "root"
})
export class MockProductService implements ProductService {

  // Mock data removed - use real API instead


  getProducts(): Observable<Product[]> {
    return of([]);
  }

  getTotalProducts(): Observable<number> {
    return of(0);
  }

  getProductById(id: number): Observable<Product | null> {
    return of(null);
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return of([]);
  }

  getProductsByTechnology(technologyId: number): Observable<Product[]> {
    return of([]);
  }

  getProductsByApplication(applicationId: number): Observable<Product[]> {
    return of([]);
  }

  getProductsByLetter(name: string): Observable<Product[]> {
    return of([]);
  }
}
