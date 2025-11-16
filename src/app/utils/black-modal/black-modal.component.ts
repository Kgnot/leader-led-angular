import {Component, EventEmitter, Output, Inject, PLATFORM_ID, OnInit, OnDestroy} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-black-modal',
  imports: [],
  templateUrl: './black-modal.component.html',
  styleUrl: './black-modal.component.scss'
})
export class BlackModalComponent implements OnInit, OnDestroy{
  @Output() close = new EventEmitter<void>();
  private scrollPosition = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onClick() {
    this.close.emit();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Guardar la posición actual del scroll
      this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Fijar el body en esa posición
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this.scrollPosition}px`;
      document.body.style.width = '100%';
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // Restaurar el body
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      // Volver a la posición donde estaba
      window.scrollTo(0, this.scrollPosition);
    }
  }
}
