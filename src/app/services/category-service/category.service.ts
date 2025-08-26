import {Injectable} from '@angular/core';
import {Category} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  getCategory(): Category[] {
    return [] as Category[];
  }
}
