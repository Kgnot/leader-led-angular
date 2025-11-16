import { Component } from '@angular/core';
import {LeaderledWelcomeComponent} from '../leaderled-welcome/leaderled-welcome.component';

@Component({
  selector: 'app-principal-banner',
  imports: [
    LeaderledWelcomeComponent
  ],
  templateUrl: './principal-banner.component.html',
  styleUrl: './principal-banner.component.scss'
})
export class PrincipalBannerComponent {

}
