import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Brand} from '../../models';
import {BrandsService} from './interface-brands.service';

@Injectable({
  providedIn: 'root'
})
export class MockBrandsService implements BrandsService {
  // Mock data removed - use real API instead

  getBrands(): Observable<Brand[]> {
    return of([]);
  }

  getBrandById(id: number): Observable<Brand | null> {
    return of(null);
  }
}
