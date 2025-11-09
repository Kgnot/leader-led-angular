import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit, OnDestroy } from '@angular/core';
import { BuyConcept } from '../../models/cart/buy-concept';
import { Product } from '../../models/product';
import { CartService } from '../../services/cart-service/cart.service';
import { Observable } from 'rxjs';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sidebar-cart',
  standalone: true,
  templateUrl: './sidebar-cart.html',
  imports: [
    CartItemComponent,
    AsyncPipe
  ],
  styleUrl: './sidebar-cart.scss'
})
export class SidebarCart implements OnInit, OnChanges, OnDestroy {
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Output() consult = new EventEmitter<void>();

  items$!: Observable<BuyConcept[]>;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.items$ = this.cartService.items$;
    this.toggleBodyScroll(this.visible);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      this.toggleBodyScroll(this.visible);
    }
  }

  ngOnDestroy(): void {
    // por si se destruye con el sidebar abierto
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(disable: boolean) {
    const body = document.body;
    if (disable) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  closeSidebar() {
    this.close.emit();
  }

  onAddItem(product: Product) {
    this.cartService.addItem(product);
  }

  onRemoveItem(product: Product) {
    this.cartService.removeItem(product);
  }

  getTotalItems(items: BuyConcept[]): number {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  onConsult() {
    this.consult.emit();
  }
}
