import {Injectable} from '@angular/core';
import data from '../../../assets/data/application_type.json'
import {Application} from '../../models';
import {adapterApplicationArray} from '../../adapter/adapter-functions';

@Injectable({
  providedIn: 'root'
})
export class MockApplicationService {
  private applicationData: Application[] = adapterApplicationArray(data);

  getApplication(): Application[] {
    return this.applicationData;
  }


}
