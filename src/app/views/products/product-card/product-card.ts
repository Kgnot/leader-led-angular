import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {CartService} from '../../../services/cart-service/cart.service';
import {ProductImageComponent} from './product-image/product-image.component';
import {ProductInfoComponent} from './product-info/product-info.component';
import {ProductSpecsComponent} from './product-specs/product-specs.component';
import {ProductTagsComponent} from './product-tags/product-tags.component';

@Component({
  selector: 'app-product-card',
  imports: [
    ProductImageComponent,
    ProductInfoComponent,
    ProductSpecsComponent,
    ProductTagsComponent,
    ProductInfoComponent
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  @Input() product: Product | undefined;
  @Output() productSelected = new EventEmitter<Product>();
  // primero nos suscribimos

  constructor(
    private cartService: CartService
  ) {
  }

  addToCart() {
    this.cartService.addItem(this.product!);
  }


  getFirstImage(): string {
    console.log(this.product?.images)
    return this.product?.images?.[0] || '/assets/images/placeholder.jpg';
  }

}
