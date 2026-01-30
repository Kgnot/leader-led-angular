# Semantic Search WASM

Motor de búsqueda semántica en Rust compilado a WebAssembly para búsqueda offline de productos.

## 🛠️ Compilación

### Prerrequisitos

```bash
# Instalar Rust
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Instalar wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh
```

### Build para Producción

```bash
# Build optimizado
wasm-pack build --target web --release

# Build con optimizaciones máximas
wasm-pack build --target web --release -- -Z build-std=std,panic_abort -Z build-std-features=panic_immediate_abort
```

### Build para Desarrollo

```bash
wasm-pack build --target web --dev
```

## 📦 Salida

Los archivos generados estarán en `pkg/`:

- `semantic_search_wasm_bg.wasm` - Binario WASM
- `semantic_search_wasm.js` - Wrapper JS
- `semantic_search_wasm.d.ts` - Definiciones TypeScript

## 🧪 Tests

```bash
# Tests en Rust
cargo test

# Tests en navegador
wasm-pack test --headless --chrome
```

## 🎯 Uso desde TypeScript/Angular

```typescript
import init, { find_best_items } from './pkg/semantic_search_wasm';

// Inicializar WASM
await init();

// Buscar productos
const products = JSON.stringify([
  /* array de productos */
]);
const results = find_best_items('panel led oficina', products);

// console.log(results);
```

## ⚡ Optimizaciones

### Tamaño del binario

- Build release: ~150-200 KB
- Con `wasm-opt`: ~100-150 KB
- Con compresión gzip: ~40-60 KB

### Performance

- Búsqueda en 1000 productos: < 5ms
- Búsqueda en 10000 productos: < 50ms

## 🔧 Configuración adicional

### Optimizar con wasm-opt

```bash
# Instalar binaryen
npm install -g binaryen

# Optimizar después del build
wasm-opt -Oz -o pkg/semantic_search_wasm_bg_opt.wasm pkg/semantic_search_wasm_bg.wasm
```
