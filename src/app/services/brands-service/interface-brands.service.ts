import {Observable} from 'rxjs';
import {Brand} from '../../models/brand';

export interface BrandsService {
  getBrands(): Observable<Brand[]>;
  getBrandById(id: number): Observable<Brand | null>;
}