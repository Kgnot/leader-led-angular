import {Component, OnInit, signal} from '@angular/core';
import {RouterOutlet, RouterModule, Router, NavigationEnd} from '@angular/router';
import {Header} from './utils/header/header';
import {FooterComponent} from './utils/footer/footer.component';
import {SemanticSearchComponent} from './utils/semantic-search/semantic-search';
import {filter} from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, FooterComponent, SemanticSearchComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('LeaderLedAngular');

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    })
  }

}
