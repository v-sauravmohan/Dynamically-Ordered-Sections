import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDynamicSectionComponent } from './basic-dynamic-section.component';

describe('BasicDynamicSectionComponent', () => {
  let component: BasicDynamicSectionComponent;
  let fixture: ComponentFixture<BasicDynamicSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicDynamicSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDynamicSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
