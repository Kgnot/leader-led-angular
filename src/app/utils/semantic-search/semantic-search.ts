import { Component } from '@angular/core';
import { SemanticSearchService } from '../../services/semantic-search/semantic-search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-semantic-search',
  templateUrl: './semantic-search.html',
  imports: [FormsModule],
  styleUrl: 'semantic-search.scss'
})
export class SemanticSearchComponent {

  question = "";
  answer: string = "";

  constructor(private search: SemanticSearchService) {}

  async submit() {
    this.answer = "Cargando...";

    this.search.ask(this.question).subscribe({
      next: (res: any) => {
        this.answer = res.answer;
      },
      error: (err) => {
        console.error(err);
        this.answer = "Hubo un error en el servidor.";
      }
    });
  }
}
