import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDepartamentos } from './menu-departamentos';

describe('MenuDepartamentos', () => {
  let component: MenuDepartamentos;
  let fixture: ComponentFixture<MenuDepartamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuDepartamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDepartamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
