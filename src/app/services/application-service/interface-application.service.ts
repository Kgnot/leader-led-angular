import {Observable} from 'rxjs';
import {Application} from '../../models';

export interface IApplicationService {
  getApplication(): Observable<Application[]>;
}
