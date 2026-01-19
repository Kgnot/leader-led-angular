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

  getMainImage(): string {
    const mainImage = this.item.product.images?.find(img => img.isMain);
    return mainImage?.url || this.item.product.images?.[0]?.url || 'assets/placeholder.jpg';
  }

  getSpecsText(): string {
    const powerSpec = this.item.product.specifications?.find(s => s.attributeName === 'Potencia');
    const lumensSpec = this.item.product.specifications?.find(s => s.attributeName === 'Flujo Luminoso');
    const power = powerSpec ? `${powerSpec.value}${powerSpec.unit}` : '';
    const lumens = lumensSpec ? `${lumensSpec.value} ${lumensSpec.unit}` : '';
    return [power, lumens].filter(Boolean).join(' • ');
  }
}
