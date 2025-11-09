import {Component, inject} from '@angular/core';
import {MockBrandsService} from '../../../services';
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

  private brandsService: MockBrandsService = inject(MockBrandsService);
  protected dataBrands:Brand[] = this.brandsService.getBrands();

  constructor(brandsService: MockBrandsService) {
    this.brandsService = brandsService;
  }

}
