import { Injectable } from '@angular/core';

export interface Brand {
  id: string;
  name: string;
  description: string;
  image: string;
  pdfUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  private brands: Brand[] = [
    {
      id: 'tecnolite',
      name: 'Tecnolite',
      description: 'Especialistas en iluminación LED de alta calidad para aplicaciones comerciales e industriales.',
      image: '/catalog/tecnolite.png',
      pdfUrl: '/catalog/pdf/tecnolite.pdf'
    },
    {
      id: 'inventronics',
      name: 'Inventronics',
      description: 'Drivers LED avanzados para soluciones de iluminación eficientes y duraderas.',
      image: '/catalog/inventronics.png',
      pdfUrl: '/catalog/pdf/inventronics.pdf'
    },
    {
      id: 'roy-alpha',
      name: 'Roy Alpha',
      description: 'Productos innovadores para control y gestión de sistemas de iluminación.',
      image: '/catalog/royAlpha.png',
      pdfUrl: '/catalog/pdf/royAlpha.pdf'
    }
  ];

  getBrands(): Brand[] {
    return this.brands;
  }

  getBrandById(id: string): Brand | undefined {
    return this.brands.find(brand => brand.id === id);
  }
}
