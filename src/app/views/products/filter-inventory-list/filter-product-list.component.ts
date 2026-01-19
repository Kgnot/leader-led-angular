import {Component, HostListener, inject, signal, WritableSignal} from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService, RealProductsService} from '../../../services';
import {ProductCard} from '../product-card/product-card';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-filter-inventory-list',
  imports: [
    ProductCard,
    FormsModule,
  ],
  templateUrl: './filter-product-list.component.html',
  styleUrl: './filter-product-list.component.scss',

})
export class FilterProductListComponent {


  filterProductList: WritableSignal<Product[]> = signal<Product[]>([]);
  isModalOpen = signal(false);
  private productService: ProductService;

  constructor() {
    this.productService = inject(RealProductsService);
  }

  onSearchChange(event: Event): void {
    if (!this.isModalOpen()) this.openModal();

    const value = (event.target as HTMLInputElement).value;
    this.productService.getProductsByLetter(value).subscribe(products => {
      this.filterProductList.set(products);
    });
  }

  openModal() {
    this.isModalOpen.set(true);
    document.body.classList.add('no-scroll');
    document.documentElement.classList.add('no-scroll');
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.filterProductList.set([]);
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.closeModal();
  }
}
