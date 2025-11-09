import { Component, EventEmitter, Output, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-black-modal',
  imports: [],
  templateUrl: './black-modal.component.html',
  styleUrl: './black-modal.component.scss'
})
export class BlackModalComponent {
  @Output() close = new EventEmitter<void>();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  onClick() {
    this.close.emit();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.add('no-scroll');
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('no-scroll');
    }
  }
}
