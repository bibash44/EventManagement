import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStoryEditComponent } from './success-story-edit.component';

describe('SuccessStoryEditComponent', () => {
  let component: SuccessStoryEditComponent;
  let fixture: ComponentFixture<SuccessStoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
