import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEmpleados } from './perfil-empleados';

describe('PerfilEmpleados', () => {
  let component: PerfilEmpleados;
  let fixture: ComponentFixture<PerfilEmpleados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerfilEmpleados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEmpleados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
