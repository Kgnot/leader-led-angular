import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-informative-category-item',
  imports: [],
  templateUrl: './informative-category-item.html',
  styleUrl: './informative-category-item.scss'
})
export class InformativeCategoryItem {

  @Input({required: true}) imgUlr:string = '';
  @Input({required: true}) titleCat:string = '';
  @Input({required: true}) description:string = '';


}
