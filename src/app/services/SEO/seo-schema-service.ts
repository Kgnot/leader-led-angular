import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class SeoSchemaService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  addJsonLd(schema: object) {
    if (!isPlatformBrowser(this.platformId)) return;
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
