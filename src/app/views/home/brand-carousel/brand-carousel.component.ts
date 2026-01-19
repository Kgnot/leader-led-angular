import {Component, inject, signal} from '@angular/core';
import {BrandsService} from '../../../services';
import {Brand} from '../../../models';
import {BrandItemComponent} from '../brand-item/brand-item.component';

@Component({
  selector: 'app-brand-carousel',
  imports: [
    BrandItemComponent
  ],
  templateUrl: './brand-carousel.component.html',
  styleUrl: './brand-carousel.component.scss'
})
export class BrandCarousel {

  private brandsService: BrandsService = inject(BrandsService);
  protected dataBrands = signal<Brand[]>([]);

  constructor(brandsService: BrandsService) {
    this.brandsService = brandsService;
  }

  private loadBrands() {
    this.brandsService.getBrands().subscribe(brands => {
      this.dataBrands.set(brands);
    });
  }
}
