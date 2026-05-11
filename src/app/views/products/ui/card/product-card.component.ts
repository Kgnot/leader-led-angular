import {Component, input} from '@angular/core';
import {Product} from '../../../../models/product';
import {CartService} from '../../../../services/cart-service/cart.service';
import {AddProductToCart} from '../../../../services/add-product-to-cart/add-product-to-cart';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();

  constructor(
    private cartService: CartService,
    private addProductToCart: AddProductToCart
  ) {}

  addToCart(): void {
    const product = this.product();

    this.cartService.addItem(product);
    this.addProductToCart.show(product.name);
  }

}
