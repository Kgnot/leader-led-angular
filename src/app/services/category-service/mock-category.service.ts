import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from '../../models';
import {ICategoryService} from './interface-category.service';

@Injectable({
  providedIn: 'root'
})
export class MockCategoryService implements ICategoryService {
  private mockCategories: Category[] = [
    { id: 1, name: 'Panel', slug: 'panel', imageUrl: '/products/category/panel.webp' },
    { id: 2, name: 'Driver', slug: 'driver', imageUrl: '/products/category/driver.webp' },
    { id: 3, name: 'Bombillo', slug: 'bombillo', imageUrl: '/products/category/bombillo.webp' }
  ];

  getCategory(): Observable<Category[]> {
    return of(this.mockCategories);
  }
}
