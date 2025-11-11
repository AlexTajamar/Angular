import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDepartamentos } from './home-departamentos';

describe('HomeDepartamentos', () => {
  let component: HomeDepartamentos;
  let fixture: ComponentFixture<HomeDepartamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDepartamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDepartamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
