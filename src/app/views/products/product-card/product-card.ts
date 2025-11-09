import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [
    DecimalPipe
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product: Product | undefined;
  @Output() productSelected = new EventEmitter<Product>();

  getFirstImage(): string {
    console.log(this.product?.images)
    return this.product?.images?.[0] || '/assets/images/placeholder.jpg';
  }

}
