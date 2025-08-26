import {Injectable} from '@angular/core';
import data from '../../../assets/data/category.json'
import {Category} from '../../models';
import {adapterCategoryArray} from '../../adapter/adapter-functions';

@Injectable({
  providedIn: 'root'
})
export class MockCategoryService {
  private categoryData: Category[] = adapterCategoryArray(data);

  getCategory(): Category[] {
    return this.categoryData;
  }
}
