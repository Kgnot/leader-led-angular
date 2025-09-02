import { Component } from '@angular/core';
import {ConsultButton} from '../consult-botton/consult-button.component';
import {ContactCard} from '../contact-card/contact-card';
import {PresentationComponent} from '../../utils/presentation/presentation.component';

@Component({
  selector: 'app-contact-page',
  imports: [
    ConsultButton,
    ContactCard,
    PresentationComponent
  ],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
