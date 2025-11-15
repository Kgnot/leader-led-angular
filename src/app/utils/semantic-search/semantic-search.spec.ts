import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemanticSearch } from './semantic-search';

describe('SemanticSearch', () => {
  let component: SemanticSearch;
  let fixture: ComponentFixture<SemanticSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SemanticSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemanticSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
