import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brand } from '../../../services/brands/brands.service';

@Component({
  selector: 'app-catalog-card',
  standalone: true,
  templateUrl: './catalog-card.component.html',
  styleUrl: './catalog-card.component.scss'
})
export class CatalogCardComponent {
  @Input() brand!: Brand;
  @Output() openCatalog = new EventEmitter<Brand>();

  onClick() {
    this.openCatalog.emit(this.brand);
  }
}