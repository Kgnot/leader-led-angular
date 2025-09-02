import {Component, inject, OnInit} from '@angular/core';
import {ContactCard} from '../contact-card/contact-card';
import {PresentationComponent} from '../../utils/presentation/presentation.component';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  imports: [
    ContactCard,
    PresentationComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent implements OnInit {
  private meta = inject(Meta);
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Contacto LeaderLed Bogotá | Henry Ricaurte | Tel: 281 6903');

    this.meta.updateTag({
      name: 'description',
      content: 'Contacta a LeaderLed para cotizaciones de iluminación LED. Henry Ricaurte, +15 años de experiencia. Tel: 281 6903, Cel: 313 205 6541. Centro Bogotá.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'contacto LeaderLed, cotización LED Bogotá, Henry Ricaurte, iluminación LED centro Bogotá, teléfono LeaderLed'
    });

    // Contact Schema
    this.addContactSchema();
  }

  private addContactSchema() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contacto LeaderLed",
      "description": "Información de contacto para cotizaciones y consultas sobre iluminación LED",
      "mainEntity": {
        "@type": "LocalBusiness",
        "name": "LeaderLed",
        "founder": "Henry Ricaurte Rodriguez",
        "telephone": ["281 6903", "+57 313 205 6541"],
        "email": "leaderled@hotmail.com",
        "url": "https://leaderled.com.co",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Centro, Bogotá",
          "addressRegion": "Cundinamarca",
          "addressCountry": "CO"
        }
      }
    });
    document.head.appendChild(script);
  }
}
