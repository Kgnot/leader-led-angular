import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Brand } from '../../../services/brands/brands.service';
import { MsgWsp } from '../../../services/message-wsp-service/msg-wsp';

@Component({
  selector: 'app-catalog-viewer-modal',
  standalone: true,
  templateUrl: './catalog-viewer-modal.component.html',
  styleUrl: './catalog-viewer-modal.component.scss'
})
export class CatalogViewerModalComponent implements OnInit, OnChanges, OnDestroy {
  @Input() brand!: Brand;
  @Input() visible = false;
  @Output() close = new EventEmitter<void>();

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private sanitizer: DomSanitizer,
    private msgWsp: MsgWsp
  ) {}

  ngOnInit() {
    this.toggleBodyScroll(this.visible);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      this.toggleBodyScroll(this.visible);
    }
  }

  ngOnDestroy(): void {
    this.toggleBodyScroll(false);
  }

  get safePdfUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.brand.pdfUrl);
  }

  private toggleBodyScroll(disable: boolean) {
    if (!isPlatformBrowser(this.platformId)) return;

    const body = document.body;
    if (disable) {
      body.classList.add('no-scroll');
    } else {
      body.classList.remove('no-scroll');
    }
  }

  onClose() {
    this.close.emit();
  }

  onPreguntar() {
    const message = `Hola, me interesa el catálogo de ${this.brand.name}. ¿Podrían brindarme más información?`;
    this.msgWsp.sendMessage(message);
  }
}