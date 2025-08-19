import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocoPedido } from './bloco-pedido';

describe('BlocoPedido', () => {
  let component: BlocoPedido;
  let fixture: ComponentFixture<BlocoPedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocoPedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocoPedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
