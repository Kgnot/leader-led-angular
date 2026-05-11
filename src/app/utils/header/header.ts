import {Component, HostBinding, HostListener} from '@angular/core';
import { ShoppingCart } from './carrito-compras/shopping-cart.component';
import { SidebarCart } from '../sidebar-cart/sidebar-cart';
import { Navbar } from '../navbar/navbar';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ShoppingCart, SidebarCart, Navbar, NgOptimizedImage],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 80;
  }

  @HostBinding('class.scrolled-host')
  get isScrolledHost() { return this.isScrolled; }

}
