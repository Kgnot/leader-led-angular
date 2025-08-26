import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import {Header} from './utils/header/header';
import {FooterComponent} from './utils/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Header, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('LeaderLedAngular');
}
