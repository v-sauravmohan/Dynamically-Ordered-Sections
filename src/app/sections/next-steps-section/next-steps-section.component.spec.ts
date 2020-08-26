import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStepsSectionComponent } from './next-steps-section.component';

describe('NextStepsSectionComponent', () => {
  let component: NextStepsSectionComponent;
  let fixture: ComponentFixture<NextStepsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextStepsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStepsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
