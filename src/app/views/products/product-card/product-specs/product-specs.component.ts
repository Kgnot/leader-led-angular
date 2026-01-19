import {Component, Input} from '@angular/core';
import {ProductSpecification} from '../../../../models/product';

@Component({
  selector: 'app-product-specs',
  imports: [],
  templateUrl: './product-specs.component.html',
  styleUrl: './product-specs.component.scss'
})
export class ProductSpecsComponent {
  @Input() specifications?: ProductSpecification[];

}
