import {Component, inject, OnInit} from '@angular/core';
import {MapComponent} from '../map/map.component';
import {ContextEnterpriseComponent} from '../context-enterprise/context-enterprise.component';
import {Meta, Title} from '@angular/platform-browser';
import {SeoSchemaService} from '../../../services/SEO/seo-schema-service';
import {PrincipalBannerComponent} from '../principal-banner/principal-banner.component';
import {BrandCarousel} from '../brand-carousel/brand-carousel.component';
import {InformativeCategoryItem} from '../informative-category-item/informative-category-item';
import {BannerIotComponent} from '../banner-iot/banner-iot.component';

@Component({
  selector: 'app-home',
  imports: [MapComponent, ContextEnterpriseComponent, PrincipalBannerComponent, BrandCarousel, InformativeCategoryItem, BannerIotComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomePageComponent implements OnInit {

  private meta = inject(Meta)
  private title = inject(Title)

  constructor(private seoSchema: SeoSchemaService) {
  }


  ngOnInit() {
    this.title.setTitle('LeaderLed - Iluminación LED Bogotá | Soluciones Personalizadas +15 Años');
    this.meta.updateTag({
      name: 'description',
      content: 'LeaderLed: Distribuidor de iluminación LED en Bogotá. Paneles, drivers, programación DALI. Soluciones personalizadas para oficinas, almacenes y exteriores. +15 años de experiencia.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'iluminación LED Bogotá, drivers LED, programación DALI, paneles LED, luminarias comerciales, iluminación residencial, LeaderLed'
    });

    this.meta.updateTag({property: 'og:title', content: 'LeaderLed - Especialistas en Iluminación LED Bogotá'});
    this.meta.updateTag({
      property: 'og:description',
      content: 'Soluciones personalizadas en iluminación LED. Distribuidores oficiales Tecnolite, Mean Well, Lutron. +15 años iluminando Bogotá.'
    });
    this.meta.updateTag({property: 'og:type', content: 'website'});
    this.meta.updateTag({property: 'og:url', content: 'https://leaderled.com.co'});
    this.meta.updateTag({property: 'og:image', content: 'https://leaderled.com.co/LdLd3d_sinfondo.png'});
    this.addLocalBusinessSchema();
  }


  private addLocalBusinessSchema() {
    this.seoSchema.addJsonLd({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LeaderLed",
      "description": "Distribuidor especializado en iluminación LED y soluciones personalizadas",
      "url": "https://leaderled.com.co",
      "telephone": "+57 313 205 6541",
      "email": "leaderled@hotmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "addressCountry": "CO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "4.6097",
        "longitude": "-74.0817"
      },
      "openingHours": "Mo-Fr 08:00-18:00, Sa 08:00-14:00",
      "priceRange": "$$",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "4.6097",
          "longitude": "-74.0817"
        },
        "geoRadius": "50000"
      }
    })
  }

}
