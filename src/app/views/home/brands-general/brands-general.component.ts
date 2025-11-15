import { Component } from '@angular/core';
import {BrandCarousel} from '../brand-carousel/brand-carousel.component';

@Component({
  selector: 'app-brands-general',
  imports: [
    BrandCarousel
  ],
  templateUrl: './brands-general.component.html',
  styleUrl: './brands-general.component.scss'
})
export class BrandsGeneralComponent {

}
