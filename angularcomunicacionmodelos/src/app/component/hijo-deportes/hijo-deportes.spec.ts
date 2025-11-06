import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoDeportes } from './hijo-deportes';

describe('HijoDeportes', () => {
  let component: HijoDeportes;
  let fixture: ComponentFixture<HijoDeportes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoDeportes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoDeportes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
