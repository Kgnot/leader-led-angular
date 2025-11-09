import { Component } from '@angular/core';
import {ConsultButton} from "../consult-botton/consult-button.component";

@Component({
  selector: 'app-contact-card',
    imports: [
        ConsultButton
    ],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.scss'
})
export class ContactCard {

}
