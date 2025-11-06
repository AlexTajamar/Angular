import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabla } from './menu-tabla';

describe('MenuTabla', () => {
  let component: MenuTabla;
  let fixture: ComponentFixture<MenuTabla>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuTabla]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTabla);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
