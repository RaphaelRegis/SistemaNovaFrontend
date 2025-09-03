import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosLista } from './produtos-lista';

describe('ProdutosLista', () => {
  let component: ProdutosLista;
  let fixture: ComponentFixture<ProdutosLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosLista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
