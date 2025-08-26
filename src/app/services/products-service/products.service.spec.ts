import { TestBed } from '@angular/core/testing';

import { RealProductsService } from './real-products.service';

describe('ProductsService', () => {
  let service: RealProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
