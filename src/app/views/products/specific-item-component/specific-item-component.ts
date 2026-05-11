import {Component, Inject, OnInit, OnDestroy, signal, computed} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription, switchMap} from 'rxjs';
import {Product} from '../../../models/product';
import {ProductService, RealProductsService} from '../../../services';

@Component({
  selector: 'app-specific-item-component',
  imports: [],
  templateUrl: './specific-item-component.html',
  styleUrl: './specific-item-component.scss'
})
export class SpecificItemComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;

  product = signal<Product | null>(null);
  isLoading = signal(true);
  notFound = signal(false);
  activeImageIndex = signal(0);
  activeTab = signal<'specs' | 'description'>('specs');

  mainImage = computed(() => {
    const p = this.product();
    if (!p || p.images.length === 0) return null;
    return p.images[this.activeImageIndex()] ?? p.images.find(i => i.isMain) ?? p.images[0];
  });

  specs = computed(() => this.product()?.specifications ?? []);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    @Inject(RealProductsService) private readonly productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      switchMap(params => {
        const reference = params['reference'];
        this.isLoading.set(true);
        this.notFound.set(false);
        this.activeImageIndex.set(0);
        this.activeTab.set('specs');
        return this.productService.getProductByReference(reference);
      })
    ).subscribe({
      next: product => {
        if (!product) {
          this.notFound.set(true);
        } else {
          this.product.set(product);
          const main = product.images.findIndex(i => i.isMain);
          if (main > 0) this.activeImageIndex.set(main);
        }
        this.isLoading.set(false);
      },
      error: () => {
        this.notFound.set(true);
        this.isLoading.set(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  selectImage(index: number): void { this.activeImageIndex.set(index); }
  setTab(tab: 'specs' | 'description'): void { this.activeTab.set(tab); }
  goBack(): void { this.router.navigate(['/products']); }
  navigateToApplication(appName: string): void { this.router.navigate(['/products/applications', appName]); }
  navigateToCategory(slug: string): void { this.router.navigate(['/products/categories', slug]); }

  requestProduct(): void {
    const product = this.product();
    if (!product) return;
    this.router.navigate(['/contact'], {
      queryParams: { ref: product.reference, product: product.name }
    });
  }
}
