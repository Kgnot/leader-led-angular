import { Component, input, output, computed } from '@angular/core';

@Component({
  selector: 'app-products-toolbar',
  templateUrl: './products-toolbar.component.html',
  styleUrl: './products-toolbar.component.scss'
})
export class ProductsToolbarComponent {

  // ── Inputs ────────────────────────────────────────────────────────────────

  selectedBrands       = input<string[]>([]);
  selectedTechnologies = input<string[]>([]);
  selectedCategories   = input<string[]>([]);
  selectedApplications = input<string[]>([]);
  sortOrder            = input<'default' | 'az' | 'za'>('default');
  activeLetter         = input<string | null>(null);

  // ── Outputs ───────────────────────────────────────────────────────────────

  openSidebar        = output<void>();
  brandRemove        = output<string>();
  technologyRemove   = output<string>();
  categoryRemove     = output<string>();
  applicationRemove  = output<string>();
  sortChange         = output<'default' | 'az' | 'za'>();
  letterChange       = output<string | null>();

  // ── Computed ──────────────────────────────────────────────────────────────

  activeFiltersCount = computed(() =>
    this.selectedBrands().length +
    this.selectedTechnologies().length +
    this.selectedCategories().length +
    this.selectedApplications().length
  );

  readonly alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
}
