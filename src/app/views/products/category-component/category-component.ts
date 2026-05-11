import {Component, computed, Inject, signal} from '@angular/core';
import {ProductsGridComponent} from '../ui/grid/products-grid.component';
import {ProductsSidebarComponent} from '../ui/sidebar/product-sidebar.component';
import {ProductsToolbarComponent} from '../ui/toolbar/products-toolbar.component';
import {Subscription, switchMap} from 'rxjs';
import {Product} from '../../../models/product';
import {applyFilters, buildFilterOptions, FilterState, toggle} from '../ui/filter.utils';
import {ActivatedRoute} from '@angular/router';
import {ProductService, RealProductsService} from '../../../services';

@Component({
  selector: 'app-category-component',
  imports: [
    ProductsGridComponent,
    ProductsSidebarComponent,
    ProductsToolbarComponent
  ],
  templateUrl: './category-component.html',
  styleUrl: './category-component.scss'
})
export class CategoryComponent {

  private subscription!: Subscription;

  // ── Raw data ──────────────────────────────────────────────────────────────

  categoryName = '';
  private products = signal<Product[]>([]);
  isLoading = signal(false);

  // ── UI state (signals) ────────────────────────────────────────────────────

  viewMode = signal<'grid' | 'list'>('grid');
  sidebarOpen = signal(false);

  searchQuery = signal('');
  sortOrder = signal<FilterState['sortOrder']>('default');
  activeLetter = signal<string | null>(null);

  selectedBrands = signal<string[]>([]);
  selectedTechnologies = signal<string[]>([]);
  selectedCategories = signal<string[]>([]);
  selectedApplications = signal<string[]>([]);

  // ── Computed ──────────────────────────────────────────────────────────────

  options = computed(() => buildFilterOptions(this.products()));

  filteredProducts = computed(() => applyFilters(this.products(), {
    searchQuery: this.searchQuery(),
    activeLetter: this.activeLetter(),
    selectedBrands: this.selectedBrands(),
    selectedTechnologies: this.selectedTechnologies(),
    selectedCategories: this.selectedCategories(),
    selectedApplications: this.selectedApplications(),
    sortOrder: this.sortOrder(),
  }));

  activeFiltersCount = computed(() =>
    this.selectedBrands().length +
    this.selectedTechnologies().length +
    this.selectedCategories().length +
    this.selectedApplications().length
  );

  // ─────────────────────────────────────────────────────────────────────────

  constructor(
    private route: ActivatedRoute,
    @Inject(RealProductsService) private readonly productService: ProductService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params.pipe(
      switchMap(params => {
        this.categoryName = params['slug'];
        this.resetFilters();
        this.products.set([]);
        this.isLoading.set(true);
        return this.productService.getProductsByCategoryName(this.categoryName);
      })
    ).subscribe({
      next: products => {
        this.products.set(products);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  // ── Handlers ──────────────────────────────────────────────────────────────

  onSearch(value: string): void {
    this.searchQuery.set(value);
    this.activeLetter.set(null);
  }

  onLetterChange(letter: string | null): void {
    if (letter === null || this.activeLetter() === letter) {
      this.activeLetter.set(null);
    } else {
      this.activeLetter.set(letter);
      this.searchQuery.set('');
    }
  }

  toggleBrand(brand: string): void {
    this.selectedBrands.update(v => toggle(v, brand));
  }

  toggleTechnology(tech: string): void {
    this.selectedTechnologies.update(v => toggle(v, tech));
  }

  toggleCategory(cat: string): void {
    this.selectedCategories.update(v => toggle(v, cat));
  }

  toggleApplication(app: string): void {
    this.selectedApplications.update(v => toggle(v, app));
  }

  clearAll(): void {
    this.resetFilters();
  }

  private resetFilters(): void {
    this.searchQuery.set('');
    this.activeLetter.set(null);
    this.selectedBrands.set([]);
    this.selectedTechnologies.set([]);
    this.selectedCategories.set([]);
    this.selectedApplications.set([]);
    this.sortOrder.set('default');
  }
}
