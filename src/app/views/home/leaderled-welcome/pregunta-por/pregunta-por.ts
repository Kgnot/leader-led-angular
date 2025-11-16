import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pregunta-por',
  imports: [],
  templateUrl: './pregunta-por.html',
  styleUrl: './pregunta-por.scss'
})
export class PreguntaPor {
  @Input() text: string = '';

}
