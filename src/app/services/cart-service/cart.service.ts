import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Product} from '../../models/product';
import {BuyConcept} from '../../models/cart/buy-concept';
import {CART, ORDERS} from '../../endpoints/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items = new BehaviorSubject<BuyConcept[]>([]);
  items$ = this._items.asObservable();

  constructor(private http: HttpClient) {
  }

  addItem(product: Product) {
    const items = [...this._items.getValue()];
    const existing = items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity += 1; //Incrementa cantidad
    } else {
      items.push({product, quantity: 1}); //Nuevo producto
    }

    this._items.next(items);
  }

  removeItem(product: Product) {
    let items = [...this._items.getValue()];
    const existing = items.find(i => i.product.id === product.id);

    if (existing) {
      existing.quantity -= 1; // Resta cantidad

      if (existing.quantity <= 0) {
        // Si llega a 0, lo elimina del carrito
        items = items.filter(i => i.product.id !== product.id);
      }

      this._items.next(items);
    }
  }

  clear() {
    this._items.next([]);
  }

  getItems(): BuyConcept[] {
    return this._items.getValue();
  }

  getLength(): number {
    return this._items.getValue().length;
  }

  // API methods (for future use)
  saveCart(userId: string = 'default'): Observable<any> {
    const cart = this._items.getValue();
    return this.http.post(CART.SAVE, { userId, items: cart });
  }

  loadCart(userId: string = 'default'): Observable<BuyConcept[]> {
    return this.http.get<BuyConcept[]>(CART.GET(userId));
  }

  createOrder(orderData: any): Observable<any> {
    return this.http.post(ORDERS.CREATE, orderData);
  }

}
