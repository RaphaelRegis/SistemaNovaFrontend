import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecosLista } from './enderecos-lista';

describe('EnderecosLista', () => {
  let component: EnderecosLista;
  let fixture: ComponentFixture<EnderecosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
