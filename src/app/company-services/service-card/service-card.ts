import {Component, inject, Input} from '@angular/core';
import {MsgWsp} from '../../services';

@Component({
  selector: 'app-service-card',
  imports: [],
  templateUrl: './service-card.html',
  styleUrl: './service-card.scss'
})
export class ServiceCard {

  @Input({required: true}) titleCard: string = '';
  @Input({required: true}) descriptionCard: string = '';
  @Input({required: true}) imageCard: string = '';

  // service

  private msgService = inject(MsgWsp);

  sendMessage() {
    const message = `Hola, me interesa el servicio ${this.titleCard}`;
    this.msgService.sendMessage(message);
  }


}
