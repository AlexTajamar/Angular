import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasStandaloneTrue } from './personas-standalone-true';

describe('PersonasStandaloneTrue', () => {
  let component: PersonasStandaloneTrue;
  let fixture: ComponentFixture<PersonasStandaloneTrue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonasStandaloneTrue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasStandaloneTrue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
