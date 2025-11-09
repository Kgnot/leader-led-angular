import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Application, Category} from '../../../models';

@Component({
  selector: 'app-item-card',
  imports: [],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss'
})
export class ItemCardComponent {
  @Input() item!: Application | Category;
  @Output() itemSelected = new EventEmitter<Application | Category>();

  onItemClick() {
    this.itemSelected.emit(this.item);
  }

}


