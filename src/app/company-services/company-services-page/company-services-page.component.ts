import { Component } from '@angular/core';
import {PresentationComponent} from '../../home/presentation/presentation.component';
import {ListServiceCard} from '../list-service-card/list-service-card';

@Component({
  selector: 'app-company-services-page',
  imports: [
    PresentationComponent,
    ListServiceCard
  ],
  templateUrl: './company-services-page.component.html',
  styleUrl: './company-services-page.component.scss'
})
export class CompanyServicesPageComponent {

}
