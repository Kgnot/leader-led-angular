import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-product-image',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.scss'
})
export class ProductImageComponent {
  @Input() image!: string;
  @Input() alt: string | undefined = '';
}
