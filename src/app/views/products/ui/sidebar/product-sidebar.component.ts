import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-products-sidebar',
  templateUrl: './products-sidebar.component.html',
  styleUrl: './products-sidebar.component.scss'
})
export class ProductsSidebarComponent {

  // ── Inputs

  isOpen         = input<boolean>(false);

  brands         = input<string[]>([]);
  technologies   = input<string[]>([]);
  categories     = input<string[]>([]);
  applications   = input<string[]>([]);

  selectedBrands        = input<string[]>([]);
  selectedTechnologies  = input<string[]>([]);
  selectedCategories    = input<string[]>([]);
  selectedApplications  = input<string[]>([]);

  // ── Outputs

  close               = output<void>();
  brandChange         = output<string>();
  technologyChange    = output<string>();
  categoryChange      = output<string>();
  applicationChange   = output<string>();

  // ── Internal UI state

  sections: Record<string, boolean> = {
    brand: true,
    tech: true,
    category: true,
    application: false,
  };

  toggleSection(key: string): void {
    this.sections[key] = !this.sections[key];
  }
}
