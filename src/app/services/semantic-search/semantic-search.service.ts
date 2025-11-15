import { Injectable } from '@angular/core';

import initWasm, {
  find_best_items,
  find_best_items_direct,
  find_best_items_direct_top_n, find_best_items_top_n
} from '../../../assets/pkg/semantic_search_wasm';
import {Product} from '../../models/product';



@Injectable({ providedIn: 'root' })
export class SemanticSearchService {

  private wasmReady = initWasm('/assets/pkg/semantic_search_wasm_bg.wasm');


  async search(query: string, jsonString: string) {
    await initWasm();
    return find_best_items(query, jsonString);
  }

  async topN(query:string, items:string, limit:number){ // el items es un json
    await this.wasmReady;
    return find_best_items_top_n(query,items,limit);
  }

}
