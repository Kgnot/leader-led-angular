import {Component, Input, signal} from '@angular/core';
import {Brand} from '../../models/brand';

@Component({
  selector: 'app-brand-item',
  imports: [],
  templateUrl: './brand-item.component.html',
  styleUrl: './brand-item.component.scss'
})
export class BrandItemComponent {
  @Input() brand: Brand = {} as Brand;
}
