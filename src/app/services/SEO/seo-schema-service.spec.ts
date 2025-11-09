import { TestBed } from '@angular/core/testing';

import { SeoSchemaService } from './seo-schema-service';

describe('SeoSchemaService', () => {
  let service: SeoSchemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoSchemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
