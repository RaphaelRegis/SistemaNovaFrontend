import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesHome } from './clientes-home';

describe('ClientesHome', () => {
  let component: ClientesHome;
  let fixture: ComponentFixture<ClientesHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientesHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientesHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
