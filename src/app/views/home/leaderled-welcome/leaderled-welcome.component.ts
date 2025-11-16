import { Component } from '@angular/core';
import {SemanticSearchUIService} from '../../../services/semantic-search-ui-service/semantic-search-uiservice';

@Component({
  selector: 'app-leaderled-welcome',
  imports: [],
  templateUrl: './leaderled-welcome.component.html',
  styleUrl: './leaderled-welcome.component.scss'
})
export class LeaderledWelcomeComponent {


  constructor(private semanticUI: SemanticSearchUIService) {}

  openAssistant() {
    this.semanticUI.open();
  }
}
