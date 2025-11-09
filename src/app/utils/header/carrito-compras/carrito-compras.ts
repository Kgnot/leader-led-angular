import {Component} from '@angular/core';
import {CartService} from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-carrito-compras',
  imports: [
  ],
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.scss'
})
export class CarritoCompras {

  constructor(
    private cartService: CartService
  ) {
  }

  getLength(): number {
    return this.cartService.getLength();
  }

}
