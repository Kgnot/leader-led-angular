import { Component } from '@angular/core';
import { CatalogCardComponent } from '../catalog-card/catalog-card.component';
import { CatalogViewerModalComponent } from '../catalog-viewer-modal/catalog-viewer-modal.component';
import { BrandsService, Brand } from '../../../services/brands/brands.service';

@Component({
  selector: 'app-catalogs-page',
  standalone: true,
  imports: [CatalogCardComponent, CatalogViewerModalComponent],
  templateUrl: './catalogs-page.component.html',
  styleUrl: './catalogs-page.component.scss'
})
export class CatalogsPageComponent {
  brands: Brand[];

  selectedBrand: Brand | null = null;
  isSidebarOpen = false;

  constructor(private brandsService: BrandsService) {
    this.brands = this.brandsService.getBrands();
  }

  openCatalog(brand: Brand) {
    this.selectedBrand = brand;
    this.isSidebarOpen = true;
  }

  closeCatalog() {
    this.isSidebarOpen = false;
    // Keep selectedBrand for now, but could set to null after animation
  }
}
