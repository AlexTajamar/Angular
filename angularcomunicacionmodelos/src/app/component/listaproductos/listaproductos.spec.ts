import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaproductos } from './listaproductos';

describe('Listaproductos', () => {
  let component: Listaproductos;
  let fixture: ComponentFixture<Listaproductos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Listaproductos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaproductos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
