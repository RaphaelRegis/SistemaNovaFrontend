import { TestBed } from '@angular/core/testing';

import { ServicosRequest } from './servicos-request';

describe('ServicosRequest', () => {
  let service: ServicosRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicosRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
