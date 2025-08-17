import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAtualizarCliente } from './modal-atualizar-cliente';

describe('ModalAtualizarCliente', () => {
  let component: ModalAtualizarCliente;
  let fixture: ComponentFixture<ModalAtualizarCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAtualizarCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAtualizarCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
