import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-image',
  imports: [

  ],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent {
  @Input() image!: string;
  @Input() alt: string | undefined = '';
}
