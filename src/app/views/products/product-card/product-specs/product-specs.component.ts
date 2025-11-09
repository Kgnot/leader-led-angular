import {Component, Input} from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-product-specs',
  imports: [
    DecimalPipe
  ],
  templateUrl: './product-specs.component.html',
  styleUrl: './product-specs.component.scss'
})
export class ProductSpecsComponent {
  @Input() power?: number;
  @Input() lumens?: number;

}
