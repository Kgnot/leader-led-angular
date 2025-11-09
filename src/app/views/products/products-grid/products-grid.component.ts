import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-products-grid',
  imports: [
    ProductCard
  ],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  @Input() products: Product[] | undefined;
  @Input() loading: boolean = false;
  @Input() emptyMessage: string = 'No hay productos disponibles';
  @Output() productSelected = new EventEmitter<Product>();

  onProductSelected(product: Product) {
    this.productSelected.emit(product);
  }

  trackByProduct(index: number, product: Product): number {
    return product.id;
  }
}
