import {Observable} from 'rxjs';
import {Category} from '../../models/category';

export interface ICategoryService {
  getCategory(): Observable<Category[]>;
}