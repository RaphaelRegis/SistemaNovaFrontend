import { TestBed } from '@angular/core/testing';

import { EnderecosRequest } from './enderecos-request';

describe('EnderecosRequest', () => {
  let service: EnderecosRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnderecosRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
