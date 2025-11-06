import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreCoche } from './padre-coche';

describe('PadreCoche', () => {
  let component: PadreCoche;
  let fixture: ComponentFixture<PadreCoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreCoche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreCoche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
