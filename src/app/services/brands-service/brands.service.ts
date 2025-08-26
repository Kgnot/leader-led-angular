import {inject, Injectable} from '@angular/core';
import {Brand} from '../../models/brand';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  private dataBrand: Brand[] = [] as Brand[];
  private http: HttpClient = inject(HttpClient);




}
