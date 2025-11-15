import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SemanticSearchService } from '../../services/semantic-search/semantic-search.service';
import { ProductCard } from '../../views/products/product-card/product-card';
import { adapterProductArray } from '../../adapter/adapter-product';
import data from '../../../assets/data/inventory.json';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-semantic-search',
  standalone: true,
  imports: [FormsModule, ProductCard, NgOptimizedImage],
  templateUrl: './semantic-search.html',
  styleUrls: ['./semantic-search.scss']
})
export class SemanticSearchComponent {
  open = false;
  query = '';
  result: any[] = [];

  messages: { role: 'user' | 'bot', text: string }[] = [];

  constructor(private semantic: SemanticSearchService) {}

  toggleChat() {
    this.open = !this.open;
  }

  /**
   * Testeable desde afuera si deseas hacer consultas rápidas
   */
  testTopN(q: string) {
    return this.semantic.topN(q, JSON.stringify(data), 5)
      .then(r => {
        const mapped = r.map((m: Map<string, any>) => Object.fromEntries(m));
        this.result = adapterProductArray(mapped);
        return this.result;
      })
      .catch(e => console.error('Error WASM topN:', e));
  }

  send() {
    if (!this.query.trim()) return;

    const userQuery = this.query;
    this.messages.push({ role: 'user', text: userQuery });
    this.query = '';

    this.testTopN(userQuery)
      .then(res => {
        this.messages.push({
          role: 'bot',
          text: `Encontré ${res?.length} productos relacionados.`
        });
      })
      .catch(() => {
        this.messages.push({ role: 'bot', text: 'Hubo un error procesando tu búsqueda.' });
      });
  }
}
