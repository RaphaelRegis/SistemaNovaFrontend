import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAtualizarCliente } from './form-atualizar-cliente';

describe('FormAtualizarCliente', () => {
  let component: FormAtualizarCliente;
  let fixture: ComponentFixture<FormAtualizarCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormAtualizarCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAtualizarCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
