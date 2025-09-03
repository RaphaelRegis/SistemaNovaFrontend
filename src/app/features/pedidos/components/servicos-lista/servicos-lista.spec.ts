import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosLista } from './servicos-lista';

describe('ServicosLista', () => {
  let component: ServicosLista;
  let fixture: ComponentFixture<ServicosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
