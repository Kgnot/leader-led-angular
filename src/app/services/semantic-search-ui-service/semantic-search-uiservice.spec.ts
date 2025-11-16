import { TestBed } from '@angular/core/testing';

import { SemanticSearchUIService } from './semantic-search-uiservice';

describe('SemanticSearchUIService', () => {
  let service: SemanticSearchUIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemanticSearchUIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
