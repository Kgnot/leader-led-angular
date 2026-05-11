import { Component, signal, inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { Header } from './utils/header/header';
import { FooterComponent } from './utils/footer/footer.component';
import { SemanticSearchComponent } from './utils/semantic-search/semantic-search';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { isPlatformBrowser } from '@angular/common';
import {CartToastAddProductComponent} from './utils/cart-toast-add-product.component/cart-toast-add-product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, FooterComponent, SemanticSearchComponent,CartToastAddProductComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LeaderLedAngular');

  private router = inject(Router);
  private platformId = inject(PLATFORM_ID);

  constructor() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntilDestroyed()
    ).subscribe(() => {
      if (isPlatformBrowser(this.platformId)) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    });
  }
}
