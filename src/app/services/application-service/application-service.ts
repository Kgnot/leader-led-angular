import {Injectable} from '@angular/core';
import {Observable, map, catchError, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Application} from '../../models';
import {COMMON} from '../../endpoints/endpoints';
import {ApiApplication} from '../../dto/api-application.dto';
import {adapterApplicationArray} from '../../adapter/adapter-functions';
import {IApplicationService} from './interface-application.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService implements IApplicationService {

  constructor(private http: HttpClient) {}

  getApplication(): Observable<Application[]> {
    console.log("Get: ,  ", COMMON.GET_APPLICATIONS)
    return this.http.get<ApiApplication[]>(COMMON.GET_APPLICATIONS).pipe(
      map(adapterApplicationArray),
      catchError(() => of([]))
    );
  }
}
