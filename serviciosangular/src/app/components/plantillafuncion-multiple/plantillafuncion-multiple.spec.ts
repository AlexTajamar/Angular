import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillafuncionMultiple } from './plantillafuncion-multiple';

describe('PlantillafuncionMultiple', () => {
  let component: PlantillafuncionMultiple;
  let fixture: ComponentFixture<PlantillafuncionMultiple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantillafuncionMultiple]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantillafuncionMultiple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
