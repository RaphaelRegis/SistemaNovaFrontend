import { TestBed } from '@angular/core/testing';

import { ServiceAtualizarCliente } from './service-atualizar-cliente';

describe('ServiceAtualizarCliente', () => {
  let service: ServiceAtualizarCliente;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAtualizarCliente);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
