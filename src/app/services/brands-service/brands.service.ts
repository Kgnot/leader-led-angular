import {inject, Injectable} from '@angular/core';
import {Observable, map, catchError, of} from 'rxjs';
import {Brand} from '../../models/brand';
import {HttpClient} from '@angular/common/http';
import {BRANDS} from '../../endpoints/endpoints';
import {ApiBrand} from '../../dto/api-brand.dto';
import {adapterBrand, adapterBrandArray} from '../../adapter/adapter-functions';
import {BrandsService as IBrandsService} from './interface-brands.service';

@Injectable({
  providedIn: 'root'
})
export class BrandsService implements IBrandsService {

  private http: HttpClient = inject(HttpClient);

  getBrands(): Observable<Brand[]> {
    return this.http.get<ApiBrand[]>(BRANDS.GET_ALL).pipe(
      map(adapterBrandArray),
      catchError(() => of([]))
    );
  }

  getBrandById(id: number): Observable<Brand | null> {
    return this.http.get<ApiBrand>(BRANDS.GET_ONE(id)).pipe(
      map(adapterBrand),
      catchError(() => of(null))
    );
  }
}
