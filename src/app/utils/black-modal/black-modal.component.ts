import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-black-modal',
  imports: [],
  templateUrl: './black-modal.component.html',
  styleUrl: './black-modal.component.scss'
})
export class BlackModalComponent {
  @Output() close = new EventEmitter<void>();

  onClick() {
    this.close.emit();
  }
}
