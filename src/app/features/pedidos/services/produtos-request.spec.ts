import { TestBed } from '@angular/core/testing';

import { ProdutosRequest } from './produtos-request';

describe('ProdutosRequest', () => {
  let service: ProdutosRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
