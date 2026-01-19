import {Observable} from 'rxjs';
import {Product} from '../../models/product';

export interface ProductService {
  getProducts: () => Observable<Product[]>
  getProductById: (id: number) => Observable<Product | null>
  getProductsByCategory: (categoryId: number) => Observable<Product[]>
  getProductsByTechnology: (technologyId: number) => Observable<Product[]>
  getProductsByApplication: (applicationId: number) => Observable<Product[]>
  getProductsByLetter: (name: string) => Observable<Product[]>

  //
  getTotalProducts(): Observable<number>
}
