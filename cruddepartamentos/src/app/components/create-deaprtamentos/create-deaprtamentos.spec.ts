import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeaprtamentos } from './create-deaprtamentos';

describe('CreateDeaprtamentos', () => {
  let component: CreateDeaprtamentos;
  let fixture: ComponentFixture<CreateDeaprtamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateDeaprtamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDeaprtamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
