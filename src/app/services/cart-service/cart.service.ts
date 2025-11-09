import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Product} from '../../models/product';
import {BuyConcept} from '../../models/cart/buy-concept';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _items = new BehaviorSubject<BuyConcept[]>([]);
  items$ = this._items.asObservable();

  constructor() {
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

}
