import {Component, inject, OnInit, signal} from '@angular/core';
import {SectionSelectorComponent} from '../section-selector/section-selector.component';
import {Application, Category, SectionType} from '../../models';
import {ItemsGridComponent} from '../items-grid/items-grid.component';
import {PresentationComponent} from '../../utils/presentation/presentation.component';
import {ProductsModalComponent} from '../modal/products-modal.component';
import {Product} from '../../models/product';
import {
  MockProductService,
  RealProductsService,
  ProductService,
  ApplicationService,
  CategoryService,
  MockApplicationService,
  MockCategoryService
} from '../../services';

@Component({
  selector: 'app-products-page',
  imports: [
    SectionSelectorComponent,
    ItemsGridComponent,
    PresentationComponent,
    ProductsModalComponent
  ],
  providers: [
    {provide: ApplicationService, useClass: MockApplicationService}, //  use the mock service
    {provide: CategoryService, useClass: MockCategoryService}, // use the mock service
    {provide: RealProductsService, useClass: MockProductService}
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent implements OnInit {
  // inject both services to use:
  private applicationService: ApplicationService;
  private categoryService: CategoryService;
  private productService: ProductService;
  //we have the current section
  protected currentSection: SectionType = SectionType.APPLICATION;
  protected applications: Application[] = [];
  protected categories: Category[] = [];
  protected selectedItem: Application | Category | null = null;
  protected isLoading = false;
  //isModalOpen:
  protected isModalOpen: boolean = false
  //products:
  protected products = signal<Product[]>([] as Product[]);

  constructor() {
    this.applicationService = inject(ApplicationService);
    this.categoryService = inject(CategoryService);
    this.productService = inject(RealProductsService)
  }

  private loadData() {
    this.isLoading = true;
    this.applications = this.applicationService.getApplication();
    this.categories = this.categoryService.getCategory();
  }

  ngOnInit(): void {
    this.loadData();
  }


  onSectionChanged(section: SectionType) {
    this.currentSection = section;
    this.selectedItem = null;
  }


  getCurrentItems() {
    return this.currentSection === SectionType.APPLICATION
      ? this.applications
      : this.categories;
  }

  onItemSelected(item: Application | Category) {
    this.selectedItem = item;
    //this one will be activated a modal with a lot of products which assert with the application or category selected
    if (this.currentSection === SectionType.APPLICATION) {
      this.products.set(this.productService.getProductsByApplication(item.id));
      console.log(this.products())
    } else {
      this.products.set(this.productService.getProductsByCategory(item.id))
      console.log(this.products())

    }
    this.openModal();
  }


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

}
