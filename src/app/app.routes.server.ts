import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'services',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'catalogs',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/applications/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'products/categories/:slug',
    renderMode: RenderMode.Server
  },
  {
    path: 'products/:slug',
    renderMode: RenderMode.Server
  }
];
