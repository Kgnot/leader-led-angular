import { Component } from '@angular/core';
import {PresentationComponent} from '../presentation/presentation.component';
import {BrandCarousel} from '../brand-carousel/brand-carousel.component';
import {MapComponent} from '../map/map.component';
import {ContextEnterpriseComponent} from '../context-enterprise/context-enterprise.component';

@Component({
  selector: 'app-home',
  imports: [PresentationComponent, BrandCarousel, MapComponent, ContextEnterpriseComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePageComponent {

}
