import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarCartService {
  private _visible = new BehaviorSubject<boolean>(false);

  visible$ = this._visible.asObservable();

  open() {
    this._visible.next(true);
  }

  close() {
    this._visible.next(false);
  }

  toggle() {
    this._visible.next(!this._visible.getValue());
  }

}
