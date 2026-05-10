import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Application, Category, Taxonomy} from '../../../models';
import {TaxonomyCardComponent} from '../taxonomy-card/taxonomy-card.component';

@Component({
  selector: 'app-taxonomy-grid',
  imports: [
    TaxonomyCardComponent
  ],
  templateUrl: './taxonomy-grid.component.html',
  styleUrl: './taxonomy-grid.component.scss'
})
export class TaxonomyGridComponent {

  @Input() items: Taxonomy[] = [];
  @Output() itemSelected = new EventEmitter<Application | Category>();

  onItemSelected(item: Application | Category) {
    this.itemSelected.emit(item);
  }


}
