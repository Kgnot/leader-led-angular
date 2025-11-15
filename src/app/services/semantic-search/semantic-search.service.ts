import { Injectable } from '@angular/core';

declare global {
  interface Window {
    semanticSearchWasmReady: Promise<void>;
    semanticSearchWasm: any;
  }
}

@Injectable({ providedIn: 'root' })
export class SemanticSearchService {

  private async ensureReady() {
    if (typeof window === 'undefined') return; // SSR safe
    await window.semanticSearchWasmReady;
  }

  async search(query: string, jsonString: string) {
    await this.ensureReady();
    return window.semanticSearchWasm.find_best_items(query, jsonString);
  }

  async topN(query: string, itemsJson: string, limit: number) {
    await this.ensureReady();
    return window.semanticSearchWasm.find_best_items_top_n(
      query,
      itemsJson,
      limit
    );
  }
}
