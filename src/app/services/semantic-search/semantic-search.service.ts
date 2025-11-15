import { Injectable } from '@angular/core';

declare global {
  interface Window {
    semanticSearchWasm: any;
  }
}

@Injectable({ providedIn: 'root' })
export class SemanticSearchService {

  private wasmReady: Promise<void> | null = null;

  private initWasm(): Promise<void> {
    if (this.wasmReady) return this.wasmReady;

    this.wasmReady = (async () => {

      // Ignorar resolución del import en build
      // @ts-ignore
      const wasmModule = await import(/* @vite-ignore */ '/wasm/semantic_search_wasm.js');
      await wasmModule.default('/wasm/semantic_search_wasm_bg.wasm');

      window.semanticSearchWasm = wasmModule;

    })();

    return this.wasmReady;
  }

  // --- API WASM ---------------------

  async search(query: string, jsonString: string) {
    if (typeof window === 'undefined') return;
    await this.initWasm();
    return window.semanticSearchWasm.find_best_items(query, jsonString);
  }

  async topN(query: string, itemsJson: string, limit: number) {
    if (typeof window === 'undefined') return;
    await this.initWasm();
    return window.semanticSearchWasm.find_best_items_top_n(
      query,
      itemsJson,
      limit
    );
  }
}
