import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoCoche } from './hijo-coche';

describe('HijoCoche', () => {
  let component: HijoCoche;
  let fixture: ComponentFixture<HijoCoche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HijoCoche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoCoche);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
