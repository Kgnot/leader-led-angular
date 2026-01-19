import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Application} from '../../models';
import {IApplicationService} from './interface-application.service';

@Injectable({
  providedIn: 'root'
})
export class MockApplicationService implements IApplicationService {
  // Mock data removed - use real API instead

  getApplication(): Observable<Application[]> {
    return of([]);
  }
}
