import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurSuccessStoryComponentComponent } from './our-success-story-component.component';

describe('OurSuccessStoryComponentComponent', () => {
  let component: OurSuccessStoryComponentComponent;
  let fixture: ComponentFixture<OurSuccessStoryComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurSuccessStoryComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurSuccessStoryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
