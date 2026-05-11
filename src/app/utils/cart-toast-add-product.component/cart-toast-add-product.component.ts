import {Component, inject} from '@angular/core';
import {AddProductToCart} from '../../services/add-product-to-cart/add-product-to-cart';

@Component({
  selector: 'app-cart-toast-add-product',
  imports: [],
  templateUrl: './cart-toast-add-product.component.html',
  styleUrl: './cart-toast-add-product.component.scss'
})
export class CartToastAddProductComponent {
  private service = inject(AddProductToCart);

  message = this.service.message;
}
