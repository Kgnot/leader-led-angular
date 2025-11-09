import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BuyConcept} from '../../../models/cart/buy-concept';

@Component({
  selector: 'app-cart-item',
  imports: [],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
  @Input() item!: BuyConcept;
  @Output() add = new EventEmitter<void>();
  @Output() remove = new EventEmitter<void>();

  onAdd() {
    this.add.emit();
  }

  onRemove() {
    this.remove.emit();
  }

  getSubtotal(): number {
    return this.item.product.power * this.item.quantity;
  }

  getMainImage(): string {
    return this.item.product.images && this.item.product.images.length > 0
      ? this.item.product.images[0]
      : 'assets/placeholder.jpg';
  }
}
