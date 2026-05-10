import { Component, input } from '@angular/core';
import { Product } from '../../../../models/product';
import { ProductCardComponent } from '../card/product-card.component';

@Component({
  selector: 'app-products-grid',
  imports: [ProductCardComponent],
  templateUrl: './products-grid.component.html',
  styleUrl: './products-grid.component.scss'
})
export class ProductsGridComponent {
  products = input.required<Product[]>();
  viewMode = input<'grid' | 'list'>('grid');
}
