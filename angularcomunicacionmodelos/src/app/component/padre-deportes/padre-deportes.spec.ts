import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreDeportes } from './padre-deportes';

describe('PadreDeportes', () => {
  let component: PadreDeportes;
  let fixture: ComponentFixture<PadreDeportes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PadreDeportes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreDeportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
