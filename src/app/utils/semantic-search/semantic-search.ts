import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SemanticSearchService } from '../../services/semantic-search/semantic-search.service';
import { ProductCard } from '../../views/products/product-card/product-card';
import { adapterProductArray } from '../../adapter/adapter-product';
import data from '../../../assets/data/inventory.json';
import { NgOptimizedImage } from '@angular/common';
import { BlackModalComponent } from '../black-modal/black-modal.component';
import {SemanticSearchUIService} from '../../services/semantic-search-ui-service/semantic-search-uiservice';

@Component({
  selector: 'app-semantic-search',
  standalone: true,
  imports: [FormsModule, ProductCard, NgOptimizedImage, BlackModalComponent],
  templateUrl: './semantic-search.html',
  styleUrls: ['./semantic-search.scss']
})
export class SemanticSearchComponent {

  open = false;
  query = '';
  result: any[] = [];

  messages: { role: 'user' | 'bot', text: string }[] = [];

  constructor(
    private semantic: SemanticSearchService,
    private semanticUI: SemanticSearchUIService
  ) {}

  ngOnInit() {
    this.semanticUI.isOpen$.subscribe(isOpen => {
      this.open = isOpen;
    });
  }

  toggleChat() {
    this.semanticUI.toggle();
  }

  send() {
    if (!this.query.trim()) return;

    const userQuery = this.query;
    this.messages.push({ role: 'user', text: userQuery });
    this.query = '';

    this.semantic.topN(userQuery, JSON.stringify(data), 5)
      .then(r => {
        const mapped = r.map((m: Map<string, any>) => Object.fromEntries(m));
        this.result = adapterProductArray(mapped);
        this.messages.push({
          role: 'bot',
          text: `Encontré ${this.result.length} productos relacionados.`
        });
      })
      .catch(() => {
        this.messages.push({ role: 'bot', text: 'Hubo un error procesando tu búsqueda.' });
      });
  }
}
