import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCadastroCliente } from './modal-cadastro-cliente';

describe('ModalCadastroCliente', () => {
  let component: ModalCadastroCliente;
  let fixture: ComponentFixture<ModalCadastroCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCadastroCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCadastroCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
