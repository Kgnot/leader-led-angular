import {Component, input} from '@angular/core';
import {Product} from '../../../../models/product';
import {CartService} from '../../../../services/cart-service/cart.service';
import {AddProductToCart} from '../../../../services/add-product-to-cart/add-product-to-cart';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  product = input.required<Product>();

  constructor(
    private router:Router,
    private cartService: CartService,
    private addProductToCart: AddProductToCart
  ) {
  }

  addToCart(): void {
    const product = this.product();

    this.cartService.addItem(product);
    this.addProductToCart.show(product.name);
  }

  goToDetail(): void {
    this.router.navigate(['/products', this.product().reference]).then(r => console.error(r));
  }


}
