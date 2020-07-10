import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plato_pedidoComponent } from './plato_pedido.component';

describe('CategoriaComponent', () => {
  let component: Plato_pedidoComponent;
  let fixture: ComponentFixture<Plato_pedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plato_pedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plato_pedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
