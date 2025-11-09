import {Component, inject, OnInit} from '@angular/core';
import {PresentationComponent} from '../../../utils/presentation/presentation.component';
import {ListServiceCard} from '../list-service-card/list-service-card';
import {Meta, Title} from '@angular/platform-browser';
import {SeoSchemaService} from '../../../services/SEO/seo-schema-service';

@Component({
  selector: 'app-company-services-page',
  imports: [
    PresentationComponent,
    ListServiceCard
  ],
  templateUrl: './company-services-page.component.html',
  styleUrl: './company-services-page.component.scss'
})
export class CompanyServicesPageComponent implements OnInit {

  private meta = inject(Meta);
  private title = inject(Title);


  constructor(private seoSchema:SeoSchemaService) {
  }

  ngOnInit() {
    this.title.setTitle('Servicios LED Bogotá | Programación Drivers DALI, Soluciones Personalizadas');

    this.meta.updateTag({
      name: 'description',
      content: 'Servicios especializados en iluminación LED: programación drivers 0-10V y DALI, diseño de luminarias personalizadas, consultoría técnica. +15 años de experiencia en Bogotá.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'programación drivers DALI, drivers 0-10V, luminarias personalizadas, consultoría iluminación LED, servicios LED Bogotá, Mean Well, Lutron'
    });

    // Service Schema
    this.addServiceSchema();
  }

  private addServiceSchema() {
    this.seoSchema.addJsonLd({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Servicios de Iluminación LED LeaderLed",
      "description": "Programación de drivers, diseño de luminarias personalizadas y consultoría técnica",
      "provider": {
        "@type": "LocalBusiness",
        "name": "LeaderLed",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bogotá",
          "addressCountry": "CO"
        }
      },
      "serviceType": [
        "Programación drivers DALI",
        "Programación drivers 0-10V",
        "Diseño luminarias personalizadas",
        "Consultoría técnica iluminación"
      ]
    })
  }
}
