import {Component, Input} from '@angular/core';
import {BannerComponent} from '../banner/banner.component';

@Component({
  selector: 'app-presentation',
  imports: [
    BannerComponent
  ],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {

  @Input() h3Text: string = '';
  @Input({required: true}) h1Text: string = '';
  @Input() description: string = '';
  @Input() logoImgProduct: string = '';
  @Input() bannerImg: string = '';

}
