import { Component } from '@angular/core';
import {FaIconComponent, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faFacebookF, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    FaIconComponent,
    RouterLink
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faInstagram, faLinkedinIn);
  }
}
