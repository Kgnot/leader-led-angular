import { Product } from '../../../models/product';

export interface FilterState {
  searchQuery: string;
  activeLetter: string | null;
  selectedBrands: string[];
  selectedTechnologies: string[];
  selectedCategories: string[];
  selectedApplications: string[];
  sortOrder: 'default' | 'az' | 'za';
}

export const EMPTY_FILTER_STATE: FilterState = {
  searchQuery: '',
  activeLetter: null,
  selectedBrands: [],
  selectedTechnologies: [],
  selectedCategories: [],
  selectedApplications: [],
  sortOrder: 'default',
};

export function applyFilters(products: Product[], state: FilterState): Product[] {
  let result = [...products];

  if (state.searchQuery.trim()) {
    const q = state.searchQuery.trim().toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.reference.toLowerCase().includes(q) ||
      p.description?.toLowerCase().includes(q)
    );
  }

  if (state.activeLetter) {
    result = result.filter(p =>
      p.name.toUpperCase().startsWith(state.activeLetter!)
    );
  }

  if (state.selectedBrands.length > 0) {
    result = result.filter(p =>
      p.brand?.name && state.selectedBrands.includes(p.brand.name)
    );
  }

  if (state.selectedTechnologies.length > 0) {
    result = result.filter(p =>
      p.technologies.some(t => state.selectedTechnologies.includes(t.name))
    );
  }

  if (state.selectedCategories.length > 0) {
    result = result.filter(p =>
      p.categories.some(c => state.selectedCategories.includes(c.name))
    );
  }

  if (state.selectedApplications.length > 0) {
    result = result.filter(p =>
      p.applications.some(a => state.selectedApplications.includes(a.name))
    );
  }

  if (state.sortOrder === 'az') {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (state.sortOrder === 'za') {
    result.sort((a, b) => b.name.localeCompare(a.name));
  }

  return result;
}

export function buildFilterOptions(products: Product[]) {
  const brands = new Set<string>();
  const technologies = new Set<string>();
  const categories = new Set<string>();
  const applications = new Set<string>();

  for (const p of products) {
    if (p.brand?.name) brands.add(p.brand.name);
    p.technologies.forEach(t => technologies.add(t.name));
    p.categories.forEach(c => categories.add(c.name));
    p.applications.forEach(a => applications.add(a.name));
  }

  return {
    brands: [...brands].sort(),
    technologies: [...technologies].sort(),
    categories: [...categories].sort(),
    applications: [...applications].sort(),
  };
}

export function toggle(arr: string[], value: string): string[] {
  return arr.includes(value) ? arr.filter(v => v !== value) : [...arr, value];
}
