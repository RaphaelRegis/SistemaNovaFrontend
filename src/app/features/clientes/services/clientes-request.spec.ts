import { TestBed } from '@angular/core/testing';

import { ClientesRequest } from './clientes-request';

describe('ClientesRequest', () => {
  let service: ClientesRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientesRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
