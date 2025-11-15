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

      // @ts-ignore
      const wasmModule = await import('/semantic_search/semantic_search_wasm.js');

      // Inicializar con default (el __wbg_init)
      await wasmModule.default('/semantic_search/semantic_search_wasm_bg.wasm');

      // Guardar en window para acceso fácil
      window.semanticSearchWasm = wasmModule;

    })();

    return this.wasmReady;
  }

  // --- API WASM ---------------------

  async search(query: string, jsonString: string) {
    await this.initWasm();
    return window.semanticSearchWasm.find_best_items(query, jsonString);
  }

  async topN(query: string, itemsJson: string, limit: number) {
    await this.initWasm();
    return window.semanticSearchWasm.find_best_items_top_n(query, itemsJson, limit);
  }
}
