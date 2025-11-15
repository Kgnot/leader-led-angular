import { Component } from '@angular/core';
import {PreguntaPor} from './pregunta-por/pregunta-por';

@Component({
  selector: 'app-leaderled-welcome',
  imports: [
    PreguntaPor
  ],
  templateUrl: './leaderled-welcome.component.html',
  styleUrl: './leaderled-welcome.component.scss'
})
export class LeaderledWelcomeComponent {

}
