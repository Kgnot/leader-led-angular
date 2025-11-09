import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../services/cart-service/cart.service';

@Component({
  selector: 'app-carrito-compras',
  standalone: true,
  templateUrl: './carrito-compras.html',
  styleUrl: './carrito-compras.scss'
})
export class CarritoCompras {
  @Input() viewSidebarCart: boolean = false;
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  getLength(): number {
    return this.cartService.getLength();
  }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
