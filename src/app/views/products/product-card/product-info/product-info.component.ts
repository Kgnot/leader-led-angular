import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-info',
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  @Input() name!: string|undefined;
  @Input() reference!: string|undefined;
}
