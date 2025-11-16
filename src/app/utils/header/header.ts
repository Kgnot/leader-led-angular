import { Component } from '@angular/core';
import { CarritoCompras } from './carrito-compras/carrito-compras';
import { SidebarCart } from '../sidebar-cart/sidebar-cart';
import {Navbar} from '../navbar/navbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CarritoCompras,
    SidebarCart,
    Navbar
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
