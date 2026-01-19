import {Component, inject, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SemanticSearchService } from '../../services/semantic-search/semantic-search.service';
import { ProductCard } from '../../views/products/product-card/product-card';
import { adapterProductArray } from '../../adapter/adapter-product';
import { NgOptimizedImage } from '@angular/common';
import { BlackModalComponent } from '../black-modal/black-modal.component';
import {SemanticSearchUIService} from '../../services/semantic-search-ui-service/semantic-search-uiservice';
import { RealProductsService } from '../../services';
import {ProductSpecification} from '../../models/product';

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
  private allProducts: any[] = [];

  messages: { role: 'user' | 'bot', text: string }[] = [];

  private productService = inject(RealProductsService);

  constructor(
    private semantic: SemanticSearchService,
    private semanticUI: SemanticSearchUIService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.semanticUI.isOpen$.subscribe(isOpen => {
      this.open = isOpen;
    });

    // Load all products for semantic search
    this.productService.getProducts().subscribe(products => {
      this.allProducts = products;
    });

    // Wait for WASM to be ready (only in browser)
    if (isPlatformBrowser(this.platformId) && (window as any).semanticSearchWasmReady) {
      (window as any).semanticSearchWasmReady.then(() => {
        console.log('WASM ready for semantic search');
      }).catch(() => {
        console.warn('WASM not available, using fallback search');
      });
    }
  }

  toggleChat() {
    this.semanticUI.toggle();
  }

  send() {
    if (!this.query.trim()) return;

    const userQuery = this.query;
    this.messages.push({ role: 'user', text: userQuery });
    this.query = '';

    // Check if WASM is available (only in browser)
    if (isPlatformBrowser(this.platformId) && (window as any).semanticSearchWasm && this.allProducts.length > 0) {
      // Use semantic search
      this.semantic.topN(userQuery, JSON.stringify(this.allProducts), 5)
        .then(r => {
          const mapped = r.map((m: Map<string, any>) => Object.fromEntries(m));
          this.result = adapterProductArray(mapped);
          this.messages.push({
            role: 'bot',
            text: `Encontré ${this.result.length} productos relacionados con búsqueda semántica.`
          });
        })
        .catch(() => {
          this.fallbackSearch(userQuery);
        });
    } else {
      // Fallback to simple text search
      this.fallbackSearch(userQuery);
    }
  }

  private fallbackSearch(query: string) {
    // Simple text-based search as fallback
    const results = this.allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.specifications.some((spec: ProductSpecification) =>
        spec.attributeName.toLowerCase().includes(query.toLowerCase()) ||
        spec.value.toLowerCase().includes(query.toLowerCase())
      )
    ).slice(0, 5);

    this.result = results;
    this.messages.push({
      role: 'bot',
      text: `Encontré ${results.length} productos relacionados (búsqueda básica).`
    });
  }
}
