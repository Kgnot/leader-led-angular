import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Application} from '../../models';
import {IApplicationService} from './interface-application.service';

@Injectable({
  providedIn: 'root'
})
export class MockApplicationService implements IApplicationService {
  private mockApplications: Application[] = [
    {
      id: 1, name: 'Interior', imageUrl: '/products/application/interior.webp',
      type: "application"
    },
    {
      id: 2, name: 'Exterior', imageUrl: '/products/application/exterior.webp',
      type: "application"
    },
    {
      id: 3, name: 'Industrial', imageUrl: '/products/application/industrial.webp',
      type: "application"
    }
  ];

  getApplication(): Observable<Application[]> {
    return of(this.mockApplications);
  }
}
