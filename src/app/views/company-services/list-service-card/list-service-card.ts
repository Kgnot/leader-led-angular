import { Component } from '@angular/core';
import {ServiceCard} from '../service-card/service-card';

@Component({
  selector: 'app-list-service-card',
  imports: [
    ServiceCard
  ],
  templateUrl: './list-service-card.html',
  styleUrl: './list-service-card.scss'
})
export class ListServiceCard {

}
