import {Injectable} from '@angular/core';
import {Brand} from '../../models';
import jsonData from '../../../assets/data/brands.json'

@Injectable({
  providedIn: 'root'
})
export class MockBrandsService {
  private mockData: Brand[] = jsonData as Brand[];

  getBrands(): Brand[] {
    console.log("MockData: ",this.mockData)
    return this.mockData;
  }

}
