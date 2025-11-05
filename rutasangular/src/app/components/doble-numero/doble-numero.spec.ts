import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DobleNumero } from './doble-numero';

describe('DobleNumero', () => {
  let component: DobleNumero;
  let fixture: ComponentFixture<DobleNumero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DobleNumero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DobleNumero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
