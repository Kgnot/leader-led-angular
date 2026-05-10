import { Component, HostListener } from '@angular/core';
import { CarritoCompras } from './carrito-compras/carrito-compras';
import { SidebarCart } from '../sidebar-cart/sidebar-cart';
import { Navbar } from '../navbar/navbar';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CarritoCompras, SidebarCart, Navbar, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  showSidebarCart = false;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 80;
  }

  toggleSidebarCart() {
    this.showSidebarCart = !this.showSidebarCart;
  }
}
