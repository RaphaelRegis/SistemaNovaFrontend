import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesBarraDePesquisa } from './clientes-barra-de-pesquisa';

describe('ClientesBarraDePesquisa', () => {
  let component: ClientesBarraDePesquisa;
  let fixture: ComponentFixture<ClientesBarraDePesquisa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesBarraDePesquisa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesBarraDePesquisa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
