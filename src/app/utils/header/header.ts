import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CarritoCompras } from './carrito-compras/carrito-compras';
import { SidebarCart } from '../sidebar-cart/sidebar-cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    Navbar,
    CarritoCompras,
    SidebarCart
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  showSidebarCart = false;

  toggleSidebarCart() {
    this.showSidebarCart = !this.showSidebarCart;
  }
}
