import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, map, catchError, of} from 'rxjs';
import {ProductService} from './interfaceProductService';
import {Product} from '../../models/product';
import {PRODUCTS} from '../../endpoints/endpoints';
import {ApiProduct} from '../../dto/api-product.dto';
import {adapterProduct, adapterProductArray} from '../../adapter/adapter-product';

@Injectable({
  providedIn: 'root'
})
export class RealProductsService implements ProductService {
  constructor(private http: HttpClient) {}

  getTotalProducts(): Observable<number> {
    return this.http.get<ApiProduct[]>(PRODUCTS.GET_ALL()).pipe(
      map(products => products.length),
      catchError(() => of(0))
    );
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<ApiProduct[]>(PRODUCTS.GET_ALL()).pipe(
      map(adapterProductArray),
      catchError(() => of([]))
    );
  }

  getProductById(id: number): Observable<Product | null> {
    return this.http.get<ApiProduct>(PRODUCTS.GET_ONE(id)).pipe(
      map(adapterProduct),
      catchError(() => of(null))
    );
  }

  getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<ApiProduct[]>(PRODUCTS.GET_ALL({ categoryId })).pipe(
      map(adapterProductArray),
      catchError(() => of([]))
    );
  }

  getProductsByTechnology(technologyId: number): Observable<Product[]> {
    return this.http.get<ApiProduct[]>(PRODUCTS.GET_ALL({ technologyId })).pipe(
      map(adapterProductArray),
      catchError(() => of([]))
    );
  }

  getProductsByApplication(applicationId: number): Observable<Product[]> {
    return this.http.get<ApiProduct[]>(PRODUCTS.GET_ALL({ applicationId })).pipe(
      map(adapterProductArray),
      catchError(() => of([]))
    );
  }

  getProductsByLetter(name: string): Observable<Product[]> {
    // Note: This might need a specific endpoint for search, using GET_ALL for now
    return this.http.get<ApiProduct[]>(PRODUCTS.GET_ALL()).pipe(
      map(products => adapterProductArray(products).filter(p =>
        p.name.toLowerCase().includes(name.toLowerCase())
      )),
      catchError(() => of([]))
    );
  }
}
