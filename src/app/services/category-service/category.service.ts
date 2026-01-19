import {Injectable} from '@angular/core';
import {Observable, map, catchError, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Category} from '../../models';
import {COMMON} from '../../endpoints/endpoints';
import {ApiCategory} from '../../dto/api-category.dto';
import {adapterCategoryArray} from '../../adapter/adapter-functions';
import {ICategoryService} from './interface-category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements ICategoryService {

  constructor(private http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get<ApiCategory[]>(COMMON.GET_CATEGORIES).pipe(
      map(adapterCategoryArray),
      catchError(() => of([]))
    );
  }
}
