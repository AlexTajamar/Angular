import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Plantillafuncionsimple } from './plantillafuncionsimple';

describe('Plantillafuncionsimple', () => {
  let component: Plantillafuncionsimple;
  let fixture: ComponentFixture<Plantillafuncionsimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Plantillafuncionsimple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Plantillafuncionsimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
