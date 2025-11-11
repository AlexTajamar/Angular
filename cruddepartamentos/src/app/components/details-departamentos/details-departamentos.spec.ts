import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepartamentos } from './details-departamentos';

describe('DetailsDepartamentos', () => {
  let component: DetailsDepartamentos;
  let fixture: ComponentFixture<DetailsDepartamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsDepartamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsDepartamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
