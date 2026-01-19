import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from '../../models';
import {ICategoryService} from './interface-category.service';

@Injectable({
  providedIn: 'root'
})
export class MockCategoryService implements ICategoryService {
  // Mock data removed - use real API instead

  getCategory(): Observable<Category[]> {
    return of([]);
  }
}
