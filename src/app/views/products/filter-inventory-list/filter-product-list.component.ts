import {Component, HostListener, inject, signal, WritableSignal} from '@angular/core';
import {Product} from '../../../models/product';
import {MockProductService, ProductService, RealProductsService} from '../../../services';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-filter-inventory-list',
  imports: [
    ProductCard
  ],
  templateUrl: './filter-product-list.component.html',
  styleUrl: './filter-product-list.component.scss',
  providers: [
    {provide: RealProductsService, useClass: MockProductService}
  ]
})
export class FilterProductListComponent {


  filterProductList: WritableSignal<Product[]> = signal<Product[]>([]);
  isModalOpen = signal(false);
  private productService: ProductService;

  constructor() {
    this.productService = inject(RealProductsService);
  }

  onSearchChange(event: Event): void {
    if (!this.isModalOpen()) this.isModalOpen.set(true);
    const value:string = (event.target as HTMLInputElement).value;
    const products: Product[] = this.productService.getProductsByLetter(value);
    this.filterProductList.set(products);
  }

  //Para cerrar con el escape jeje
  @HostListener('document:keydown.escape')
  closeModal() {
    this.isModalOpen.set(false);
  }


  protected readonly HTMLInputElement = HTMLInputElement;
}
