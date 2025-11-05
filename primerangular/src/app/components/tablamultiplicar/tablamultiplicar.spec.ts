import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablamultiplicar } from './tablamultiplicar';

describe('Tablamultiplicar', () => {
  let component: Tablamultiplicar;
  let fixture: ComponentFixture<Tablamultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Tablamultiplicar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tablamultiplicar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
