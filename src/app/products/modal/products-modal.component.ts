import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BlackModalComponent} from '../../utils/black-modal/black-modal.component';
import {Product} from '../../models/product';
import {ProductsGridComponent} from '../products-grid/products-grid.component';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-products-modal',
  imports: [
    BlackModalComponent,
    ProductsGridComponent,
    JsonPipe
  ],
  templateUrl: './products-modal.component.html',
  styleUrl: './products-modal.component.scss'
})
export class ProductsModalComponent {
  @Input() products: Product[] | undefined;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  onProductSelected($event: Product) {
    console.log($event)
  }
}
