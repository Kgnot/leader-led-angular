import {Component, inject, OnInit, signal} from '@angular/core';
import {SectionSelectorComponent} from '../section-selector/section-selector.component';
import {Application, Category, SectionType} from '../../../models';
import {ItemsGridComponent} from '../items-grid/items-grid.component';
import {PresentationComponent} from '../../../utils/presentation/presentation.component';
import {ProductsModalComponent} from '../modal/products-modal.component';
import {Product} from '../../../models/product';
import {ApplicationService, CategoryService, ProductService, RealProductsService} from '../../../services';
import {Meta, Title} from '@angular/platform-browser';
import {SeoSchemaService} from '../../../services/SEO/seo-schema-service';
import {ReactiveFormsModule} from '@angular/forms';
import {FilterProductListComponent} from '../filter-inventory-list/filter-product-list.component';
import {forkJoin} from 'rxjs';
import {finalize} from 'rxjs/operators';


@Component({
  selector: 'app-products-page',
  imports: [
    SectionSelectorComponent,
    ItemsGridComponent,
    PresentationComponent,
    ProductsModalComponent,
    ReactiveFormsModule,
    FilterProductListComponent,
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {
  // SEO
  private meta = inject(Meta);
  private title = inject(Title);

  // inject both services to use:
  private applicationService: ApplicationService;
  private categoryService: CategoryService;
  private productService: ProductService;

  //we have the current section
  protected currentSection: SectionType = SectionType.APPLICATION;
  protected applications = signal<Application[]>([]);
  protected categories = signal<Category[]>([]);
  protected selectedItem: Application | Category | null = null;
  protected isLoading = signal(true);
  //isModalOpen:
  protected isModalOpen: boolean = false
  protected isLoadingProducts: boolean = false;
  //products:
  protected products = signal<Product[]>([]);

  constructor(
    private seoSchema: SeoSchemaService
  ) {
    this.applicationService = inject(ApplicationService);
    this.categoryService = inject(CategoryService);
    this.productService = inject(RealProductsService)
  }

  private loadData() {
    console.log('🔄 Iniciando carga de datos...');
    this.isLoading.set(true);

    forkJoin({
      applications: this.applicationService.getApplication(),
      categories: this.categoryService.getCategory()
    }).pipe(
      finalize(() => {
        this.isLoading.set(false);
      })
    ).subscribe({
      next: (result) => {
        this.applications.set(result.applications);
        this.categories.set(result.categories);
        console.log('Applications:', this.applications());
        console.log('Categories:', this.categories());
      },
      error: (error) => {
        console.error("Error al cargar los datos - ",error)
      }
    });
  }

  ngOnInit(): void {
    this.loadData();

    // SEO
    this.title.setTitle('Productos LED Bogotá | Paneles, Drivers, Luminarias - LeaderLed');

    this.meta.updateTag({
      name: 'description',
      content: 'Catálogo completo de productos LED: paneles, drivers, bombillos, spots, plafones. Aplicaciones para oficinas, almacenes, exteriores. Marcas Tecnolite, Mean Well, Lutron.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'paneles LED, drivers LED, bombillos LED, spots LED, plafones LED, luminarias comerciales, programación DALI, Tecnolite Bogotá, Mean Well Colombia'
    });

    // Product Schema
    this.addProductCatalogSchema();
  }

  //seo:
  private addProductCatalogSchema() {
    this.productService.getTotalProducts().subscribe(total => {
      this.productService.getProducts().subscribe(products => {
        this.seoSchema.addJsonLd({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Catálogo Productos LED LeaderLed",
          "description": "Productos de iluminación LED para aplicaciones comerciales, residenciales e industriales",
          "numberOfItems": total,
          "itemListElement": products
        });
      });
    });
  }

  onSectionChanged(section: SectionType) {
    this.currentSection = section;
    this.selectedItem = null;
  }

  getCurrentItems() {
    return this.currentSection === SectionType.APPLICATION
      ? this.applications()
      : this.categories();
  }

  onItemSelected(item: Application | Category) {
    this.selectedItem = item;
    this.isLoadingProducts = true;
    this.openModal();

    if (this.currentSection === SectionType.APPLICATION) {
      this.productService.getProductsByApplication(item.id).subscribe({
        next: (products) => {
          this.products.set(products);
          this.isLoadingProducts = false;
        },
        error: (error) => {
          this.isLoadingProducts = false;
        }
      });
    } else {
      this.productService.getProductsByCategory(item.id).subscribe({
        next: (products) => {
          this.products.set(products);
          this.isLoadingProducts = false;
        },
        error: (error) => {
          this.isLoadingProducts = false;
        }
      });
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.isLoadingProducts = false;
    this.products.set([]);
  }
}
