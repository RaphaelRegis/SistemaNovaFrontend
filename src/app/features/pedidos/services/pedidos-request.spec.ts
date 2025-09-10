import { TestBed } from '@angular/core/testing';

import { PedidosRequest } from './pedidos-request';

describe('PedidosRequest', () => {
  let service: PedidosRequest;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosRequest);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
