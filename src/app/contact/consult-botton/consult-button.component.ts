import {Component, inject, Input} from '@angular/core';
import {MsgWsp} from '../../services';

@Component({
  selector: 'app-consult-button',
  imports: [],
  templateUrl: './consult-button.component.html',
  styleUrl: './consult-button.component.scss'
})
export class ConsultButton {

  @Input() message: string = '';
  private msgWhatsappService = inject(MsgWsp);

  sendMessage() {
    const message = this.message;
    this.msgWhatsappService.sendMessage(message);
  }
}
