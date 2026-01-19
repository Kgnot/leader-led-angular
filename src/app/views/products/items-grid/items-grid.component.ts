import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Application, Category} from '../../../models';
import {ItemCardComponent} from '../item-card/item-card.component';

@Component({
  selector: 'app-items-grid',
  imports: [
    ItemCardComponent
  ],
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.scss'
})
export class ItemsGridComponent {

  @Input() items: Application[] | Category[] = [];
  @Output() itemSelected = new EventEmitter<Application | Category>();

  onItemSelected(item: Application | Category) {
    this.itemSelected.emit(item);
  }


}
