/* tslint:disable */
/* eslint-disable */
export function find_best_items_direct_top_n(query: string, js_items: any, limit: number): any;
/**
 * Función principal: busca productos relevantes dado un query
 */
export function find_best_items(query: string, json_items: string): any;
export function find_best_items_top_n(query: string, json_items: string, limit: number): any;
export function find_best_item_ids(query: string, json_items: string): any;
/**
 * Función optimizada que acepta objetos JS directamente
 */
export function find_best_items_direct(query: string, js_items: any): any;
export function get_version(): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly find_best_item_ids: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly find_best_items: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly find_best_items_direct: (a: number, b: number, c: number, d: number) => void;
  readonly find_best_items_direct_top_n: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly find_best_items_top_n: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly get_version: (a: number) => void;
  readonly __wbindgen_export: (a: number, b: number) => number;
  readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export3: (a: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_export4: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
