import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ORDERS} from '../../endpoints/endpoints';

export interface Order {
  id: string;
  userId: string;
  items: any[];
  total: number;
  status: string;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {}

  createOrder(orderData: any): Observable<Order> {
    return this.http.post<Order>(ORDERS.CREATE, orderData);
  }

  getUserOrders(userId: string): Observable<Order[]> {
    return this.http.get<Order[]>(ORDERS.GET_ALL(userId));
  }

  getOrderById(id: string): Observable<Order> {
    return this.http.get<Order>(ORDERS.GET_ONE(id));
  }
}