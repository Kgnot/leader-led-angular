import {Injectable} from '@angular/core';
import {Application} from '../../models';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {


  getApplication(): Application[] {
    return [] as Application[];
  }
}
