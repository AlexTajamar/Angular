import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaMultiplicar } from './tabla-multiplicar';

describe('TablaMultiplicar', () => {
  let component: TablaMultiplicar;
  let fixture: ComponentFixture<TablaMultiplicar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
