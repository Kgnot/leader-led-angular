import { Component} from '@angular/core';
import { CartService } from '../../../services/cart-service/cart.service';
import {SidebarCartService} from '../../service/sidebar-cart.service';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCart {

  constructor(
    private cartService: CartService,
    private sidebarService: SidebarCartService
  ) {}

  onToggleSidebar() {
    this.sidebarService.toggle();
  }

  getLength() { return this.cartService.getLength(); }
}
