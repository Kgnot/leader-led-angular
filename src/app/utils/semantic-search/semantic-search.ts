import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {SemanticSearchService} from '../../services/semantic-search/semantic-search.service';
import data from '../../../assets/data/inventory.json'
import {JsonPipe} from '@angular/common';



@Component({
  selector: 'app-semantic-search',
  templateUrl: './semantic-search.html',
  imports: [FormsModule, JsonPipe],
  styleUrl: 'semantic-search.scss'
})
export class SemanticSearchComponent {

  result: any = null;

  constructor(private semantic: SemanticSearchService) {
  }

  test(){
    this.semantic.search('Quiero un vector system pro', JSON.stringify(data))
      .then(r => {
        this.result = r.map((m: Map<string, any>) => Object.fromEntries(m));
      });

  }

  testTopN() {
    this.semantic.topN('quiro una suspencion lineal negra ', JSON.stringify(data), 5)
      .then(r => this.result = r.map((m:Map<string,any>) => Object.fromEntries(m)))
      .catch(e => console.error("Error WASM topN:", e));
  }


}
