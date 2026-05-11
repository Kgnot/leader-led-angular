import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Taxonomy} from '../../../models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-taxonomy-card',
  imports: [],
  templateUrl: './taxonomy-card.component.html',
  styleUrl: './taxonomy-card.component.scss'
})
export class TaxonomyCardComponent {
  @Input() taxonomy!: Taxonomy;
  @Output() itemSelected = new EventEmitter<Taxonomy>();


  constructor(
    private router: Router
  ) {
  }

  // hacemos las rutas
  onItemClick() {
    const routes = {
      category: () => this.router.navigate(['/products/categories', this.taxonomy.name]),
      application: () => this.router.navigate(['/products/applications', this.taxonomy.name])
    };
    routes[this.taxonomy.type]();
    this.itemSelected.emit(this.taxonomy);
  }

}


