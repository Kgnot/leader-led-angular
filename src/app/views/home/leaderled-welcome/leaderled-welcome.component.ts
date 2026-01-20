import { Component } from '@angular/core';
import { SemanticSearchUIService } from '../../../services/semantic-search-ui-service/semantic-search-uiservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderled-welcome',
  imports: [],
  templateUrl: './leaderled-welcome.component.html',
  styleUrl: './leaderled-welcome.component.scss'
})
export class LeaderledWelcomeComponent {


  constructor(private semanticUI: SemanticSearchUIService, private router: Router) { }

  redirectToCatalogs() {
    this.router.navigate(['/catalogs']);
  }

  openAssistant() {
    this.semanticUI.open();
  }
}
