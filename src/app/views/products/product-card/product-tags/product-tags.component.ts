import {Component, Input} from '@angular/core';
import {Technology} from '../../../../models/technologies';
import {Application} from '../../../../models';

@Component({
  selector: 'app-product-tags',
  imports: [],
  templateUrl: './product-tags.component.html',
  styleUrl: './product-tags.component.scss'
})
export class ProductTagsComponent {
  @Input() technologies?: Technology[];
  @Input() applications?: Application[];
}
