import {Routes} from '@angular/router'
import {HomePageComponent} from './home/home-page/home-page.component';
import {ContactPageComponent} from './contact/contact-page.component/contact-page.component';
import {ProductsPageComponent} from './products/products-page/products-page.component';
import {CompanyServicesPageComponent} from './company-services/company-services-page/company-services-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: 'HomePage'
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    title: 'ContactPage'
  },
  {
    path: 'products',
    component: ProductsPageComponent,
    title: 'ProductsPage'
  },
  {
    path: 'services',
    component: CompanyServicesPageComponent,
    title: 'CompanyServicesPage'
  }
];
