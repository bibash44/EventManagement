import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSectionComponentComponent } from './review-section-component.component';

describe('ReviewSectionComponentComponent', () => {
  let component: ReviewSectionComponentComponent;
  let fixture: ComponentFixture<ReviewSectionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewSectionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSectionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
