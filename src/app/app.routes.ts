import {Routes} from '@angular/router'


// Esto me dice que solo carga las paginas cuando se necesitan ya que estoy viendo un tema de rendimiento bajo
export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home/home-page/home-page.component')
        .then(m => m.HomePageComponent),
    title: 'LeaderLed - Iluminación LED Bogotá | Soluciones Personalizadas +15 Años'
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./views/contact/contact-page/contact-page.component')
        .then(m => m.ContactPageComponent),
    title: 'ContactPage'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./views/products/products-page/products-page.component')
        .then(m => m.ProductsPageComponent),
    title: 'ProductsPage'
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./views/company-services/company-services-page/company-services-page.component')
        .then(m => m.CompanyServicesPageComponent),
    title: 'CompanyServicesPage'
  },
  {
    path: 'catalogs',
    loadComponent: () =>
      import('./views/catalogs/catalogs-page/catalogs-page.component')
        .then(m => m.CatalogsPageComponent),
    title: 'Catálogos de Marcas'
  }
];
